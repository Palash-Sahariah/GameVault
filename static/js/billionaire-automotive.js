document.addEventListener("DOMContentLoaded", () => {

    const params =
        new URLSearchParams(window.location.search);

    const billionaireId =
        params.get("id") || "unknown";


    const CART_KEY =
        "gamevaultCart_" + billionaireId;


    const grid =
        document.getElementById("productsGrid");

    const resultCount =
        document.getElementById("resultCount");

    const noResults =
        document.getElementById("noResults");

    const searchInput =
        document.getElementById("searchInput");

    const brandFilters =
        document.getElementById("brandFilters");

    const filterSidebar =
        document.getElementById("filterSidebar");

    const sortSelect =
        document.getElementById("sortSelect");

    const desktopSortSelect =
        document.getElementById("desktopSortSelect");


    let activeSort = "featured";


    /* =========================================
       CART
    ========================================= */

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


    function updateCartCount() {

        const count =
            getCart().reduce(
                (total, item) =>
                    total + Number(item.quantity || 0),
                0
            );


        document.getElementById(
            "cartCount"
        ).textContent = count;

    }



    /* =========================================
       BRAND FILTERS
    ========================================= */

    const brands =
        [...new Set(
            AUTOMOTIVE_MODELS.map(
                car => car[0]
            )
        )].sort();


    brands.forEach(brand => {

        const label =
            document.createElement("label");


        const safeValue =
            automotiveSlug(brand);


        label.innerHTML = `
            <input
                type="checkbox"
                class="brand-filter"
                value="${safeValue}"
            >

            ${brand}
        `;


        brandFilters.appendChild(label);

    });



    /* =========================================
       CHECKED VALUES
    ========================================= */

    function checked(selector) {

        return [
            ...document.querySelectorAll(
                selector + ":checked"
            )
        ].map(
            element => element.value
        );

    }



    /* =========================================
       PRICE
    ========================================= */

    function filterPrice(items) {

        const selected =
            document.querySelector(
                'input[name="price"]:checked'
            )?.value;


        if (!selected || selected === "all") {

            return items;

        }


        if (selected === "100000") {

            return items.filter(
                car => car.price < 100000
            );

        }


        if (selected === "500000") {

            return items.filter(
                car =>
                    car.price >= 100000 &&
                    car.price < 500000
            );

        }


        if (selected === "1000000") {

            return items.filter(
                car =>
                    car.price >= 500000 &&
                    car.price < 1000000
            );

        }


        if (selected === "5000000") {

            return items.filter(
                car =>
                    car.price >= 1000000 &&
                    car.price < 5000000
            );

        }


        if (selected === "5000000plus") {

            return items.filter(
                car => car.price >= 5000000
            );

        }


        return items;

    }



    /* =========================================
       FILTER
    ========================================= */

    function getFilteredCars() {

        let cars =
            [...automotive];


        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        /* SEARCH */

        if (query) {

            cars =
                cars.filter(car => {

                    const text = [

                        car.brand,

                        car.model,

                        car.name,

                        car.config,

                        car.bodyStyle,

                        car.powertrain

                    ]
                        .join(" ")
                        .toLowerCase();


                    return text.includes(query);

                });

        }



        /* BRAND */

        const selectedBrands =
            checked(".brand-filter");


        if (selectedBrands.length) {

            cars =
                cars.filter(
                    car =>
                        selectedBrands.includes(
                            automotiveSlug(
                                car.brand
                            )
                        )
                );

        }



        /* BODY */

        const selectedBodies =
            checked(".body-filter");


        if (selectedBodies.length) {

            cars =
                cars.filter(
                    car =>
                        selectedBodies.includes(
                            car.bodyStyle
                        )
                );

        }



        /* POWERTRAIN */

        const selectedPower =
            checked(".power-filter");


        if (selectedPower.length) {

            cars =
                cars.filter(
                    car =>
                        selectedPower.includes(
                            car.powertrain
                        )
                );

        }



        /* POPULARITY */

        const selectedPopularity =
            checked(".popularity-filter");


        if (selectedPopularity.length) {

            cars =
                cars.filter(
                    car =>
                        selectedPopularity.includes(
                            car.popularity
                        )
                );

        }



        /* AVAILABILITY */

        const selectedAvailability =
            checked(".availability-filter");


        if (selectedAvailability.length) {

            cars =
                cars.filter(
                    car =>
                        selectedAvailability.includes(
                            car.availability
                        )
                );

        }



        cars =
            filterPrice(cars);



        /* SORT */

        if (activeSort === "low") {

            cars.sort(
                (a, b) =>
                    a.price - b.price
            );

        }


        else if (activeSort === "high") {

            cars.sort(
                (a, b) =>
                    b.price - a.price
            );

        }


        else if (activeSort === "name") {

            cars.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

        }


        else {

            const order = {

                legendary: 1,

                popular: 2,

                luxury: 3,

                other: 4

            };


            cars.sort(
                (a, b) =>
                    (order[a.popularity] || 5) -
                    (order[b.popularity] || 5)
            );

        }


        return cars;

    }



    /* =========================================
       MONEY
    ========================================= */

    function formatMoney(value) {

        return "$" +
            Number(value)
                .toLocaleString("en-US");

    }



    /* =========================================
       PRODUCT CARD
    ========================================= */

    function createCard(car) {

        let badge = "";


        if (car.availability === "one") {

            badge = `
                <span class="badge one">
                    ONE OF ONE
                </span>
            `;

        }


        else if (
            car.availability === "limited"
        ) {

            badge = `
                <span class="badge limited">
                    ${car.stock} AVAILABLE
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



        let quantityControl;


        if (car.availability === "one") {

            quantityControl = `
                <div class="one-only">

                    QUANTITY

                    <strong>
                        1
                    </strong>

                </div>
            `;

        }


        else {

            quantityControl = `
                <div class="quantity-control">

                    <button
                        class="quantity-minus"
                        data-id="${car.id}"
                        type="button"
                    >
                        −
                    </button>


                    <input
                        class="quantity-input"
                        data-id="${car.id}"
                        type="number"
                        min="1"
                        max="${
                            car.availability === "limited"
                                ? car.stock
                                : 9999
                        }"
                        value="1"
                    >


                    <button
                        class="quantity-plus"
                        data-id="${car.id}"
                        type="button"
                    >
                        +
                    </button>

                </div>
            `;

        }



        return `

            <article class="product-card">


                <div class="product-image">

                    <div class="vault-symbol">
                        🚘
                    </div>

                    ${badge}

                </div>



                <div class="product-content">


                    <div class="product-category">

                        ${car.brand}

                        •

                        ${car.popularity.toUpperCase()}

                    </div>


                    <h3>
                        ${car.name}
                    </h3>


                    <p>

                        ${car.bodyStyle.toUpperCase()}

                        •

                        ${car.powertrain.toUpperCase()}

                    </p>


                    <div class="product-price">

                        ${formatMoney(car.price)}

                    </div>


                    ${quantityControl}


                    <button
                        class="add-cart"
                        data-id="${car.id}"
                        type="button"
                    >

                        ADD TO CART

                    </button>


                </div>


            </article>

        `;

    }



    /* =========================================
       RENDER
    ========================================= */

    function renderProducts() {

        const cars =
            getFilteredCars();


        resultCount.textContent =
            cars.length;


        grid.innerHTML =
            cars.map(
                createCard
            ).join("");


        noResults.style.display =
            cars.length
                ? "none"
                : "flex";

    }



    /* =========================================
       ADD TO CART
    ========================================= */

    function addToCart(id, quantity) {

        const car =
            automotive.find(
                item => item.id === id
            );


        if (!car) return;


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


        if (
            car.availability === "one" &&
            existing
        ) {

            showToast(
                "This car is already in your cart."
            );

            return;

        }



        if (
            car.availability === "limited"
        ) {

            const current =
                existing
                    ? existing.quantity
                    : 0;


            if (
                current + quantity >
                car.stock
            ) {

                showToast(
                    `Only ${car.stock} available.`
                );

                return;

            }

        }



        if (existing) {

            existing.quantity += quantity;

        }

        else {

            cart.push({

                id: car.id,

                name: car.name,

                brand: car.brand,

                model: car.model,

                price: car.price,

                quantity: quantity,

                availability:
                    car.availability

            });

        }


        saveCart(cart);

        updateCartCount();


        showToast(
            "🚘 Added to your collection cart"
        );

    }



    /* =========================================
       TOAST
    ========================================= */

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
                    "1px solid rgba(217,178,106,.65)",

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



    /* =========================================
       CARD CONTROLS
    ========================================= */

    grid.addEventListener(
        "click",
        event => {


            const addButton =
                event.target.closest(
                    ".add-cart"
                );


            if (addButton) {

                const input =
                    grid.querySelector(
                        `.quantity-input[data-id="${addButton.dataset.id}"]`
                    );


                addToCart(
                    addButton.dataset.id,
                    input
                        ? input.value
                        : 1
                );


                return;

            }



            const plus =
                event.target.closest(
                    ".quantity-plus"
                );


            if (plus) {

                const input =
                    grid.querySelector(
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
                event.target.closest(
                    ".quantity-minus"
                );


            if (minus) {

                const input =
                    grid.querySelector(
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



    /* =========================================
       SEARCH
    ========================================= */

    searchInput.addEventListener(
        "input",
        renderProducts
    );


    document
        .getElementById("clearSearch")
        .addEventListener(
            "click",
            () => {

                searchInput.value = "";

                renderProducts();

                searchInput.focus();

            }
        );



    /* =========================================
       FILTER EVENTS
    ========================================= */

    document
        .querySelectorAll(
            ".brand-filter," +
            ".body-filter," +
            ".power-filter," +
            ".popularity-filter," +
            ".availability-filter," +
            "input[name='price']"
        )
        .forEach(
            input =>
                input.addEventListener(
                    "change",
                    renderProducts
                )
        );



    /* =========================================
       SORT
    ========================================= */

    sortSelect.addEventListener(
        "change",
        () => {

            activeSort =
                sortSelect.value;


            desktopSortSelect.value =
                activeSort;


            renderProducts();

        }
    );


    desktopSortSelect.addEventListener(
        "change",
        () => {

            activeSort =
                desktopSortSelect.value;


            sortSelect.value =
                activeSort;


            renderProducts();

        }
    );



    /* =========================================
       RESET
    ========================================= */

    document
        .getElementById("resetFilters")
        .addEventListener(
            "click",
            () => {

                searchInput.value = "";


                document
                    .querySelectorAll(
                        ".brand-filter," +
                        ".body-filter," +
                        ".power-filter," +
                        ".popularity-filter," +
                        ".availability-filter"
                    )
                    .forEach(
                        input =>
                            input.checked = false
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



    /* =========================================
       MOBILE FILTER
    ========================================= */

    document
        .getElementById("openFilters")
        .addEventListener(
            "click",
            () => {

                filterSidebar.classList.add(
                    "open"
                );

            }
        );


    document
        .getElementById("closeFilters")
        .addEventListener(
            "click",
            () => {

                filterSidebar.classList.remove(
                    "open"
                );

            }
        );



    /* =========================================
       NAVIGATION
    ========================================= */

    document
        .getElementById("cartButton")
        .addEventListener(
            "click",
            () => {

                window.location.href =
                    "/games/billionaire/cart?id=" +
                    encodeURIComponent(
                        billionaireId
                    );

            }
        );


    document
        .getElementById("backButton")
        .addEventListener(
            "click",
            () => {

                window.location.href =
                    "/games/billionaire/play?id=" +
                    encodeURIComponent(
                        billionaireId
                    );

            }
        );



    /* =========================================
       START
    ========================================= */

    updateCartCount();

    renderProducts();

});