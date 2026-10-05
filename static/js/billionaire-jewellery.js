document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           ELEMENTS
        ================================================= */

        const productsGrid =
            document.getElementById(
                "productsGrid"
            );


        const resultCount =
            document.getElementById(
                "resultCount"
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


        const resetFilters =
            document.getElementById(
                "resetFilters"
            );


        const cartButton =
            document.getElementById(
                "cartButton"
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


        const sortSelect =
            document.getElementById(
                "sortSelect"
            );


        const desktopSortSelect =
            document.getElementById(
                "desktopSortSelect"
            );


        /* =================================================
           BILLIONAIRE
        ================================================= */

        const params =
            new URLSearchParams(
                window.location.search
            );


        const billionaireId =
            params.get("id") ||
            "unknown";


        const CART_KEY =
            "gamevaultCart_" +
            billionaireId;


        let activeSort =
            "featured";


        /* =================================================
           BRAND LABELS
        ================================================= */

        const brandNames = {

            "cartier":
                "Cartier",

            "van-cleef-arpels":
                "Van Cleef & Arpels",

            "tiffany":
                "Tiffany & Co.",

            "bulgari":
                "Bulgari",

            "harry-winston":
                "Harry Winston",

            "graff":
                "Graff",

            "chopard":
                "Chopard",

            "piaget":
                "Piaget",

            "buccellati":
                "Buccellati",

            "boucheron":
                "Boucheron",

            "chaumet":
                "Chaumet",

            "mikimoto":
                "Mikimoto",

            "david-yurman":
                "David Yurman",

            "messika":
                "Messika",

            "de-beers":
                "De Beers",

            "pomellato":
                "Pomellato",

            "fred":
                "FRED",

            "dior":
                "Dior",

            "chanel":
                "Chanel"

        };


        /* =================================================
           MONEY
        ================================================= */

        function formatMoney(
            value
        ) {

            return "$" +
                Number(
                    value
                ).toLocaleString(
                    "en-US"
                );

        }


        /* =================================================
           CART
        ================================================= */

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


        function saveCart(
            cart
        ) {

            localStorage.setItem(
                CART_KEY,
                JSON.stringify(
                    cart
                )
            );

        }


        function updateCartCount() {

            const count =
                getCart().reduce(
                    function (
                        total,
                        item
                    ) {

                        return (
                            total +
                            Number(
                                item.quantity ||
                                0
                            )
                        );

                    },
                    0
                );


            document.getElementById(
                "cartCount"
            ).textContent =
                count;

        }


        /* =================================================
           FILTERS
        ================================================= */

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


        function selectedTypes() {

            return Array.from(
                document.querySelectorAll(
                    ".type-filter:checked"
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

            const selected =
                document.querySelector(
                    'input[name="price"]:checked'
                );


            return selected
                ? selected.value
                : "all";

        }


        /* =================================================
           FILTER DATABASE
        ================================================= */

        function filteredJewellery() {

            let result =
                [...jewellery];


            /* SEARCH */

            const search =
                searchInput.value
                    .trim()
                    .toLowerCase();


            if (search) {

                result =
                    result.filter(
                        function (
                            item
                        ) {

                            return (

                                item.name
                                    .toLowerCase()
                                    .includes(
                                        search
                                    )

                                ||

                                item.brand
                                    .toLowerCase()
                                    .includes(
                                        search
                                    )

                                ||

                                item.collection
                                    .toLowerCase()
                                    .includes(
                                        search
                                    )

                                ||

                                item.material
                                    .toLowerCase()
                                    .includes(
                                        search
                                    )

                            );

                        }
                    );

            }


            /* BRAND */

            const brands =
                selectedBrands();


            if (
                brands.length
            ) {

                result =
                    result.filter(
                        item =>
                            brands.includes(
                                item.category
                            )
                    );

            }


            /* TYPE */

            const types =
                selectedTypes();


            if (
                types.length
            ) {

                result =
                    result.filter(
                        item =>
                            types.includes(
                                item.type
                            )
                    );

            }


            /* PRICE */

            const price =
                selectedPrice();


            if (
                price !== "all"
            ) {

                const limit =
                    Number(
                        price
                    );


                if (
                    limit ===
                    10000
                ) {

                    result =
                        result.filter(
                            item =>
                                item.price <
                                10000
                        );

                }

                else if (
                    limit ===
                    100000
                ) {

                    result =
                        result.filter(
                            item =>
                                item.price >=
                                10000 &&
                                item.price <
                                100000
                        );

                }

                else if (
                    limit ===
                    1000000
                ) {

                    result =
                        result.filter(
                            item =>
                                item.price >=
                                100000 &&
                                item.price <
                                1000000
                        );

                }

                else if (
                    limit ===
                    10000000
                ) {

                    result =
                        result.filter(
                            item =>
                                item.price >=
                                1000000 &&
                                item.price <
                                10000000
                        );

                }

                else {

                    result =
                        result.filter(
                            item =>
                                item.price >=
                                10000000
                        );

                }

            }


            /* AVAILABILITY */

            const availability =
                selectedAvailability();


            if (
                availability.length
            ) {

                result =
                    result.filter(
                        item =>
                            availability.includes(
                                item.availability
                            )
                    );

            }


            /* SORT */

            if (
                activeSort ===
                "low"
            ) {

                result.sort(
                    (
                        a,
                        b
                    ) =>
                        a.price -
                        b.price
                );

            }


            else if (
                activeSort ===
                "high"
            ) {

                result.sort(
                    (
                        a,
                        b
                    ) =>
                        b.price -
                        a.price
                );

            }


            else if (
                activeSort ===
                "name"
            ) {

                result.sort(
                    (
                        a,
                        b
                    ) =>
                        a.name.localeCompare(
                            b.name
                        )
                );

            }


            return result;

        }


        /* =================================================
           PRODUCT CARD
        ================================================= */

        function createCard(
            item
        ) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            let badge = "";


            if (
                item.availability ===
                "one"
            ) {

                badge = `
                    <span class="badge one">
                        ONE OF ONE
                    </span>
                `;

            }


            else if (
                item.availability ===
                "limited"
            ) {

                badge = `
                    <span class="badge limited">
                        ${item.stock} AVAILABLE
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


            let quantityControl = "";


            if (
                item.availability ===
                "one"
            ) {

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
                            data-id="${item.id}"
                            type="button"
                        >
                            −
                        </button>


                        <input
                            type="number"
                            min="1"
                            max="${
                                item.availability ===
                                "limited"
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
                        💎
                    </div>

                    ${badge}

                </div>


                <div class="product-content">


                    <div class="product-category">

                        ${
                            brandNames[
                                item.category
                            ] ||
                            item.brand
                        }

                    </div>


                    <h3>
                        ${item.name}
                    </h3>


                    <p>
                        ${item.material}
                        •
                        ${item.typeName}
                    </p>


                    <div class="product-price">

                        ${formatMoney(
                            item.price
                        )}

                    </div>


                    ${quantityControl}


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


        /* =================================================
           RENDER
        ================================================= */

        function renderProducts() {

            const result =
                filteredJewellery();


            productsGrid.innerHTML =
                "";


            resultCount.textContent =
                result.length;


            if (
                result.length ===
                0
            ) {

                noResults.style.display =
                    "flex";

                return;

            }


            noResults.style.display =
                "none";


            const fragment =
                document.createDocumentFragment();


            result.forEach(
                function (
                    item
                ) {

                    fragment.appendChild(
                        createCard(
                            item
                        )
                    );

                }
            );


            productsGrid.appendChild(
                fragment
            );

        }


        /* =================================================
           ADD TO CART
        ================================================= */

        function addToCart(
            id,
            quantity
        ) {

            const item =
                jewellery.find(
                    product =>
                        product.id ===
                        id
                );


            if (!item) {
                return;
            }


            quantity =
                Math.max(
                    1,
                    Number(
                        quantity
                    ) || 1
                );


            const cart =
                getCart();


            const existing =
                cart.find(
                    product =>
                        product.id ===
                        id
                );


            /* ONE OF ONE */

            if (
                item.availability ===
                "one"
            ) {

                if (existing) {

                    showToast(
                        "This jewellery piece is already in your cart."
                    );

                    return;

                }


                quantity = 1;

            }


            /* LIMITED */

            if (
                item.availability ===
                "limited"
            ) {

                const current =
                    existing
                        ? existing.quantity
                        : 0;


                if (
                    current +
                    quantity >
                    item.stock
                ) {

                    showToast(
                        `Only ${item.stock} available.`
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

                    id:
                        item.id,

                    name:
                        item.name,

                    category:
                        item.category,

                    price:
                        item.price,

                    availability:
                        item.availability,

                    quantity:
                        quantity

                });

            }


            saveCart(
                cart
            );


            updateCartCount();


            showToast(
                "💎 Added to your cart"
            );

        }


        /* =================================================
           TOAST
        ================================================= */

        function showToast(
            message
        ) {

            const previous =
                document.querySelector(
                    ".gamevault-toast"
                );


            if (previous) {
                previous.remove();
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

                    position:
                        "fixed",

                    left:
                        "50%",

                    bottom:
                        "25px",

                    transform:
                        "translateX(-50%)",

                    zIndex:
                        "99999",

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
                () =>
                    toast.remove(),
                2200
            );

        }


        /* =================================================
           GRID CONTROLS
        ================================================= */

        productsGrid.addEventListener(
            "click",
            function (
                event
            ) {

                const target =
                    event.target;


                const addButton =
                    target.closest(
                        ".add-cart"
                    );


                if (
                    addButton
                ) {

                    const id =
                        addButton.dataset.id;


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


                if (
                    plus
                ) {

                    const input =
                        productsGrid.querySelector(
                            `.quantity-input[data-id="${plus.dataset.id}"]`
                        );


                    if (
                        input
                    ) {

                        input.value =
                            Math.min(
                                Number(
                                    input.value
                                ) + 1,

                                Number(
                                    input.max
                                )
                            );

                    }


                    return;

                }


                const minus =
                    target.closest(
                        ".quantity-minus"
                    );


                if (
                    minus
                ) {

                    const input =
                        productsGrid.querySelector(
                            `.quantity-input[data-id="${minus.dataset.id}"]`
                        );


                    if (
                        input
                    ) {

                        input.value =
                            Math.max(
                                1,

                                Number(
                                    input.value
                                ) - 1
                            );

                    }

                }

            }
        );


        /* =================================================
           SEARCH
        ================================================= */

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


        /* =================================================
           BRAND FILTER
        ================================================= */

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


        /* =================================================
           TYPE FILTER
        ================================================= */

        document
            .querySelectorAll(
                ".type-filter"
            )
            .forEach(
                checkbox => {

                    checkbox.addEventListener(
                        "change",
                        renderProducts
                    );

                }
            );


        /* =================================================
           AVAILABILITY
        ================================================= */

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


        /* =================================================
           PRICE
        ================================================= */

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


        /* =================================================
           SORT
        ================================================= */

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


        /* =================================================
           RESET
        ================================================= */

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
                        ".type-filter"
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
                    .checked =
                        true;


                activeSort =
                    "featured";


                sortSelect.value =
                    "featured";


                desktopSortSelect.value =
                    "featured";


                renderProducts();

            }
        );


        /* =================================================
           MOBILE FILTER
        ================================================= */

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


        /* =================================================
           CART
        ================================================= */

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


        /* =================================================
           BACK
        ================================================= */

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


        /* =================================================
           INITIAL LOAD
        ================================================= */

        updateCartCount();

        renderProducts();

    }
);