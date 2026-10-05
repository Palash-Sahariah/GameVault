document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       ELEMENTS
    ========================================================= */

    const productsGrid =
        document.getElementById("productsGrid");

    const searchInput =
        document.getElementById("searchInput");

    const clearSearch =
        document.getElementById("clearSearch");

    const resultCount =
        document.getElementById("resultCount");

    const noResults =
        document.getElementById("noResults");

    const cartButton =
        document.getElementById("cartButton");

    const cartCount =
        document.getElementById("cartCount");

    const backButton =
        document.getElementById("backButton");

    const filterSidebar =
        document.getElementById("filterSidebar");

    const openFilters =
        document.getElementById("openFilters");

    const closeFilters =
        document.getElementById("closeFilters");

    const resetFilters =
        document.getElementById("resetFilters");

    const sortSelect =
        document.getElementById("sortSelect");

    const desktopSortSelect =
        document.getElementById("desktopSortSelect");


    /* =========================================================
       BILLIONAIRE
    ========================================================= */

    const params =
        new URLSearchParams(window.location.search);

    const billionaireId =
        params.get("id");


    if (!billionaireId) {

        console.error(
            "GameVault: Billionaire ID is missing."
        );

    }


    /* =========================================================
       YACHT DATA
       
       IMPORTANT:
       Your data file contains:

           const yachtItems = [...]

       NOT:

           window.yachtItems

       Therefore we access yachtItems directly.
    ========================================================= */

    function getYachtItems() {

        try {

            if (
                typeof yachtItems !== "undefined" &&
                Array.isArray(yachtItems)
            ) {

                return yachtItems;

            }

        }

        catch (error) {

            console.error(
                "Unable to access yachtItems:",
                error
            );

        }


        /*
           Compatibility fallback.
        */

        if (
            Array.isArray(window.yachtItems)
        ) {

            return window.yachtItems;

        }


        if (
            Array.isArray(window.yachts)
        ) {

            return window.yachts;

        }


        console.error(
            "GameVault: yachtItems dataset was not found."
        );

        return [];

    }


    /* =========================================================
       SHARED CART
       
       ALL GAMEVAULT CATEGORIES USE:

       gamevaultCart_<billionaireId>
    ========================================================= */

    const CART_KEY =
        `gamevaultCart_${billionaireId}`;


    function getCart() {

        try {

            const stored =
                localStorage.getItem(CART_KEY);


            if (!stored) {

                return [];

            }


            const parsed =
                JSON.parse(stored);


            return Array.isArray(parsed)
                ? parsed
                : [];

        }

        catch (error) {

            console.error(
                "GameVault cart could not be read:",
                error
            );

            return [];

        }

    }


    function saveCart(cart) {

        try {

            localStorage.setItem(
                CART_KEY,
                JSON.stringify(cart)
            );


            updateCartCount();


            /*
                Notify other GameVault systems.
            */

            window.dispatchEvent(
                new CustomEvent(
                    "gamevault-cart-updated"
                )
            );

        }

        catch (error) {

            console.error(
                "GameVault cart could not be saved:",
                error
            );

        }

    }


    /* =========================================================
       CART COUNT
    ========================================================= */

    function updateCartCount() {

        if (!cartCount) {

            return;

        }


        const cart =
            getCart();


        const count =
            cart.reduce(
                (total, item) => {

                    return (
                        total +
                        Number(
                            item.quantity || 0
                        )
                    );

                },
                0
            );


        cartCount.textContent =
            count;

    }


    /* =========================================================
       MONEY
    ========================================================= */

    function formatMoney(value) {

        return new Intl.NumberFormat(
            "en-US",
            {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0
            }
        ).format(
            Number(value) || 0
        );

    }


    /* =========================================================
       FILTER STATE
    ========================================================= */

    let activeSearch = "";

    let activePrice = "all";

    let activeSort = "featured";


    /* =========================================================
       CATEGORY NORMALIZATION
       
       Your dataset:
           Motor Yacht
           Superyacht
           Megayacht
           Explorer
           Sport Yacht
           Sailing Yacht

       Your HTML filters may use:
           motor-yachts
           superyachts
           megayachts
           explorer-yachts
           sport-yachts
           sailing-yachts

       This function makes both work together.
    ========================================================= */

    function normalizeCategory(value) {

        return String(value || "")
            .toLowerCase()
            .trim()
            .replace(/[_-]+/g, " ")
            .replace(/\s+/g, " ")
            .replace(/s$/, "");

    }


    function categoryMatches(
        itemCategory,
        filterCategory
    ) {

        const item =
            normalizeCategory(
                itemCategory
            );

        const filter =
            normalizeCategory(
                filterCategory
            );


        /*
           Direct match.
        */

        if (item === filter) {

            return true;

        }


        /*
           Common GameVault category aliases.
        */

        const aliases = {

            "motor yacht":
                [
                    "motor yacht",
                    "motor yachts"
                ],

            "superyacht":
                [
                    "superyacht",
                    "super yachts",
                    "superyachts"
                ],

            "megayacht":
                [
                    "megayacht",
                    "mega yacht",
                    "megayachts"
                ],

            "explorer":
                [
                    "explorer",
                    "explorer yacht",
                    "explorer yachts"
                ],

            "sport yacht":
                [
                    "sport yacht",
                    "sport yachts"
                ],

            "sailing yacht":
                [
                    "sailing yacht",
                    "sailing yachts"
                ],

            "classic yacht":
                [
                    "classic yacht",
                    "classic yachts"
                ],

            "luxury yacht":
                [
                    "luxury yacht",
                    "luxury yachts"
                ],

            "custom yacht":
                [
                    "custom yacht",
                    "custom yachts"
                ]

        };


        for (
            const key in aliases
        ) {

            const values =
                aliases[key].map(
                    normalizeCategory
                );


            if (
                values.includes(item) &&
                values.includes(filter)
            ) {

                return true;

            }

        }


        return false;

    }


    /* =========================================================
       CATEGORY FILTERS
    ========================================================= */

    function getSelectedCategories() {

        return [
            ...document.querySelectorAll(
                ".category-filter:checked"
            )
        ].map(
            input =>
                input.value
        );

    }


    /* =========================================================
       AVAILABILITY FILTERS
    ========================================================= */

    function getSelectedAvailability() {

        return [
            ...document.querySelectorAll(
                ".availability-filter:checked"
            )
        ].map(
            input =>
                input.value
        );

    }


    /* =========================================================
       FILTER PRODUCTS
    ========================================================= */

    function getFilteredItems() {

        const sourceItems =
            getYachtItems();


        let items =
            [...sourceItems];


        /* =====================================================
           SEARCH
        ===================================================== */

        if (activeSearch) {

            const search =
                activeSearch
                    .toLowerCase();


            items =
                items.filter(item => {

                    const name =
                        String(
                            item.name || ""
                        ).toLowerCase();


                    const builder =
                        String(
                            item.builder || ""
                        ).toLowerCase();


                    const description =
                        String(
                            item.description || ""
                        ).toLowerCase();


                    const category =
                        String(
                            item.category || ""
                        ).toLowerCase();


                    const type =
                        String(
                            item.type || ""
                        ).toLowerCase();


                    return (

                        name.includes(search) ||

                        builder.includes(search) ||

                        description.includes(search) ||

                        category.includes(search) ||

                        type.includes(search)

                    );

                });

        }


        /* =====================================================
           CATEGORY
        ===================================================== */

        const categories =
            getSelectedCategories();


        if (
            categories.length > 0
        ) {

            items =
                items.filter(item => {

                    return categories.some(
                        selectedCategory =>
                            categoryMatches(
                                item.category,
                                selectedCategory
                            )
                    );

                });

        }


        /* =====================================================
           PRICE
        ===================================================== */

        if (
            activePrice !== "all"
        ) {

            const limit =
                Number(
                    activePrice
                );


            if (
                limit === 10000
            ) {

                items =
                    items.filter(
                        item =>
                            Number(
                                item.price
                            ) < 10000
                    );

            }

            else if (
                limit === 100000
            ) {

                items =
                    items.filter(
                        item => {

                            const price =
                                Number(
                                    item.price
                                );


                            return (
                                price >= 10000 &&
                                price < 100000
                            );

                        }
                    );

            }

            else if (
                limit === 1000000
            ) {

                items =
                    items.filter(
                        item => {

                            const price =
                                Number(
                                    item.price
                                );


                            return (
                                price >= 100000 &&
                                price < 1000000
                            );

                        }
                    );

            }

            else if (
                limit === 10000000
            ) {

                items =
                    items.filter(
                        item => {

                            const price =
                                Number(
                                    item.price
                                );


                            return (
                                price >= 1000000 &&
                                price < 10000000
                            );

                        }
                    );

            }

            else {

                items =
                    items.filter(
                        item =>
                            Number(
                                item.price
                            ) >= 10000000
                    );

            }

        }


        /* =====================================================
           AVAILABILITY
        ===================================================== */

        const availability =
            getSelectedAvailability();


        if (
            availability.length > 0
        ) {

            items =
                items.filter(item => {

                    return availability.includes(
                        String(
                            item.type ||
                            "unlimited"
                        )
                    );

                });

        }


        /* =====================================================
           SORT
        ===================================================== */

        if (
            activeSort === "low"
        ) {

            items.sort(
                (a, b) =>
                    Number(a.price) -
                    Number(b.price)
            );

        }

        else if (
            activeSort === "high"
        ) {

            items.sort(
                (a, b) =>
                    Number(b.price) -
                    Number(a.price)
            );

        }

        else if (
            activeSort === "name"
        ) {

            items.sort(
                (a, b) =>
                    String(
                        a.name || ""
                    ).localeCompare(
                        String(
                            b.name || ""
                        )
                    )
            );

        }


        return items;

    }


    /* =========================================================
       CATEGORY DISPLAY NAME
    ========================================================= */

    function categoryName(category) {

        const normalized =
            normalizeCategory(
                category
            );


        const names = {

            "motor yacht":
                "Motor Yachts",

            "superyacht":
                "Superyachts",

            "megayacht":
                "Megayachts",

            "explorer":
                "Explorer Yachts",

            "sport yacht":
                "Sport Yachts",

            "sailing yacht":
                "Sailing Yachts",

            "classic yacht":
                "Classic Yachts",

            "luxury yacht":
                "Luxury Yachts",

            "custom yacht":
                "Custom Yachts"

        };


        return (
            names[normalized] ||
            category ||
            "Yachts"
        );

    }


    /* =========================================================
       PRODUCT CARD
    ========================================================= */

    function createProductCard(item) {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "product-card";


        const itemType =
            item.type ||
            "unlimited";


        /* =====================================================
           AVAILABILITY BADGE
        ===================================================== */

        let availabilityBadge = "";


        if (
            itemType === "one"
        ) {

            availabilityBadge = `

                <span class="badge one">
                    ONE OF ONE
                </span>

            `;

        }

        else if (
            itemType === "limited"
        ) {

            availabilityBadge = `

                <span class="badge limited">

                    ${
                        Number(
                            item.stock
                        ) || 0
                    }

                    AVAILABLE

                </span>

            `;

        }

        else {

            availabilityBadge = `

                <span class="badge stock">
                    IN STOCK
                </span>

            `;

        }


        /* =====================================================
           QUANTITY
        ===================================================== */

        let quantityHTML = "";


        if (
            itemType === "one"
        ) {

            quantityHTML = `

                <div class="one-only">

                    QUANTITY

                    <strong>
                        1
                    </strong>

                </div>

            `;

        }

        else {

            const maxQuantity =
                itemType === "limited"

                    ? Math.max(
                        Number(
                            item.stock
                        ) || 1,
                        1
                    )

                    : 9999;


            quantityHTML = `

                <div class="quantity-control">

                    <button
                        type="button"
                        class="quantity-minus"
                        data-id="${item.id}"
                        aria-label="Decrease quantity">

                        −

                    </button>


                    <input
                        type="number"
                        min="1"
                        max="${maxQuantity}"
                        value="1"
                        class="quantity-input"
                        data-id="${item.id}"
                        aria-label="Quantity">


                    <button
                        type="button"
                        class="quantity-plus"
                        data-id="${item.id}"
                        aria-label="Increase quantity">

                        +

                    </button>

                </div>

            `;

        }


        /* =====================================================
           CARD
        ===================================================== */

        card.innerHTML = `

            <div class="product-image">

                <div class="vault-symbol">
                    ⚓
                </div>

                ${availabilityBadge}

            </div>


            <div class="product-content">

                <div class="product-category">

                    ${
                        categoryName(
                            item.category
                        )
                    }

                </div>


                <h3>
                    ${
                        item.name ||
                        "Luxury Yacht"
                    }
                </h3>


                <p>

                    ${
                        item.builder
                            ? `${item.builder} • `
                            : ""
                    }

                    ${
                        item.description ||
                        "Exclusive luxury yacht for your GameVault empire."
                    }

                </p>


                <div class="product-price">

                    ${
                        formatMoney(
                            item.price
                        )
                    }

                </div>


                ${quantityHTML}


                <button
                    type="button"
                    class="add-cart"
                    data-id="${item.id}">

                    ADD TO CART

                </button>

            </div>

        `;


        return card;

    }


    /* =========================================================
       RENDER
    ========================================================= */

    function renderProducts() {

        if (!productsGrid) {

            return;

        }


        const items =
            getFilteredItems();


        productsGrid.innerHTML =
            "";


        if (resultCount) {

            resultCount.textContent =
                items.length;

        }


        if (
            items.length === 0
        ) {

            if (noResults) {

                noResults.style.display =
                    "flex";

            }

            return;

        }


        if (noResults) {

            noResults.style.display =
                "none";

        }


        const fragment =
            document.createDocumentFragment();


        items.forEach(item => {

            fragment.appendChild(
                createProductCard(item)
            );

        });


        productsGrid.appendChild(
            fragment
        );

    }


    /* =========================================================
       ADD TO CART
    ========================================================= */

    function addToCart(
        itemId,
        quantity
    ) {

        const sourceItems =
            getYachtItems();


        const item =
            sourceItems.find(
                product =>
                    String(
                        product.id
                    ) ===
                    String(
                        itemId
                    )
            );


        if (!item) {

            console.error(
                "GameVault: Yacht not found:",
                itemId
            );

            return;

        }


        let cart =
            getCart();


        let requested =
            Number(
                quantity
            );


        if (
            !Number.isFinite(
                requested
            ) ||
            requested < 1
        ) {

            requested = 1;

        }


        const itemType =
            item.type ||
            "unlimited";


        /* =====================================================
           ONE OF ONE
        ===================================================== */

        if (
            itemType === "one"
        ) {

            const alreadyOwned =
                cart.some(
                    cartItem =>
                        String(
                            cartItem.id
                        ) ===
                        String(
                            item.id
                        )
                );


            if (
                alreadyOwned
            ) {

                showToast(
                    "⚓ This yacht is already in your cart."
                );

                return;

            }


            requested = 1;

        }


        /* =====================================================
           LIMITED STOCK
        ===================================================== */

        const existing =
            cart.find(
                cartItem =>
                    String(
                        cartItem.id
                    ) ===
                    String(
                        item.id
                    )
            );


        if (
            itemType === "limited"
        ) {

            const stock =
                Math.max(
                    Number(
                        item.stock
                    ) || 0,
                    0
                );


            const current =
                existing
                    ? Number(
                        existing.quantity || 0
                    )
                    : 0;


            const remaining =
                Math.max(
                    stock - current,
                    0
                );


            if (
                remaining <= 0
            ) {

                showToast(
                    "⚓ No more of this yacht is available."
                );

                return;

            }


            requested =
                Math.min(
                    requested,
                    remaining
                );

        }


        /* =====================================================
           EXISTING ITEM
        ===================================================== */

        if (existing) {

            if (
                itemType === "one"
            ) {

                existing.quantity =
                    1;

            }

            else {

                existing.quantity =
                    Number(
                        existing.quantity || 0
                    ) +
                    requested;


                if (
                    itemType === "limited"
                ) {

                    existing.quantity =
                        Math.min(
                            existing.quantity,
                            Number(
                                item.stock
                            ) || 1
                        );

                }

            }


            existing.name =
                item.name;


            existing.price =
                Number(
                    item.price
                ) || 0;


            existing.category =
                item.category ||
                "yachts";


            existing.type =
                itemType;


            existing.stock =
                item.stock ||
                null;


            existing.description =
                item.description ||
                "";


            existing.builder =
                item.builder ||
                "";

        }

        else {

            /* =================================================
               NEW CART ITEM
            ================================================= */

            cart.push({

                id:
                    item.id,

                name:
                    item.name,

                price:
                    Number(
                        item.price
                    ) || 0,

                category:
                    item.category ||
                    "yachts",

                type:
                    itemType,

                stock:
                    item.stock ||
                    null,

                description:
                    item.description ||
                    "",

                builder:
                    item.builder ||
                    "",

                quantity:
                    requested

            });

        }


        saveCart(
            cart
        );


        showAddedMessage(
            item.name
        );

    }


    /* =========================================================
       TOAST
    ========================================================= */

    function showToast(message) {

        const toast =
            document.createElement(
                "div"
            );


        toast.className =
            "cart-toast";


        toast.innerHTML = `
            <strong>
                ${message}
            </strong>
        `;


        document.body.appendChild(
            toast
        );


        requestAnimationFrame(() => {

            toast.classList.add(
                "show"
            );

        });


        setTimeout(() => {

            toast.classList.remove(
                "show"
            );


            setTimeout(() => {

                toast.remove();

            }, 300);

        }, 2200);

    }


    function showAddedMessage(
        name
    ) {

        showToast(
            `⚓ ${name} — Added to your cart`
        );

    }


    /* =========================================================
       PRODUCT GRID EVENTS
    ========================================================= */

    if (productsGrid) {

        productsGrid.addEventListener(
            "click",
            event => {

                /* =============================================
                   ADD TO CART
                ============================================= */

                const addButton =
                    event.target.closest(
                        ".add-cart"
                    );


                if (addButton) {

                    const id =
                        addButton.dataset.id;


                    const card =
                        addButton.closest(
                            ".product-card"
                        );


                    const input =
                        card
                            ? card.querySelector(
                                ".quantity-input"
                            )
                            : null;


                    const quantity =
                        input
                            ? Number(
                                input.value
                            )
                            : 1;


                    addToCart(
                        id,
                        quantity
                    );


                    return;

                }


                /* =============================================
                   PLUS
                ============================================= */

                const plus =
                    event.target.closest(
                        ".quantity-plus"
                    );


                if (plus) {

                    const control =
                        plus.parentElement;


                    const input =
                        control.querySelector(
                            ".quantity-input"
                        );


                    if (!input) {

                        return;

                    }


                    let value =
                        Number(
                            input.value
                        ) || 1;


                    const max =
                        Number(
                            input.max
                        ) || 9999;


                    value =
                        Math.min(
                            value + 1,
                            max
                        );


                    input.value =
                        value;


                    return;

                }


                /* =============================================
                   MINUS
                ============================================= */

                const minus =
                    event.target.closest(
                        ".quantity-minus"
                    );


                if (minus) {

                    const control =
                        minus.parentElement;


                    const input =
                        control.querySelector(
                            ".quantity-input"
                        );


                    if (!input) {

                        return;

                    }


                    let value =
                        Number(
                            input.value
                        ) || 1;


                    value =
                        Math.max(
                            value - 1,
                            1
                        );


                    input.value =
                        value;

                }

            }
        );

    }


    /* =========================================================
       SEARCH
    ========================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                activeSearch =
                    searchInput.value
                        .trim();


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

                    searchInput.focus();

                }


                activeSearch =
                    "";


                renderProducts();

            }
        );

    }


    /* =========================================================
       CATEGORY FILTERS
    ========================================================= */

    document.querySelectorAll(
        ".category-filter"
    ).forEach(input => {

        input.addEventListener(
            "change",
            renderProducts
        );

    });


    /* =========================================================
       AVAILABILITY FILTERS
    ========================================================= */

    document.querySelectorAll(
        ".availability-filter"
    ).forEach(input => {

        input.addEventListener(
            "change",
            renderProducts
        );

    });


    /* =========================================================
       PRICE FILTER
    ========================================================= */

    document.querySelectorAll(
        'input[name="price"]'
    ).forEach(input => {

        input.addEventListener(
            "change",
            () => {

                activePrice =
                    input.value;


                renderProducts();

            }
        );

    });


    /* =========================================================
       SORT
    ========================================================= */

    function setSort(
        value
    ) {

        activeSort =
            value;


        if (sortSelect) {

            sortSelect.value =
                value;

        }


        if (
            desktopSortSelect
        ) {

            desktopSortSelect.value =
                value;

        }


        renderProducts();

    }


    if (sortSelect) {

        sortSelect.addEventListener(
            "change",
            () => {

                setSort(
                    sortSelect.value
                );

            }
        );

    }


    if (
        desktopSortSelect
    ) {

        desktopSortSelect.addEventListener(
            "change",
            () => {

                setSort(
                    desktopSortSelect.value
                );

            }
        );

    }


    /* =========================================================
       RESET FILTERS
    ========================================================= */

    if (resetFilters) {

        resetFilters.addEventListener(
            "click",
            () => {

                document.querySelectorAll(
                    ".category-filter, .availability-filter"
                ).forEach(input => {

                    input.checked =
                        false;

                });


                const allPrice =
                    document.querySelector(
                        'input[name="price"][value="all"]'
                    );


                if (allPrice) {

                    allPrice.checked =
                        true;

                }


                activeSearch =
                    "";

                activePrice =
                    "all";

                activeSort =
                    "featured";


                if (searchInput) {

                    searchInput.value =
                        "";

                }


                if (sortSelect) {

                    sortSelect.value =
                        "featured";

                }


                if (
                    desktopSortSelect
                ) {

                    desktopSortSelect.value =
                        "featured";

                }


                renderProducts();

            }
        );

    }


    /* =========================================================
       MOBILE FILTER
    ========================================================= */

    if (
        openFilters &&
        filterSidebar
    ) {

        openFilters.addEventListener(
            "click",
            () => {

                filterSidebar.classList.add(
                    "open"
                );

            }
        );

    }


    if (
        closeFilters &&
        filterSidebar
    ) {

        closeFilters.addEventListener(
            "click",
            () => {

                filterSidebar.classList.remove(
                    "open"
                );

            }
        );

    }


    /* =========================================================
       CART BUTTON
    ========================================================= */

    if (cartButton) {

        cartButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    `/games/billionaire/cart?id=${encodeURIComponent(
                        billionaireId
                    )}`;

            }
        );

    }


    /* =========================================================
       BACK BUTTON
    ========================================================= */

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    `/games/billionaire/play?id=${encodeURIComponent(
                        billionaireId
                    )}`;

            }
        );

    }


    /* =========================================================
       CART STORAGE SYNC
    ========================================================= */

    window.addEventListener(
        "storage",
        event => {

            if (
                event.key === CART_KEY
            ) {

                updateCartCount();

            }

        }
    );


    window.addEventListener(
        "gamevault-cart-updated",
        () => {

            updateCartCount();

        }
    );


    /* =========================================================
       INITIAL LOAD
    ========================================================= */

    updateCartCount();

    renderProducts();

});