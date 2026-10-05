/* =========================================================
   GAMEVAULT — THE VAULT CONTROLLER
   Shared Cart System
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GET BILLIONAIRE
    ===================================================== */

    const params =
        new URLSearchParams(window.location.search);

    const billionaireId =
        params.get("id");


    /* =====================================================
       SHARED CART KEY
    ===================================================== */

    const CART_KEY =
        `gamevaultCart_${billionaireId}`;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const searchInput =
        document.getElementById("searchInput");

    const clearSearch =
        document.getElementById("clearSearch");

    const resultCount =
        document.getElementById("resultCount");

    const productsGrid =
        document.getElementById("productsGrid");

    const noResults =
        document.getElementById("noResults");

    const resetFilters =
        document.getElementById("resetFilters");

    const openFilters =
        document.getElementById("openFilters");

    const closeFilters =
        document.getElementById("closeFilters");

    const filterSidebar =
        document.getElementById("filterSidebar");

    const sortSelect =
        document.getElementById("sortSelect");

    const desktopSortSelect =
        document.getElementById("desktopSortSelect");

    const cartButton =
        document.getElementById("cartButton");

    const cartCount =
        document.getElementById("cartCount");

    const backButton =
        document.getElementById("backButton");


    /* =====================================================
       STATE
    ===================================================== */

    let searchTerm = "";

    let selectedCategories = [];

    let selectedAvailability = [];

    let selectedPrice = "all";

    let currentSort = "featured";


    /* =====================================================
       CART
    ===================================================== */

    function getCart() {

        try {

            return JSON.parse(
                localStorage.getItem(CART_KEY)
            ) || [];

        } catch (error) {

            console.error(
                "Unable to read GameVault cart:",
                error
            );

            return [];

        }

    }


    function saveCart(cart) {

        localStorage.setItem(
            CART_KEY,
            JSON.stringify(cart)
        );

    }


    /* =====================================================
       NORMALIZE CART ITEM
    ===================================================== */

    function normalizeCartItem(item) {

        return {

            id:
                item.id ||
                item.productId,

            name:
                item.name ||
                item.title ||
                "Unknown Item",

            category:
                item.category ||
                "other",

            categoryName:
                item.categoryName ||
                item.category ||
                "Other",

            description:
                item.description ||
                "",

            price:
                Number(
                    item.price
                ) || 0,

            quantity:
                Math.max(
                    1,
                    Number(
                        item.quantity
                    ) || 1
                ),

            icon:
                item.icon ||
                item.symbol ||
                "💎",

            availability:
                item.availability ||
                "unlimited"

        };

    }


    /* =====================================================
       ADD TO CART
    ===================================================== */

    function addToCart(product, quantity = 1) {

        const cart =
            getCart().map(
                normalizeCartItem
            );


        const existing =
            cart.find(
                item =>
                    item.id === product.id
            );


        if (existing) {

            existing.quantity += quantity;

        } else {

            cart.push({

                id: product.id,

                name: product.name,

                category: product.category,

                categoryName:
                    product.categoryName,

                description:
                    product.description,

                price:
                    Number(product.price) || 0,

                quantity: quantity,

                icon:
                    product.icon || "💎",

                availability:
                    product.availability ||
                    "unlimited"

            });

        }


        saveCart(cart);

        updateCartCount();

        showToast(
            `${product.name} added to cart`
        );

    }


    /* =====================================================
       REMOVE FROM CART
    ===================================================== */

    function removeFromCart(productId) {

        const cart =
            getCart().filter(
                item =>
                    item.id !== productId
            );

        saveCart(cart);

        updateCartCount();

    }


    /* =====================================================
       UPDATE CART QUANTITY
    ===================================================== */

    function updateQuantity(
        productId,
        change
    ) {

        const cart =
            getCart().map(
                normalizeCartItem
            );


        const item =
            cart.find(
                product =>
                    product.id === productId
            );


        if (!item) {
            return;
        }


        item.quantity += change;


        if (item.quantity <= 0) {

            removeFromCart(
                productId
            );

            return;

        }


        if (
            item.availability === "one" &&
            item.quantity > 1
        ) {

            item.quantity = 1;

        }


        saveCart(cart);

        updateCartCount();

    }


    /* =====================================================
       CART COUNT
    ===================================================== */

    function updateCartCount() {

        const cart =
            getCart().map(
                normalizeCartItem
            );


        const count =
            cart.reduce(
                (total, item) =>
                    total +
                    item.quantity,
                0
            );


        if (cartCount) {

            cartCount.textContent =
                count;

        }


        /*
         * Also support any other
         * GameVault cart buttons.
         */

        document
            .querySelectorAll(
                "[data-cart-button]"
            )
            .forEach(button => {

                const badge =
                    button.querySelector(
                        ".cart-count"
                    );

                if (badge) {

                    badge.textContent =
                        count;

                }

            });

    }


    /* =====================================================
       FILTER PRODUCTS
    ===================================================== */

    function getFilteredProducts() {

        let products =
            Array.isArray(vaultItems)
                ? [...vaultItems]
                : [];


        /* SEARCH */

        if (searchTerm) {

            const query =
                searchTerm.toLowerCase();

            products =
                products.filter(
                    item => {

                        const searchable = [

                            item.name,

                            item.description,

                            item.categoryName,

                            item.category

                        ]
                            .filter(Boolean)
                            .join(" ")
                            .toLowerCase();


                        return searchable.includes(
                            query
                        );

                    }
                );

        }


        /* CATEGORY */

        if (
            selectedCategories.length > 0
        ) {

            products =
                products.filter(
                    item =>
                        selectedCategories.includes(
                            item.category
                        )
                );

        }


        /* AVAILABILITY */

        if (
            selectedAvailability.length > 0
        ) {

            products =
                products.filter(
                    item =>
                        selectedAvailability.includes(
                            item.availability
                        )
                );

        }


        /* PRICE */

        if (
            selectedPrice !== "all"
        ) {

            const price =
                Number(selectedPrice);


            products =
                products.filter(
                    item => {

                        const itemPrice =
                            Number(
                                item.price
                            ) || 0;


                        if (
                            price === 10000
                        ) {

                            return itemPrice < 10000;

                        }


                        if (
                            price === 100000
                        ) {

                            return (
                                itemPrice >= 10000 &&
                                itemPrice < 100000
                            );

                        }


                        if (
                            price === 1000000
                        ) {

                            return (
                                itemPrice >= 100000 &&
                                itemPrice < 1000000
                            );

                        }


                        if (
                            price === 10000000
                        ) {

                            return (
                                itemPrice >= 1000000 &&
                                itemPrice < 10000000
                            );

                        }


                        if (
                            price === 1000000000000
                        ) {

                            return itemPrice >= 10000000;

                        }


                        return true;

                    }
                );

        }


        /* SORT */

        switch (currentSort) {

            case "low":

                products.sort(
                    (a, b) =>
                        a.price - b.price
                );

                break;


            case "high":

                products.sort(
                    (a, b) =>
                        b.price - a.price
                );

                break;


            case "name":

                products.sort(
                    (a, b) =>
                        a.name.localeCompare(
                            b.name
                        )
                );

                break;


            default:

                products.sort(
                    (a, b) =>
                        Number(b.featured) -
                        Number(a.featured)
                );

                break;

        }


        return products;

    }


    /* =====================================================
       FORMAT PRICE
    ===================================================== */

    function formatPrice(value) {

        const amount =
            Number(value) || 0;


        if (amount >= 1e12) {

            return `$${(
                amount / 1e12
            ).toFixed(2)}T`;

        }


        if (amount >= 1e9) {

            return `$${(
                amount / 1e9
            ).toFixed(2)}B`;

        }


        if (amount >= 1e6) {

            return `$${(
                amount / 1e6
            ).toFixed(2)}M`;

        }


        if (amount >= 1e3) {

            return `$${(
                amount / 1e3
            ).toFixed(1)}K`;

        }


        return `$${amount.toLocaleString(
            "en-US"
        )}`;

    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");

    }


    /* =====================================================
       PRODUCT CARD
    ===================================================== */

    function createProductCard(product) {

        const safeName =
            escapeHTML(
                product.name
            );


        const safeDescription =
            escapeHTML(
                product.description
            );


        const categoryName =
            escapeHTML(
                product.categoryName ||
                product.category
            );


        let badgeText =
            "IN STOCK";


        if (
            product.availability === "one"
        ) {

            badgeText =
                "ONE OF ONE";

        }


        else if (
            product.availability === "limited"
        ) {

            badgeText =
                `${product.stock || 0} AVAILABLE`;

        }


        const cart =
            getCart().map(
                normalizeCartItem
            );


        const cartItem =
            cart.find(
                item =>
                    item.id === product.id
            );


        const quantity =
            cartItem
                ? cartItem.quantity
                : 0;


        let quantityHTML = "";


        if (
            product.availability === "one"
        ) {

            quantityHTML = `

                <div class="one-only">

                    ONE OF ONE

                </div>

            `;

        }

        else {

            quantityHTML = `

                <div
                    class="quantity-control"
                    data-product-id="${product.id}"
                >

                    <button
                        type="button"
                        data-action="minus"
                        data-id="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${quantity || 1}
                    </span>

                    <button
                        type="button"
                        data-action="plus"
                        data-id="${product.id}"
                    >
                        +
                    </button>

                </div>

            `;

        }


        return `

            <article
                class="product-card"
                data-product-id="${product.id}"
            >

                <div class="product-image">

                    <div class="vault-symbol">
                        ${product.icon || "💎"}
                    </div>

                    <div class="badge">
                        ${badgeText}
                    </div>

                </div>


                <div class="product-content">

                    <div class="product-category">
                        ${categoryName}
                    </div>


                    <h3>
                        ${safeName}
                    </h3>


                    <p>
                        ${safeDescription}
                    </p>


                    <div class="product-price">
                        ${formatPrice(product.price)}
                    </div>


                    ${quantityHTML}


                    <button
                        class="add-cart"
                        type="button"
                        data-add-cart="${product.id}"
                    >
                        🛒 ADD TO CART
                    </button>

                </div>

            </article>

        `;

    }


    /* =====================================================
       RENDER PRODUCTS
    ===================================================== */

    function renderProducts() {

        if (!productsGrid) {
            return;
        }


        const products =
            getFilteredProducts();


        if (resultCount) {

            resultCount.textContent =
                products.length;

        }


        productsGrid.innerHTML =
            products
                .map(createProductCard)
                .join("");


        if (noResults) {

            noResults.style.display =
                products.length === 0
                    ? "block"
                    : "none";

        }


        bindProductButtons();

    }


    /* =====================================================
       PRODUCT BUTTONS
    ===================================================== */

    function bindProductButtons() {

        document
            .querySelectorAll(
                "[data-add-cart]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            button.dataset.addCart;


                        const product =
                            vaultItems.find(
                                item =>
                                    item.id === id
                            );


                        if (!product) {
                            return;
                        }


                        addToCart(
                            product,
                            1
                        );

                    }
                );

            });


        document
            .querySelectorAll(
                "[data-action]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        const id =
                            button.dataset.id;


                        const action =
                            button.dataset.action;


                        if (
                            action === "plus"
                        ) {

                            updateQuantity(
                                id,
                                1
                            );

                        }


                        else if (
                            action === "minus"
                        ) {

                            updateQuantity(
                                id,
                                -1
                            );

                        }


                        renderProducts();

                    }
                );

            });

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                searchTerm =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                renderProducts();

            }
        );

    }


    if (clearSearch) {

        clearSearch.addEventListener(
            "click",
            () => {

                if (searchInput) {

                    searchInput.value =
                        "";

                }


                searchTerm =
                    "";


                renderProducts();

            }
        );

    }


    /* =====================================================
       CATEGORY FILTER
    ===================================================== */

    document
        .querySelectorAll(
            ".category-filter"
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    selectedCategories =
                        Array.from(
                            document.querySelectorAll(
                                ".category-filter:checked"
                            )
                        )
                        .map(
                            checkbox =>
                                checkbox.value
                        );


                    renderProducts();

                }
            );

        });


    /* =====================================================
       AVAILABILITY FILTER
    ===================================================== */

    document
        .querySelectorAll(
            ".availability-filter"
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    selectedAvailability =
                        Array.from(
                            document.querySelectorAll(
                                ".availability-filter:checked"
                            )
                        )
                        .map(
                            checkbox =>
                                checkbox.value
                        );


                    renderProducts();

                }
            );

        });


    /* =====================================================
       PRICE FILTER
    ===================================================== */

    document
        .querySelectorAll(
            'input[name="price"]'
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    selectedPrice =
                        input.value;


                    renderProducts();

                }
            );

        });


    /* =====================================================
       SORT
    ===================================================== */

    function changeSort(value) {

        currentSort =
            value;


        if (sortSelect) {

            sortSelect.value =
                value;

        }


        if (desktopSortSelect) {

            desktopSortSelect.value =
                value;

        }


        renderProducts();

    }


    if (sortSelect) {

        sortSelect.addEventListener(
            "change",
            () => {

                changeSort(
                    sortSelect.value
                );

            }
        );

    }


    if (desktopSortSelect) {

        desktopSortSelect.addEventListener(
            "change",
            () => {

                changeSort(
                    desktopSortSelect.value
                );

            }
        );

    }


    /* =====================================================
       RESET FILTERS
    ===================================================== */

    if (resetFilters) {

        resetFilters.addEventListener(
            "click",
            () => {

                searchTerm =
                    "";


                selectedCategories =
                    [];


                selectedAvailability =
                    [];


                selectedPrice =
                    "all";


                currentSort =
                    "featured";


                if (searchInput) {

                    searchInput.value =
                        "";

                }


                document
                    .querySelectorAll(
                        ".category-filter"
                    )
                    .forEach(
                        checkbox =>
                            checkbox.checked =
                                false
                    );


                document
                    .querySelectorAll(
                        ".availability-filter"
                    )
                    .forEach(
                        checkbox =>
                            checkbox.checked =
                                false
                    );


                const allPrice =
                    document.querySelector(
                        'input[name="price"][value="all"]'
                    );


                if (allPrice) {

                    allPrice.checked =
                        true;

                }


                if (sortSelect) {

                    sortSelect.value =
                        "featured";

                }


                if (desktopSortSelect) {

                    desktopSortSelect.value =
                        "featured";

                }


                renderProducts();

            }
        );

    }


    /* =====================================================
       MOBILE FILTER
    ===================================================== */

    if (openFilters) {

        openFilters.addEventListener(
            "click",
            () => {

                filterSidebar.classList.add(
                    "open"
                );

            }
        );

    }


    if (closeFilters) {

        closeFilters.addEventListener(
            "click",
            () => {

                filterSidebar.classList.remove(
                    "open"
                );

            }
        );

    }


    /* =====================================================
       CART BUTTON
    ===================================================== */

    function openVaultCart() {

        if (!billionaireId) {

            console.error(
                "Billionaire ID is missing."
            );

            return;

        }


        window.location.href =
            `/games/billionaire/cart?id=${encodeURIComponent(
                billionaireId
            )}`;

    }


    if (cartButton) {

        cartButton.addEventListener(
            "click",
            openVaultCart
        );

    }


    /* =====================================================
       BACK BUTTON
    ===================================================== */

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                if (!billionaireId) {

                    window.location.href =
                        "/games/billionaire";

                    return;

                }


                window.location.href =
                    `/games/billionaire/play?id=${encodeURIComponent(
                        billionaireId
                    )}`;

            }
        );

    }


    /* =====================================================
       TOAST
    ===================================================== */

    let toastTimer = null;


    function showToast(message) {

        let toast =
            document.querySelector(
                ".vault-toast"
            );


        if (!toast) {

            toast =
                document.createElement(
                    "div"
                );

            toast.className =
                "vault-toast";


            document.body.appendChild(
                toast
            );

        }


        toast.textContent =
            `✓ ${message}`;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                () => {

                    toast.classList.remove(
                        "show"
                    );

                },
                2200
            );

    }


    /* =====================================================
       STORAGE SYNC
    ===================================================== */

    window.addEventListener(
        "storage",
        event => {

            if (
                event.key === CART_KEY
            ) {

                updateCartCount();

                renderProducts();

            }

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    updateCartCount();

    renderProducts();

});