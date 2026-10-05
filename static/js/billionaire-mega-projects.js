const params =
    new URLSearchParams(
        window.location.search
    );

const billionaireId =
    params.get("id");


const cartKey =
    `gamevaultCart_${billionaireId}`;


let products =
    [...megaProjects];


let filteredProducts =
    [...products];


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

const productsGrid =
    document.getElementById(
        "productsGrid"
    );

const noResults =
    document.getElementById(
        "noResults"
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


const categoryFilters =
    document.querySelectorAll(
        ".category-filter"
    );


const availabilityFilters =
    document.querySelectorAll(
        ".availability-filter"
    );


const priceFilters =
    document.querySelectorAll(
        'input[name="price"]'
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


function formatPrice(price) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(price);

}


function getCart() {

    try {

        return JSON.parse(
            localStorage.getItem(
                cartKey
            )
        ) || [];

    } catch {

        return [];

    }

}


function saveCart(cart) {

    localStorage.setItem(
        cartKey,
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
                (item.quantity || 1),
            0
        );

    cartCount.textContent =
        count;

}


function addToCart(product) {

    const cart =
        getCart();


    const existing =
        cart.find(
            item =>
                item.id ===
                product.id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id:
                product.id,

            name:
                product.name,

            category:
                product.category,

            price:
                product.price,

            quantity:
                1

        });

    }


    saveCart(cart);

    updateCartCount();


    showToast(
        `${product.name} added to cart`
    );

}


function showToast(message) {

    const oldToast =
        document.querySelector(
            ".cart-toast"
        );


    if (oldToast) {
        oldToast.remove();
    }


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "cart-toast";


    toast.textContent =
        message;


    document.body.appendChild(
        toast
    );


    setTimeout(
        () => toast.remove(),
        2200
    );

}


function getCategoryName(category) {

    const names = {

        city:
            "City & Development",

        airport:
            "Airport",

        rail:
            "Rail & Metro",

        energy:
            "Energy",

        dam:
            "Dam & Hydropower",

        bridge:
            "Bridge & Tunnel",

        tourism:
            "Tourism",

        technology:
            "Technology",

        industrial:
            "Industrial",

        space:
            "Space"

    };


    return (
        names[category] ||
        category
    );

}


function renderProducts() {

    productsGrid.innerHTML =
        "";


    resultCount.textContent =
        filteredProducts.length;


    if (
        filteredProducts.length ===
        0
    ) {

        noResults.style.display =
            "block";

        return;

    }


    noResults.style.display =
        "none";


    filteredProducts.forEach(
        product => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            card.innerHTML = `

                <div class="product-image">

                    <div class="vault-symbol">
                        🏗️
                    </div>

                    <span class="badge">
                        ${
                            product.status
                                .toUpperCase()
                        }
                    </span>

                </div>


                <div class="product-content">

                    <div class="product-category">
                        ${getCategoryName(
                            product.category
                        )}
                    </div>


                    <h3>
                        ${product.name}
                    </h3>


                    <p>
                        ${product.location}
                    </p>


                    <div class="product-price">
                        ${formatPrice(
                            product.price
                        )}
                    </div>


                    <div class="one-only">
                        Reference project cost:
                        ${product.originalCost}
                    </div>


                    <button
                        class="add-cart"
                        data-id="${product.id}">
                        ADD TO CART
                    </button>

                </div>

            `;


            card.querySelector(
                ".add-cart"
            ).addEventListener(
                "click",
                () =>
                    addToCart(product)
            );


            productsGrid.appendChild(
                card
            );

        }
    );

}


function applyFilters() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    const selectedCategories =
        [...categoryFilters]
            .filter(
                input =>
                    input.checked
            )
            .map(
                input =>
                    input.value
            );


    const selectedStatus =
        [...availabilityFilters]
            .filter(
                input =>
                    input.checked
            )
            .map(
                input =>
                    input.value
            );


    const selectedPrice =
        document.querySelector(
            'input[name="price"]:checked'
        )?.value ||
        "all";


    filteredProducts =
        products.filter(
            product => {

                const matchesSearch =
                    !search ||
                    product.name
                        .toLowerCase()
                        .includes(search);


                const matchesCategory =
                    selectedCategories.length ===
                        0 ||
                    selectedCategories.includes(
                        product.category
                    );


                const matchesStatus =
                    selectedStatus.length ===
                        0 ||
                    selectedStatus.includes(
                        product.status
                    );


                let matchesPrice =
                    true;


                if (
                    selectedPrice !==
                    "all"
                ) {

                    const ranges = [

                        {
                            value: "1000000000",
                            min: 0,
                            max: 1000000000
                        },

                        {
                            value: "100000000000",
                            min: 1000000000,
                            max: 100000000000
                        },

                        {
                            value: "500000000000",
                            min: 100000000000,
                            max: 500000000000
                        },

                        {
                            value: "1000000000000",
                            min: 500000000000,
                            max: 1000000000000
                        },

                        {
                            value:
                                "100000000000000000",
                            min: 1000000000000,
                            max: Infinity
                        }

                    ];


                    const range =
                        ranges.find(
                            item =>
                                item.value ===
                                selectedPrice
                        );


                    if (range) {

                        matchesPrice =
                            product.price >=
                                range.min &&
                            product.price <
                                range.max;

                    }

                }


                return (
                    matchesSearch &&
                    matchesCategory &&
                    matchesStatus &&
                    matchesPrice
                );

            }
        );


    sortProducts();

}


function sortProducts() {

    const sort =
        desktopSortSelect.value;


    if (sort === "low") {

        filteredProducts.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    else if (sort === "high") {

        filteredProducts.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    else if (sort === "name") {

        filteredProducts.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }


    renderProducts();

}


searchInput.addEventListener(
    "input",
    applyFilters
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value =
            "";

        applyFilters();

        searchInput.focus();

    }
);


categoryFilters.forEach(
    filter => {

        filter.addEventListener(
            "change",
            applyFilters
        );

    }
);


availabilityFilters.forEach(
    filter => {

        filter.addEventListener(
            "change",
            applyFilters
        );

    }
);


priceFilters.forEach(
    filter => {

        filter.addEventListener(
            "change",
            applyFilters
        );

    }
);


sortSelect.addEventListener(
    "change",
    () => {

        desktopSortSelect.value =
            sortSelect.value;

        sortProducts();

    }
);


desktopSortSelect.addEventListener(
    "change",
    () => {

        sortSelect.value =
            desktopSortSelect.value;

        sortProducts();

    }
);


resetFilters.addEventListener(
    "click",
    () => {

        searchInput.value =
            "";

        categoryFilters.forEach(
            filter =>
                filter.checked =
                    false
        );

        availabilityFilters.forEach(
            filter =>
                filter.checked =
                    false
        );


        document.querySelector(
            'input[name="price"][value="all"]'
        ).checked = true;


        sortSelect.value =
            "featured";

        desktopSortSelect.value =
            "featured";


        applyFilters();

    }
);


openFilters.addEventListener(
    "click",
    () => {

        filterSidebar.classList.add(
            "active"
        );

    }
);


closeFilters.addEventListener(
    "click",
    () => {

        filterSidebar.classList.remove(
            "active"
        );

    }
);


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


updateCartCount();

applyFilters();