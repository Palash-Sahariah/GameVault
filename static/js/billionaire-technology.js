const params = new URLSearchParams(window.location.search);
const billionaireId = params.get("id");

const cartKey = `gamevaultCart_${billionaireId}`;

let products = [...technologyProducts];
let filteredProducts = [...products];

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resultCount = document.getElementById("resultCount");
const productsGrid = document.getElementById("productsGrid");
const noResults = document.getElementById("noResults");

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");

const backButton = document.getElementById("backButton");

const categoryFilters =
    document.querySelectorAll(".category-filter");

const availabilityFilters =
    document.querySelectorAll(".availability-filter");

const priceFilters =
    document.querySelectorAll('input[name="price"]');

const resetFilters =
    document.getElementById("resetFilters");

const sortSelect =
    document.getElementById("sortSelect");

const desktopSortSelect =
    document.getElementById("desktopSortSelect");

const openFilters =
    document.getElementById("openFilters");

const closeFilters =
    document.getElementById("closeFilters");

const filterSidebar =
    document.getElementById("filterSidebar");


function formatPrice(price) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);

}


function getCart() {

    try {

        return JSON.parse(
            localStorage.getItem(cartKey)
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

    const cart = getCart();

    const count = cart.reduce(
        (total, item) => total + (item.quantity || 1),
        0
    );

    cartCount.textContent = count;

}


function addToCart(product) {

    const cart = getCart();

    const existing = cart.find(
        item => item.id === product.id
    );

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            quantity: 1
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
        document.querySelector(".cart-toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast =
        document.createElement("div");

    toast.className = "cart-toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2200);

}


function renderProducts() {

    productsGrid.innerHTML = "";

    resultCount.textContent =
        filteredProducts.length;

    if (!filteredProducts.length) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";

    filteredProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">

                <div class="vault-symbol">
                    ⚡
                </div>

                <span class="badge">
                    ${product.availability === "limited"
                        ? "LIMITED"
                        : "IN STOCK"}
                </span>

            </div>

            <div class="product-content">

                <div class="product-category">
                    ${getCategoryName(product.category)}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    Real-world India market price
                </p>

                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>

                <div class="one-only">
                    Real product price
                </div>

                <button
                    class="add-cart"
                    data-id="${product.id}">
                    ADD TO CART
                </button>

            </div>

        `;

        card.querySelector(".add-cart")
            .addEventListener(
                "click",
                () => addToCart(product)
            );

        productsGrid.appendChild(card);

    });

}


function getCategoryName(category) {

    const names = {

        smartphones: "Smartphones",
        laptops: "Laptops",
        tablets: "Tablets",
        desktop: "Desktop & PC",
        gpu: "Graphics Cards",
        gaming: "Gaming",
        cameras: "Cameras",
        tv: "TV & Displays",
        audio: "Audio",
        wearables: "Wearables",
        drones: "Drones",
        storage: "Storage"

    };

    return names[category] || category;

}


function applyFilters() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();

    const selectedCategories =
        [...categoryFilters]
            .filter(input => input.checked)
            .map(input => input.value);

    const selectedAvailability =
        [...availabilityFilters]
            .filter(input => input.checked)
            .map(input => input.value);

    const selectedPrice =
        document.querySelector(
            'input[name="price"]:checked'
        )?.value || "all";

    filteredProducts =
        products.filter(product => {

            const matchesSearch =
                !search ||
                product.name
                    .toLowerCase()
                    .includes(search);

            const matchesCategory =
                selectedCategories.length === 0 ||
                selectedCategories.includes(
                    product.category
                );

            const matchesAvailability =
                selectedAvailability.length === 0 ||
                selectedAvailability.includes(
                    product.availability
                );

            let matchesPrice = true;

            if (selectedPrice !== "all") {

                const max =
                    Number(selectedPrice);

                const selectedIndex =
                    [
                        "10000",
                        "50000",
                        "100000",
                        "250000",
                        "500000",
                        "1000000000000"
                    ].indexOf(selectedPrice);

                const minValues = [
                    0,
                    10000,
                    50000,
                    100000,
                    250000,
                    500000
                ];

                const min =
                    minValues[selectedIndex];

                matchesPrice =
                    product.price >= min &&
                    product.price < max;

            }

            return (
                matchesSearch &&
                matchesCategory &&
                matchesAvailability &&
                matchesPrice
            );

        });

    sortProducts();

}


function sortProducts() {

    const sort =
        desktopSortSelect.value;

    if (sort === "low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (sort === "high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }

    else if (sort === "name") {

        filteredProducts.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
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

        searchInput.value = "";

        applyFilters();

        searchInput.focus();

    }
);


categoryFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        applyFilters
    );

});


availabilityFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        applyFilters
    );

});


priceFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        applyFilters
    );

});


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

        searchInput.value = "";

        categoryFilters.forEach(
            filter => filter.checked = false
        );

        availabilityFilters.forEach(
            filter => filter.checked = false
        );

        document.querySelector(
            'input[name="price"][value="all"]'
        ).checked = true;

        sortSelect.value = "featured";

        desktopSortSelect.value =
            "featured";

        applyFilters();

    }
);


openFilters.addEventListener(
    "click",
    () => {

        filterSidebar.classList.add("active");

    }
);


closeFilters.addEventListener(
    "click",
    () => {

        filterSidebar.classList.remove("active");

    }
);


cartButton.addEventListener(
    "click",
    () => {

        window.location.href =
            `/games/billionaire/cart?id=${encodeURIComponent(
                billionaireId
            )}`;

    }
);


backButton.addEventListener(
    "click",
    () => {

        window.location.href =
            `/games/billionaire/play?id=${encodeURIComponent(
                billionaireId
            )}`;

    }
);


updateCartCount();
applyFilters();