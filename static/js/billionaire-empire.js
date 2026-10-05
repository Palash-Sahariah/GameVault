document.addEventListener("DOMContentLoaded", () => {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const billionaireId =
        params.get("id");


    if (!billionaireId) {

        console.error(
            "No billionaire selected."
        );

        return;

    }


    const CART_KEY =
        `gamevaultCart_${billionaireId}`;

    const OWNED_KEY =
        `gamevaultEmpireOwned_${billionaireId}`;


    const grid =
        document.getElementById(
            "productsGrid"
        );

    const noResults =
        document.getElementById(
            "noResults"
        );

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const clearSearch =
        document.getElementById(
            "clearSearch"
        );

    const resultCount =
        document.getElementById(
            "resultCount"
        );

    const cartButton =
        document.getElementById(
            "cartButton"
        );

    const cartCount =
        document.getElementById(
            "cartCount"
        );

    const backButton =
        document.getElementById(
            "backButton"
        );

    const openFilters =
        document.getElementById(
            "openFilters"
        );

    const closeFilters =
        document.getElementById(
            "closeFilters"
        );

    const filterSidebar =
        document.getElementById(
            "filterSidebar"
        );

    const resetFilters =
        document.getElementById(
            "resetFilters"
        );

    const sortSelect =
        document.getElementById(
            "sortSelect"
        );

    const desktopSortSelect =
        document.getElementById(
            "desktopSortSelect"
        );


    /* =====================================
       CART
    ===================================== */

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

        const cart =
            getCart();

        const count =
            cart.reduce(
                (total, item) =>
                    total +
                    Number(
                        item.quantity || 1
                    ),
                0
            );

        cartCount.textContent =
            count;

    }


    /* =====================================
       OWNED EMPIRES
    ===================================== */

    function getOwned() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    OWNED_KEY
                )
            ) || [];

        } catch {

            return [];

        }

    }


    function saveOwned(owned) {

        localStorage.setItem(
            OWNED_KEY,
            JSON.stringify(owned)
        );

    }


    function isOwned(id) {

        return getOwned()
            .includes(id);

    }


    /* =====================================
       MONEY
    ===================================== */

    function formatMoney(value) {

        if (value >= 1000000000000) {

            return "$" +
                (
                    value / 1000000000000
                ).toFixed(2) +
                "T";

        }


        if (value >= 1000000000) {

            return "$" +
                (
                    value / 1000000000
                ).toFixed(1) +
                "B";

        }


        if (value >= 1000000) {

            return "$" +
                (
                    value / 1000000
                ).toFixed(0) +
                "M";

        }


        return "$" +
            value.toLocaleString();

    }


    /* =====================================
       ADD TO CART
    ===================================== */

    function addToCart(company) {

        if (isOwned(company.id)) {

            alert(
                `${company.name} has already been acquired.\n\n` +
                `You cannot acquire the same empire twice.`
            );

            return;

        }


        const cart =
            getCart();


        if (
            cart.some(
                item =>
                    item.id === company.id
            )
        ) {

            alert(
                "This empire is already in your cart."
            );

            return;

        }


        cart.push({

            id: company.id,

            name: company.name,

            category: "Empire",

            industry: company.industry,

            price: company.price,

            quantity: 1,

            oneOfOne: true

        });


        saveCart(cart);

        updateCartCount();

        renderProducts();

    }


    /* =====================================
       FILTERS
    ===================================== */

    function selectedCategories() {

        return [
            ...document.querySelectorAll(
                ".category-filter:checked"
            )
        ].map(
            input =>
                input.value
        );

    }


    function selectedAvailability() {

        return [
            ...document.querySelectorAll(
                ".availability-filter:checked"
            )
        ].map(
            input =>
                input.value
        );

    }


    function selectedPrice() {

        const input =
            document.querySelector(
                'input[name="price"]:checked'
            );

        return input
            ? input.value
            : "all";

    }


    /* =====================================
       FILTER
    ===================================== */

    function filterProducts() {

        let products =
            [...empireItems];


        const search =
            searchInput.value
                .trim()
                .toLowerCase();


        const categories =
            selectedCategories();


        const availability =
            selectedAvailability();


        const price =
            selectedPrice();


        /* SEARCH */

        if (search) {

            products =
                products.filter(
                    company =>

                        company.name
                            .toLowerCase()
                            .includes(search)

                        ||

                        company.industry
                            .toLowerCase()
                            .includes(search)
                );

        }


        /* CATEGORY */

        if (categories.length) {

            products =
                products.filter(
                    company =>
                        categories.includes(
                            company.industry
                        )
                );

        }


        /* PRICE */

        if (price !== "all") {

            const maximum =
                Number(price);

            products =
                products.filter(
                    company =>
                        company.price <=
                        maximum
                );

        }


        /* OWNERSHIP */

        if (availability.length) {

            products =
                products.filter(
                    company => {

                        const owned =
                            isOwned(
                                company.id
                            );


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


    /* =====================================
       RENDER
    ===================================== */

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


        products.forEach(
            company => {

                const owned =
                    isOwned(
                        company.id
                    );


                const card =
                    document.createElement(
                        "article"
                    );


                /*
                 * EXACT VAULT CARD
                 * CLASS STRUCTURE
                 */

                card.className =
                    "product-card";


                card.innerHTML = `

                    <div class="product-image">

                        <div class="vault-symbol">
                            🏢
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
                                    : "EMPIRE"
                            }
                        </span>

                    </div>


                    <div class="product-content">

                        <div class="product-category">
                            ${company.industry}
                        </div>


                        <h3>
                            ${company.name}
                        </h3>


                        <p>
                            Acquire this
                            legendary global
                            business empire.
                        </p>


                        <div class="product-price">
                            ${formatMoney(
                                company.price
                            )}
                        </div>


                        <div class="one-only">

                            <span>
                                OWNERSHIP
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
                                data-id="${company.id}"
                            >
                                ADD TO CART
                            </button>
                            `
                        }

                    </div>

                `;


                if (!owned) {

                    card
                        .querySelector(
                            ".add-cart"
                        )
                        .addEventListener(
                            "click",
                            () =>
                                addToCart(
                                    company
                                )
                        );

                }


                grid.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================
       SEARCH
    ===================================== */

    searchInput.addEventListener(
        "input",
        renderProducts
    );


    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value =
                "";

            renderProducts();

            searchInput.focus();

        }
    );


    /* =====================================
       FILTER EVENTS
    ===================================== */

    document
        .querySelectorAll(
            ".category-filter, " +
            ".availability-filter, " +
            'input[name="price"]'
        )
        .forEach(
            input => {

                input.addEventListener(
                    "change",
                    renderProducts
                );

            }
        );


    /* =====================================
       RESET FILTERS
    ===================================== */

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
                        input.checked =
                            false
                );


            document.querySelector(
                'input[name="price"][value="all"]'
            ).checked = true;


            searchInput.value =
                "";


            renderProducts();

        }
    );


    /* =====================================
       SORT
    ===================================== */

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


    /* =====================================
       MOBILE FILTER
    ===================================== */

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


    /* =====================================
       NAVIGATION
    ===================================== */

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


    /* =====================================
       INIT
    ===================================== */

    updateCartCount();

    renderProducts();

});