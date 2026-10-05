document.addEventListener("DOMContentLoaded", () => {


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
        document.getElementById(
            "desktopSortSelect"
        );


    /* =====================================
       BILLIONAIRE
    ====================================== */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const billionaireId =
        params.get("id");


    if (!billionaireId) {

        console.error(
            "Billionaire ID missing."
        );

    }


    /* =====================================
       CART
    ====================================== */

    const CART_KEY =
        "gamevaultCart_" +
        billionaireId;


    function getCart() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    CART_KEY
                )
            ) || [];

        }

        catch {

            return [];

        }

    }


    function saveCart(cart) {

        localStorage.setItem(
            CART_KEY,
            JSON.stringify(cart)
        );

        updateCartCount();

    }


    function updateCartCount() {

        const cart =
            getCart();


        const count =
            cart.reduce(
                (total, item) =>
                    total +
                    Number(
                        item.quantity || 0
                    ),
                0
            );


        cartCount.textContent =
            count;

    }


    /* =====================================
       MONEY
    ====================================== */

    function formatMoney(value) {

        return new Intl.NumberFormat(
            "en-US",
            {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0
            }
        ).format(value);

    }


    /* =====================================
       FILTER STATE
    ====================================== */

    let activeSearch = "";

    let activePrice = "all";

    let activeSort = "featured";


    function getSelectedCategories() {

        return [
            ...document.querySelectorAll(
                ".category-filter:checked"
            )
        ].map(
            input => input.value
        );

    }


    function getSelectedAvailability() {

        return [
            ...document.querySelectorAll(
                ".availability-filter:checked"
            )
        ].map(
            input => input.value
        );

    }


    /* =====================================
       FILTER PRODUCTS
    ====================================== */

    function getFilteredItems() {

        let items =
            [...aviationItems];


        /* SEARCH */

        if (activeSearch) {

            const search =
                activeSearch.toLowerCase();


            items =
                items.filter(
                    item => {

                        return (

                            item.name
                                .toLowerCase()
                                .includes(search)

                            ||

                            item.description
                                .toLowerCase()
                                .includes(search)

                            ||

                            item.category
                                .toLowerCase()
                                .includes(search)

                            ||

                            item.manufacturer
                                .toLowerCase()
                                .includes(search)

                        );

                    }
                );

        }


        /* CATEGORY */

        const categories =
            getSelectedCategories();


        if (categories.length > 0) {

            items =
                items.filter(
                    item =>
                        categories.includes(
                            item.category
                        )
                );

        }


        /* PRICE */

        if (activePrice !== "all") {

            const limit =
                Number(activePrice);


            if (limit === 10000000) {

                items =
                    items.filter(
                        item =>
                            item.price < 10000000
                    );

            }

            else if (limit === 50000000) {

                items =
                    items.filter(
                        item =>
                            item.price >= 10000000 &&
                            item.price < 50000000
                    );

            }

            else if (limit === 100000000) {

                items =
                    items.filter(
                        item =>
                            item.price >= 50000000 &&
                            item.price < 100000000
                    );

            }

            else if (limit === 250000000) {

                items =
                    items.filter(
                        item =>
                            item.price >= 100000000 &&
                            item.price < 250000000
                    );

            }

            else {

                items =
                    items.filter(
                        item =>
                            item.price >= 250000000
                    );

            }

        }


        /* AVAILABILITY */

        const availability =
            getSelectedAvailability();


        if (availability.length > 0) {

            items =
                items.filter(
                    item =>
                        availability.includes(
                            item.type
                        )
                );

        }


        /* SORT */

        if (activeSort === "low") {

            items.sort(
                (a, b) =>
                    a.price - b.price
            );

        }

        else if (activeSort === "high") {

            items.sort(
                (a, b) =>
                    b.price - a.price
            );

        }

        else if (activeSort === "name") {

            items.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

        }


        return items;

    }


    /* =====================================
       CATEGORY LABEL
    ====================================== */

    function categoryName(category) {

        const names = {

            "private-jets":
                "Private Jets",

            "business-jets":
                "Business Jets",

            "vip-airliners":
                "VIP Airliners",

            "commercial-airliners":
                "Commercial Airliners",

            "turboprops":
                "Turboprops",

            "helicopters":
                "Helicopters",

            "military":
                "Military Aircraft",

            "cargo":
                "Cargo Aircraft",

            "supersonic":
                "Supersonic",

            "historic":
                "Historic",

            "experimental":
                "Experimental",

            "ultra-rare":
                "Ultra-Rare"

        };


        return (
            names[category] ||
            category
        );

    }


    /* =====================================
       PRODUCT CARD
    ====================================== */

    function createProductCard(item) {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "product-card";


        let availabilityBadge = "";


        if (item.type === "one") {

            availabilityBadge =

                `<span class="badge one">
                    ONE OF ONE
                </span>`;

        }

        else if (
            item.type === "limited"
        ) {

            availabilityBadge =

                `<span class="badge limited">
                    ${item.stock} AVAILABLE
                </span>`;

        }

        else {

            availabilityBadge =

                `<span class="badge stock">
                    IN STOCK
                </span>`;

        }


        let quantityHTML = "";


        if (item.type === "one") {

            quantityHTML = `

                <div class="one-only">

                    QUANTITY
                    <strong>1</strong>

                </div>

            `;

        }

        else {

            quantityHTML = `

                <div class="quantity-control">

                    <button
                        class="quantity-minus"
                        data-id="${item.id}"
                        type="button"
                    >
                        −
                    </button>


                    <input
                        type="number"
                        min="1"
                        max="${
                            item.type === "limited"
                            ? item.stock
                            : 9999
                        }"
                        value="1"
                        class="quantity-input"
                        data-id="${item.id}"
                    >


                    <button
                        class="quantity-plus"
                        data-id="${item.id}"
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
                    ✈
                </div>

                ${availabilityBadge}

            </div>


            <div class="product-content">

                <div class="product-category">

                    ${categoryName(
                        item.category
                    )}

                </div>


                <h3>
                    ${item.name}
                </h3>


                <p>
                    ${item.description}
                </p>


                <div class="product-price">

                    ${formatMoney(
                        item.price
                    )}

                </div>


                ${quantityHTML}


                <button
                    class="add-cart"
                    data-id="${item.id}"
                    type="button"
                >

                    ADD TO CART

                </button>

            </div>

        `;


        return card;

    }


    /* =====================================
       RENDER
    ====================================== */

    function renderProducts() {

        const items =
            getFilteredItems();


        productsGrid.innerHTML =
            "";


        resultCount.textContent =
            items.length;


        if (items.length === 0) {

            noResults.style.display =
                "flex";

            return;

        }


        noResults.style.display =
            "none";


        const fragment =
            document.createDocumentFragment();


        items.forEach(
            item => {

                fragment.appendChild(
                    createProductCard(item)
                );

            }
        );


        productsGrid.appendChild(
            fragment
        );

    }


    /* =====================================
       ADD TO CART
    ====================================== */

    function addToCart(
        itemId,
        quantity
    ) {

        const item =
            aviationItems.find(
                product =>
                    product.id === itemId
            );


        if (!item) return;


        let cart =
            getCart();


        const existing =
            cart.find(
                cartItem =>
                    cartItem.id === item.id
            );


        let requested =
            Number(quantity);


        if (
            !Number.isFinite(
                requested
            ) ||
            requested < 1
        ) {

            requested = 1;

        }


        if (item.type === "one") {

            requested = 1;

        }


        if (
            item.type === "limited"
        ) {

            const current =
                existing
                ? existing.quantity
                : 0;


            const remaining =
                item.stock -
                current;


            requested =
                Math.min(
                    requested,
                    Math.max(
                        remaining,
                        0
                    )
                );

        }


        if (existing) {

            if (
                item.type === "one"
            ) {

                existing.quantity =
                    1;

            }

            else {

                existing.quantity +=
                    requested;


                if (
                    item.type === "limited"
                ) {

                    existing.quantity =
                        Math.min(
                            existing.quantity,
                            item.stock
                        );

                }

            }

        }

        else {

            if (
                item.type !== "limited" ||
                requested > 0
            ) {

                cart.push({

                    id:
                        item.id,

                    name:
                        item.name,

                    price:
                        item.price,

                    category:
                        item.category,

                    type:
                        item.type,

                    stock:
                        item.stock || null,

                    quantity:
                        requested

                });

            }

        }


        saveCart(cart);


        showAddedMessage(
            item.name
        );

    }


    /* =====================================
       TOAST
    ====================================== */

    function showAddedMessage(
        name
    ) {

        const toast =
            document.createElement(
                "div"
            );


        toast.className =
            "cart-toast";


        toast.innerHTML =
            `✦ ${name}<br>
             <strong>
                Added to your cart
             </strong>`;


        document.body.appendChild(
            toast
        );


        setTimeout(
            () => {

                toast.classList.add(
                    "show"
                );

            },
            10
        );


        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );


                setTimeout(
                    () =>
                        toast.remove(),
                    300
                );

            },
            2200
        );

    }


    /* =====================================
       PRODUCT EVENTS
    ====================================== */

    productsGrid.addEventListener(
        "click",
        event => {


            /* ADD TO CART */

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
                    card.querySelector(
                        ".quantity-input"
                    );


                const quantity =
                    input
                    ? Number(input.value)
                    : 1;


                addToCart(
                    id,
                    quantity
                );


                return;

            }


            /* PLUS */

            const plus =
                event.target.closest(
                    ".quantity-plus"
                );


            if (plus) {

                const input =
                    plus.parentElement
                        .querySelector(
                            ".quantity-input"
                        );


                let value =
                    Number(
                        input.value
                    ) + 1;


                const max =
                    Number(
                        input.max
                    );


                if (
                    value > max
                ) {

                    value = max;

                }


                input.value =
                    value;

            }


            /* MINUS */

            const minus =
                event.target.closest(
                    ".quantity-minus"
                );


            if (minus) {

                const input =
                    minus.parentElement
                        .querySelector(
                            ".quantity-input"
                        );


                let value =
                    Number(
                        input.value
                    ) - 1;


                if (
                    value < 1
                ) {

                    value = 1;

                }


                input.value =
                    value;

            }

        }
    );


    /* =====================================
       SEARCH
    ====================================== */

    searchInput.addEventListener(
        "input",
        () => {

            activeSearch =
                searchInput.value.trim();

            renderProducts();

        }
    );


    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value =
                "";

            activeSearch =
                "";

            renderProducts();

            searchInput.focus();

        }
    );


    /* =====================================
       CATEGORY
    ====================================== */

    document.querySelectorAll(
        ".category-filter"
    ).forEach(
        input => {

            input.addEventListener(
                "change",
                renderProducts
            );

        }
    );


    /* =====================================
       AVAILABILITY
    ====================================== */

    document.querySelectorAll(
        ".availability-filter"
    ).forEach(
        input => {

            input.addEventListener(
                "change",
                renderProducts
            );

        }
    );


    /* =====================================
       PRICE
    ====================================== */

    document.querySelectorAll(
        'input[name="price"]'
    ).forEach(
        input => {

            input.addEventListener(
                "change",
                () => {

                    activePrice =
                        input.value;

                    renderProducts();

                }
            );

        }
    );


    /* =====================================
       SORT
    ====================================== */

    function setSort(value) {

        activeSort =
            value;


        sortSelect.value =
            value;


        desktopSortSelect.value =
            value;


        renderProducts();

    }


    sortSelect.addEventListener(
        "change",
        () =>
            setSort(
                sortSelect.value
            )
    );


    desktopSortSelect.addEventListener(
        "change",
        () =>
            setSort(
                desktopSortSelect.value
            )
    );


    /* =====================================
       RESET
    ====================================== */

    resetFilters.addEventListener(
        "click",
        () => {


            document.querySelectorAll(
                ".category-filter, .availability-filter"
            ).forEach(
                input => {

                    input.checked =
                        false;

                }
            );


            document.querySelector(
                'input[name="price"][value="all"]'
            ).checked =
                true;


            activePrice =
                "all";


            activeSearch =
                "";


            searchInput.value =
                "";


            renderProducts();

        }
    );


    /* =====================================
       MOBILE FILTER
    ====================================== */

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
       CART
    ====================================== */

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


    /* =====================================
       BACK
    ====================================== */

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
       INITIAL
    ====================================== */

    updateCartCount();

    renderProducts();

});