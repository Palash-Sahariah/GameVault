document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const billionaireId = params.get("id");

    if (!billionaireId) {
        console.error("No billionaire selected.");
        return;
    }

    const CART_KEY = `gamevaultCart_${billionaireId}`;
    const OWNED_KEY = `gamevaultArtOwned_${billionaireId}`;

    const grid = document.getElementById("productsGrid");
    const noResults = document.getElementById("noResults");
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const resultCount = document.getElementById("resultCount");

    const cartButton = document.getElementById("cartButton");
    const cartCount = document.getElementById("cartCount");

    const backButton = document.getElementById("backButton");

    const openFilters = document.getElementById("openFilters");
    const closeFilters = document.getElementById("closeFilters");
    const filterSidebar = document.getElementById("filterSidebar");

    const resetFilters = document.getElementById("resetFilters");

    const sortSelect = document.getElementById("sortSelect");
    const desktopSortSelect =
        document.getElementById("desktopSortSelect");


    /* ==========================================
       CART
    ========================================== */

    function getCart() {

        try {
            return JSON.parse(
                localStorage.getItem(CART_KEY)
            ) || [];
        } catch {
            return [];
        }

    }


    function saveCart(cart) {

        localStorage.setItem(
            CART_KEY,
            JSON.stringify(cart)
        );

    }


    /* ==========================================
       ONE-OF-ONE OWNERSHIP
    ========================================== */

    function getOwnedArt() {

        try {
            return JSON.parse(
                localStorage.getItem(OWNED_KEY)
            ) || [];
        } catch {
            return [];
        }

    }


    function saveOwnedArt(owned) {

        localStorage.setItem(
            OWNED_KEY,
            JSON.stringify(owned)
        );

    }


    function isOwned(id) {

        return getOwnedArt().includes(id);

    }


    /* ==========================================
       CART COUNT
    ========================================== */

    function updateCartCount() {

        const cart = getCart();

        const count = cart.reduce(
            (total, item) =>
                total + Number(item.quantity || 1),
            0
        );

        cartCount.textContent = count;

    }


    /* ==========================================
       MONEY FORMAT
    ========================================== */

    function formatMoney(value) {

        if (value >= 1000000000) {
            return "$" +
                (value / 1000000000)
                    .toFixed(2) +
                "B";
        }

        if (value >= 1000000) {
            return "$" +
                (value / 1000000)
                    .toFixed(1) +
                "M";
        }

        if (value >= 1000) {
            return "$" +
                (value / 1000)
                    .toFixed(0) +
                "K";
        }

        return "$" + value;

    }


    /* ==========================================
       ADD ART TO CART
    ========================================== */

    function addToCart(art) {

        /*
         * ONE-OF-ONE CHECK
         */

        if (isOwned(art.id)) {

            alert(
                "This artwork has already been purchased.\n\n" +
                "It is ONE OF ONE and cannot be purchased again " +
                "until RESET GAME."
            );

            return;

        }


        const cart = getCart();


        /*
         * Artwork already waiting in cart
         */

        const exists = cart.some(
            item => item.id === art.id
        );


        if (exists) {

            alert(
                "This artwork is already in your cart."
            );

            return;

        }


        cart.push({

            id: art.id,

            name: art.name,

            artist: art.artist,

            category: "Art",

            price: art.price,

            quantity: 1,

            oneOfOne: true

        });


        saveCart(cart);

        updateCartCount();

        renderProducts();

    }


    /* ==========================================
       FILTERS
    ========================================== */

    function getCategories() {

        return [
            ...document.querySelectorAll(
                ".category-filter:checked"
            )
        ].map(
            input => input.value
        );

    }


    function getAvailability() {

        return [
            ...document.querySelectorAll(
                ".availability-filter:checked"
            )
        ].map(
            input => input.value
        );

    }


    function getPrice() {

        const selected =
            document.querySelector(
                'input[name="price"]:checked'
            );

        return selected
            ? selected.value
            : "all";

    }


    /* ==========================================
       FILTER PRODUCTS
    ========================================== */

    function filterProducts() {

        let products = [...artItems];


        const search =
            searchInput.value
                .trim()
                .toLowerCase();


        const categories =
            getCategories();


        const availability =
            getAvailability();


        const price =
            getPrice();


        /* SEARCH */

        if (search) {

            products = products.filter(
                art =>

                    art.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    art.artist
                        .toLowerCase()
                        .includes(search)

                    ||

                    art.type
                        .toLowerCase()
                        .includes(search)

            );

        }


        /* CATEGORY */

        if (categories.length) {

            products = products.filter(
                art =>
                    categories.includes(
                        art.type
                    )
            );

        }


        /* PRICE */

        if (price !== "all") {

            const maximum =
                Number(price);

            products = products.filter(
                art =>
                    art.price <= maximum
            );

        }


        /* AVAILABILITY */

        if (availability.length) {

            products = products.filter(
                art => {

                    const owned =
                        isOwned(art.id);

                    if (
                        availability.includes(
                            "available"
                        ) &&
                        !owned
                    ) {
                        return true;
                    }

                    if (
                        availability.includes(
                            "owned"
                        ) &&
                        owned
                    ) {
                        return true;
                    }

                    return false;

                }
            );

        }


        /* SORT */

        const sort =
            desktopSortSelect.value;


        if (sort === "low") {

            products.sort(
                (a, b) =>
                    a.price - b.price
            );

        }

        else if (sort === "high") {

            products.sort(
                (a, b) =>
                    b.price - a.price
            );

        }

        else if (sort === "name") {

            products.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

        }


        return products;

    }


    /* ==========================================
       PRODUCT CARD
       EXACT VAULT CSS STRUCTURE
    ========================================== */

    function renderProducts() {

        const products =
            filterProducts();


        grid.innerHTML = "";


        resultCount.textContent =
            products.length;


        if (!products.length) {

            noResults.style.display =
                "flex";

            return;

        }


        noResults.style.display =
            "none";


        products.forEach(art => {

            const owned =
                isOwned(art.id);


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            /*
             * IMPORTANT:
             *
             * These class names are the
             * exact ones used by the
             * original Vault CSS.
             */

            card.innerHTML = `

                <div class="product-image">

                    <div class="vault-symbol">
                        🎨
                    </div>


                    <span class="
                        badge
                        ${owned
                            ? "one"
                            : "limited"
                        }
                    ">
                        ${
                            owned
                                ? "OWNED"
                                : "ONE OF ONE"
                        }
                    </span>

                </div>


                <div class="product-content">

                    <div class="product-category">
                        ${art.type}
                    </div>


                    <h3>
                        ${art.name}
                    </h3>


                    <p>
                        ${art.artist}
                    </p>


                    <div class="product-price">
                        ${formatMoney(art.price)}
                    </div>


                    <div class="one-only">

                        <span>
                            EDITION
                        </span>

                        <strong>
                            1 / 1
                        </strong>

                    </div>


                    ${
                        owned

                        ?

                        `
                        <button
                            class="add-cart"
                            disabled
                            style="
                                opacity:.45;
                                cursor:not-allowed;
                            "
                        >
                            ALREADY OWNED
                        </button>
                        `

                        :

                        `
                        <button
                            class="add-cart"
                            data-art-id="${art.id}"
                        >
                            ADD TO CART
                        </button>
                        `
                    }

                </div>

            `;


            if (!owned) {

                const button =
                    card.querySelector(
                        ".add-cart"
                    );


                button.addEventListener(
                    "click",
                    () => {

                        addToCart(art);

                    }
                );

            }


            grid.appendChild(card);

        });

    }


    /* ==========================================
       SEARCH
    ========================================== */

    searchInput.addEventListener(
        "input",
        renderProducts
    );


    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value = "";

            renderProducts();

            searchInput.focus();

        }
    );


    /* ==========================================
       FILTER EVENTS
    ========================================== */

    document
        .querySelectorAll(
            ".category-filter, " +
            ".availability-filter, " +
            'input[name="price"]'
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                renderProducts
            );

        });


    resetFilters.addEventListener(
        "click",
        () => {

            document
                .querySelectorAll(
                    ".category-filter, " +
                    ".availability-filter"
                )
                .forEach(
                    input =>
                        input.checked = false
                );


            document.querySelector(
                'input[name="price"][value="all"]'
            ).checked = true;


            searchInput.value = "";

            renderProducts();

        }
    );


    /* ==========================================
       SORT
    ========================================== */

    sortSelect.addEventListener(
        "change",
        () => {

            desktopSortSelect.value =
                sortSelect.value;

            renderProducts();

        }
    );


    desktopSortSelect.addEventListener(
        "change",
        () => {

            sortSelect.value =
                desktopSortSelect.value;

            renderProducts();

        }
    );


    /* ==========================================
       MOBILE FILTER
    ========================================== */

    openFilters.addEventListener(
        "click",
        () => {

            filterSidebar.classList.add(
                "open"
            );

        }
    );


    closeFilters.addEventListener(
        "click",
        () => {

            filterSidebar.classList.remove(
                "open"
            );

        }
    );


    /* ==========================================
       NAVIGATION
    ========================================== */

    cartButton.addEventListener(
        "click",
        () => {

            window.location.href =
                `/games/billionaire/cart?id=${
                    encodeURIComponent(
                        billionaireId
                    )
                }`;

        }
    );


    backButton.addEventListener(
        "click",
        () => {

            window.location.href =
                `/games/billionaire/play?id=${
                    encodeURIComponent(
                        billionaireId
                    )
                }`;

        }
    );


    /* ==========================================
       START
    ========================================== */

    updateCartCount();

    renderProducts();

});