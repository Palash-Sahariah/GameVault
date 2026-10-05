document.addEventListener("DOMContentLoaded", function () {

    const productsGrid =
        document.getElementById("productsGrid");

    const resultCount =
        document.getElementById("resultCount");

    const noResults =
        document.getElementById("noResults");

    const searchInput =
        document.getElementById("searchInput");

    const clearSearch =
        document.getElementById("clearSearch");

    const resetFilters =
        document.getElementById("resetFilters");

    const cartButton =
        document.getElementById("cartButton");

    const backButton =
        document.getElementById("backButton");

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


    /* =====================================================
       BILLIONAIRE
    ====================================================== */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const billionaireId =
        params.get("id") || "unknown";


    const CART_KEY =
        "gamevaultCart_" +
        billionaireId;


    let activeSort =
        "featured";


    /* =====================================================
       BRAND NAMES
    ====================================================== */

    const brandNames = {

        "rolex": "Rolex",

        "omega": "Omega",

        "patek-philippe":
            "Patek Philippe",

        "cartier":
            "Cartier",

        "audemars-piguet":
            "Audemars Piguet",

        "richard-mille":
            "Richard Mille",

        "vacheron-constantin":
            "Vacheron Constantin",

        "tudor":
            "Tudor",

        "tag-heuer":
            "TAG Heuer",

        "breitling":
            "Breitling",

        "iwc":
            "IWC Schaffhausen",

        "jaeger-lecoultre":
            "Jaeger-LeCoultre",

        "panerai":
            "Panerai",

        "hublot":
            "Hublot",

        "grand-seiko":
            "Grand Seiko",

        "breguet":
            "Breguet",

        "blancpain":
            "Blancpain",

        "zenith":
            "Zenith",

        "bulgari":
            "Bulgari",

        "chopard":
            "Chopard",

        "piaget":
            "Piaget",

        "girard-perregaux":
            "Girard-Perregaux",

        "ulysse-nardin":
            "Ulysse Nardin",

        "parmigiani-fleurier":
            "Parmigiani Fleurier",

        "glashutte-original":
            "Glashütte Original"

    };


    /* =====================================================
       MONEY
    ====================================================== */

    function formatMoney(value) {

        return "$" +
            Number(value).toLocaleString(
                "en-US"
            );

    }


    /* =====================================================
       CART
    ====================================================== */

    function getCart() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    CART_KEY
                )
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


    function updateCartCount() {

        const count =
            getCart().reduce(
                function (total, item) {

                    return total +
                        Number(
                            item.quantity || 0
                        );

                },
                0
            );


        document.getElementById(
            "cartCount"
        ).textContent = count;

    }


    /* =====================================================
       FILTER DATA
    ====================================================== */

    function selectedBrands() {

        return Array.from(
            document.querySelectorAll(
                ".category-filter:checked"
            )
        ).map(
            checkbox =>
                checkbox.value
        );

    }


    function selectedAvailability() {

        return Array.from(
            document.querySelectorAll(
                ".availability-filter:checked"
            )
        ).map(
            checkbox =>
                checkbox.value
        );

    }


    function selectedPrice() {

        const element =
            document.querySelector(
                'input[name="price"]:checked'
            );

        return element
            ? element.value
            : "all";

    }


    /* =====================================================
       FILTER
    ====================================================== */

    function filteredWatches() {

        let result =
            [...watches];


        /* SEARCH */

        const search =
            searchInput.value
                .trim()
                .toLowerCase();


        if (search) {

            result =
                result.filter(
                    function (watch) {

                        return (

                            watch.name
                                .toLowerCase()
                                .includes(search)

                            ||

                            watch.brand
                                .toLowerCase()
                                .includes(search)

                            ||

                            watch.model
                                .toLowerCase()
                                .includes(search)

                            ||

                            watch.variant
                                .toLowerCase()
                                .includes(search)

                        );

                    }
                );

        }


        /* BRAND */

        const brands =
            selectedBrands();


        if (brands.length) {

            result =
                result.filter(
                    watch =>
                        brands.includes(
                            watch.category
                        )
                );

        }


        /* PRICE */

        const price =
            selectedPrice();


        if (price !== "all") {

            const limit =
                Number(price);


            if (limit === 10000) {

                result =
                    result.filter(
                        watch =>
                            watch.price < 10000
                    );

            }

            else if (limit === 100000) {

                result =
                    result.filter(
                        watch =>
                            watch.price >= 10000 &&
                            watch.price < 100000
                    );

            }

            else if (limit === 1000000) {

                result =
                    result.filter(
                        watch =>
                            watch.price >= 100000 &&
                            watch.price < 1000000
                    );

            }

            else if (limit === 10000000) {

                result =
                    result.filter(
                        watch =>
                            watch.price >= 1000000 &&
                            watch.price < 10000000
                    );

            }

            else {

                result =
                    result.filter(
                        watch =>
                            watch.price >= 10000000
                    );

            }

        }


        /* AVAILABILITY */

        const availability =
            selectedAvailability();


        if (availability.length) {

            result =
                result.filter(
                    watch =>
                        availability.includes(
                            watch.type
                        )
                );

        }


        /* SORT */

        if (activeSort === "low") {

            result.sort(
                (a, b) =>
                    a.price - b.price
            );

        }

        else if (activeSort === "high") {

            result.sort(
                (a, b) =>
                    b.price - a.price
            );

        }

        else if (activeSort === "name") {

            result.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

        }


        return result;

    }


    /* =====================================================
       CARD
    ====================================================== */

    function createCard(watch) {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "product-card";


        let badge = "";


        if (watch.type === "one") {

            badge = `
                <span class="badge one">
                    ONE OF ONE
                </span>
            `;

        }

        else if (
            watch.type === "limited"
        ) {

            badge = `
                <span class="badge limited">
                    ${watch.stock} AVAILABLE
                </span>
            `;

        }

        else {

            badge = `
                <span class="badge stock">
                    IN STOCK
                </span>
            `;

        }


        let quantity = "";


        if (watch.type === "one") {

            quantity = `
                <div class="one-only">
                    QUANTITY
                    <strong>1</strong>
                </div>
            `;

        }

        else {

            quantity = `
                <div class="quantity-control">

                    <button
                        class="quantity-minus"
                        data-id="${watch.id}"
                        type="button"
                    >
                        −
                    </button>

                    <input
                        type="number"
                        min="1"
                        max="${
                            watch.type === "limited"
                                ? watch.stock
                                : 9999
                        }"
                        value="1"
                        class="quantity-input"
                        data-id="${watch.id}"
                    >

                    <button
                        class="quantity-plus"
                        data-id="${watch.id}"
                        type="button"
                    >
                        +
                    </button>

                </div>
            `;

        }


        card.innerHTML = `

            <div class="product-image">

                <div class="vault-symbol">
                    ⌚
                </div>

                ${badge}

            </div>


            <div class="product-content">

                <div class="product-category">

                    ${
                        brandNames[
                            watch.category
                        ] ||
                        watch.brand
                    }

                </div>


                <h3>
                    ${watch.name}
                </h3>


                <p>
                    ${watch.description}
                </p>


                <div class="product-price">

                    ${formatMoney(
                        watch.price
                    )}

                </div>


                ${quantity}


                <button
                    class="add-cart"
                    data-id="${watch.id}"
                    type="button"
                >
                    ADD TO CART
                </button>

            </div>

        `;


        return card;

    }


    /* =====================================================
       RENDER
    ====================================================== */

    function renderProducts() {

        const result =
            filteredWatches();


        productsGrid.innerHTML =
            "";


        resultCount.textContent =
            result.length;


        if (!result.length) {

            noResults.style.display =
                "flex";

            return;

        }


        noResults.style.display =
            "none";


        const fragment =
            document.createDocumentFragment();


        result.forEach(
            watch => {

                fragment.appendChild(
                    createCard(watch)
                );

            }
        );


        productsGrid.appendChild(
            fragment
        );

    }


    /* =====================================================
       ADD TO CART
    ====================================================== */

    function addToCart(
        id,
        quantity
    ) {

        const watch =
            watches.find(
                item =>
                    item.id === id
            );


        if (!watch) {
            return;
        }


        quantity =
            Math.max(
                1,
                Number(quantity) || 1
            );


        const cart =
            getCart();


        const existing =
            cart.find(
                item =>
                    item.id === id
            );


        if (watch.type === "one") {

            if (existing) {

                showToast(
                    "This watch is already in your cart."
                );

                return;

            }

            quantity = 1;

        }


        if (
            watch.type === "limited"
        ) {

            const current =
                existing
                    ? existing.quantity
                    : 0;


            if (
                current + quantity >
                watch.stock
            ) {

                showToast(
                    `Only ${watch.stock} available.`
                );

                return;

            }

        }


        if (existing) {

            existing.quantity +=
                quantity;

        }

        else {

            cart.push({

                id: watch.id,

                name: watch.name,

                category: watch.category,

                price: watch.price,

                type: watch.type,

                quantity: quantity

            });

        }


        saveCart(cart);

        updateCartCount();

        showToast(
            "⌚ Added to your cart"
        );

    }


    /* =====================================================
       TOAST
    ====================================================== */

    function showToast(message) {

        const old =
            document.querySelector(
                ".gamevault-toast"
            );


        if (old) {
            old.remove();
        }


        const toast =
            document.createElement(
                "div"
            );


        toast.className =
            "gamevault-toast";


        toast.textContent =
            message;


        Object.assign(
            toast.style,
            {

                position: "fixed",

                left: "50%",

                bottom: "25px",

                transform:
                    "translateX(-50%)",

                zIndex: "99999",

                padding:
                    "14px 24px",

                borderRadius:
                    "12px",

                background:
                    "rgba(5,8,20,.96)",

                border:
                    "1px solid rgba(217,178,106,.6)",

                color:
                    "#d9b26a",

                fontWeight:
                    "700",

                boxShadow:
                    "0 15px 40px rgba(0,0,0,.5)"

            }
        );


        document.body.appendChild(
            toast
        );


        setTimeout(
            () => toast.remove(),
            2200
        );

    }


    /* =====================================================
       GRID EVENTS
    ====================================================== */

    productsGrid.addEventListener(
        "click",
        function (event) {

            const target =
                event.target;


            const add =
                target.closest(
                    ".add-cart"
                );


            if (add) {

                const id =
                    add.dataset.id;


                const input =
                    productsGrid.querySelector(
                        `.quantity-input[data-id="${id}"]`
                    );


                addToCart(
                    id,
                    input
                        ? input.value
                        : 1
                );


                return;

            }


            const plus =
                target.closest(
                    ".quantity-plus"
                );


            if (plus) {

                const input =
                    productsGrid.querySelector(
                        `.quantity-input[data-id="${plus.dataset.id}"]`
                    );


                if (input) {

                    input.value =
                        Math.min(
                            Number(input.value) + 1,
                            Number(input.max)
                        );

                }


                return;

            }


            const minus =
                target.closest(
                    ".quantity-minus"
                );


            if (minus) {

                const input =
                    productsGrid.querySelector(
                        `.quantity-input[data-id="${minus.dataset.id}"]`
                    );


                if (input) {

                    input.value =
                        Math.max(
                            1,
                            Number(input.value) - 1
                        );

                }

            }

        }
    );


    /* =====================================================
       SEARCH
    ====================================================== */

    searchInput.addEventListener(
        "input",
        renderProducts
    );


    clearSearch.addEventListener(
        "click",
        function () {

            searchInput.value =
                "";

            renderProducts();

            searchInput.focus();

        }
    );


    /* =====================================================
       FILTERS
    ====================================================== */

    document
        .querySelectorAll(
            ".category-filter"
        )
        .forEach(
            checkbox => {

                checkbox.addEventListener(
                    "change",
                    renderProducts
                );

            }
        );


    document
        .querySelectorAll(
            ".availability-filter"
        )
        .forEach(
            checkbox => {

                checkbox.addEventListener(
                    "change",
                    renderProducts
                );

            }
        );


    document
        .querySelectorAll(
            'input[name="price"]'
        )
        .forEach(
            radio => {

                radio.addEventListener(
                    "change",
                    renderProducts
                );

            }
        );


    /* =====================================================
       SORT
    ====================================================== */

    sortSelect.addEventListener(
        "change",
        function () {

            activeSort =
                this.value;

            desktopSortSelect.value =
                this.value;

            renderProducts();

        }
    );


    desktopSortSelect.addEventListener(
        "change",
        function () {

            activeSort =
                this.value;

            sortSelect.value =
                this.value;

            renderProducts();

        }
    );


    /* =====================================================
       RESET
    ====================================================== */

    resetFilters.addEventListener(
        "click",
        function () {

            searchInput.value =
                "";


            document
                .querySelectorAll(
                    ".category-filter"
                )
                .forEach(
                    item =>
                        item.checked =
                            false
                );


            document
                .querySelectorAll(
                    ".availability-filter"
                )
                .forEach(
                    item =>
                        item.checked =
                            false
                );


            document
                .querySelector(
                    'input[name="price"][value="all"]'
                )
                .checked = true;


            activeSort =
                "featured";


            sortSelect.value =
                "featured";


            desktopSortSelect.value =
                "featured";


            renderProducts();

        }
    );


    /* =====================================================
       MOBILE FILTER
    ====================================================== */

    openFilters.addEventListener(
        "click",
        function () {

            filterSidebar.classList.add(
                "open"
            );

        }
    );


    closeFilters.addEventListener(
        "click",
        function () {

            filterSidebar.classList.remove(
                "open"
            );

        }
    );


    /* =====================================================
       CART
    ====================================================== */

    cartButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "/games/billionaire/cart?id=" +
                encodeURIComponent(
                    billionaireId
                );

        }
    );


    /* =====================================================
       BACK
    ====================================================== */

    backButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "/games/billionaire/play?id=" +
                encodeURIComponent(
                    billionaireId
                );

        }
    );


    /* =====================================================
       START
    ====================================================== */

    updateCartCount();

    renderProducts();

});