// ==========================================
// GAMEVAULT - BILLIONAIRE BREAKOUT
// BILLIONAIRE PLAY / MARKETPLACE SYSTEM
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------
    // 1. GET SELECTED BILLIONAIRE
    // ------------------------------------------

    const params = new URLSearchParams(window.location.search);
    const billionaireId = params.get("id");

    if (typeof billionaires === "undefined") {
        console.error("billionaires data was not loaded.");
        window.location.href = "/games/billionaire";
        return;
    }

    if (typeof shopItems === "undefined") {
        console.error("shopItems data was not loaded.");
        return;
    }

    const billionaire = billionaires.find(
        person => person.id === billionaireId
    );

    if (!billionaire) {
        window.location.href = "/games/billionaire";
        return;
    }


    // ------------------------------------------
    // 2. GAME STATE
    // ------------------------------------------

    // Net worth is stored in billions in billionaire.js.
    // Convert it into fictional gameplay USD.

    const startingBalance =
        Number(billionaire.netWorth) * 1000000000;

    let balance = startingBalance;

    let inventory = [];

    let pendingPurchase = null;


    // ------------------------------------------
    // 3. DOM ELEMENTS
    // ------------------------------------------

    const selectedName =
        document.getElementById("selectedName");

    const selectedRank =
        document.getElementById("selectedRank");

    const miniAvatar =
        document.getElementById("miniAvatar");

    const remainingBalance =
        document.getElementById("remainingBalance");

    const startingFortune =
        document.getElementById("startingFortune");

    const totalSpent =
        document.getElementById("totalSpent");

    const itemsOwned =
        document.getElementById("itemsOwned");

    const spentPercentage =
        document.getElementById("spentPercentage");

    const shopSearch =
        document.getElementById("shopSearch");

    const clearShopSearch =
        document.getElementById("clearShopSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const subcategoryFilter =
        document.getElementById("subcategoryFilter");

    const minPrice =
        document.getElementById("minPrice");

    const maxPrice =
        document.getElementById("maxPrice");

    const sortFilter =
        document.getElementById("sortFilter");

    const shopResultCount =
        document.getElementById("shopResultCount");

    const resetFilters =
        document.getElementById("resetFilters");

    const shopGrid =
        document.getElementById("shopGrid");

    const shopNoResults =
        document.getElementById("shopNoResults");

    const inventoryButton =
        document.getElementById("inventoryButton");

    const inventoryPanel =
        document.getElementById("inventoryPanel");

    const closeInventory =
        document.getElementById("closeInventory");

    const inventoryList =
        document.getElementById("inventoryList");

    const purchaseToast =
        document.getElementById("purchaseToast");

    const purchaseToastIcon =
        document.getElementById("purchaseToastIcon");

    const purchaseToastTitle =
        document.getElementById("purchaseToastTitle");

    const purchaseToastText =
        document.getElementById("purchaseToastText");

    const purchaseModal =
        document.getElementById("purchaseModal");

    const closePurchaseModal =
        document.getElementById("closePurchaseModal");

    const modalItemName =
        document.getElementById("modalItemName");

    const modalItemPrice =
        document.getElementById("modalItemPrice");

    const modalRemainingBalance =
        document.getElementById("modalRemainingBalance");

    const cancelPurchase =
        document.getElementById("cancelPurchase");

    const confirmPurchase =
        document.getElementById("confirmPurchase");


    // ------------------------------------------
    // 4. FORMAT MONEY
    // ------------------------------------------

    function formatMoney(value) {

        if (!Number.isFinite(value)) {
            value = 0;
        }

        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        }).format(value);
    }


    // ------------------------------------------
    // 5. FORMAT COMPACT MONEY
    // ------------------------------------------

    function formatCompactMoney(value) {

        if (!Number.isFinite(value)) {
            return "$0";
        }

        if (value >= 1e12) {
            return "$" + (value / 1e12).toFixed(2) + "T";
        }

        if (value >= 1e9) {
            return "$" + (value / 1e9).toFixed(2) + "B";
        }

        if (value >= 1e6) {
            return "$" + (value / 1e6).toFixed(2) + "M";
        }

        if (value >= 1e3) {
            return "$" + (value / 1e3).toFixed(1) + "K";
        }

        return "$" + Math.round(value);
    }


    // ------------------------------------------
    // 6. INITIAL BILLIONAIRE INFORMATION
    // ------------------------------------------

    document.title =
        `${billionaire.name} | Billionaire Breakout`;

    selectedName.textContent =
        billionaire.name;

    selectedRank.textContent =
        billionaire.rank;

    startingFortune.textContent =
        formatCompactMoney(startingBalance);

    remainingBalance.textContent =
        formatCompactMoney(balance);


    // ------------------------------------------
    // 7. AVATAR / INITIALS
    // ------------------------------------------

    function createInitials(name) {

        const words = name
            .trim()
            .split(/\s+/);

        if (words.length === 1) {
            return words[0].substring(0, 2).toUpperCase();
        }

        return (
            words[0].charAt(0) +
            words[words.length - 1].charAt(0)
        ).toUpperCase();
    }

    miniAvatar.textContent =
        createInitials(billionaire.name);


    // ------------------------------------------
    // 8. GAME STATISTICS
    // ------------------------------------------

    function calculateTotalSpent() {

        return inventory.reduce(
            (total, item) =>
                total + (item.price * item.quantity),
            0
        );
    }


    function calculateItemsOwned() {

        return inventory.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );
    }


    function updateStats() {

        const spent =
            calculateTotalSpent();

        const owned =
            calculateItemsOwned();

        remainingBalance.textContent =
            formatCompactMoney(balance);

        totalSpent.textContent =
            formatCompactMoney(spent);

        itemsOwned.textContent =
            owned;

        const percentage =
            startingBalance > 0
                ? (spent / startingBalance) * 100
                : 0;

        spentPercentage.textContent =
            percentage >= 99.99
                ? "100%"
                : percentage.toFixed(2) + "%";
    }


    // ------------------------------------------
    // 9. GET CURRENT FILTERED ITEMS
    // ------------------------------------------

    function getFilteredItems() {

        let items = [...shopItems];

        // SEARCH
        const search =
            shopSearch.value
                .trim()
                .toLowerCase();

        if (search) {

            items = items.filter(item => {

                const searchableText = [
                    item.name,
                    item.category,
                    item.subcategory,
                    item.description
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                return searchableText.includes(search);
            });
        }


        // CATEGORY
        const category =
            categoryFilter.value;

        if (category !== "all") {

            items = items.filter(
                item =>
                    item.category === category
            );
        }


        // SUBCATEGORY
        const subcategory =
            subcategoryFilter.value;

        if (subcategory !== "all") {

            items = items.filter(
                item =>
                    item.subcategory === subcategory
            );
        }


        // MIN PRICE
        const min =
            Number(minPrice.value);

        if (
            minPrice.value !== "" &&
            Number.isFinite(min)
        ) {

            items = items.filter(
                item =>
                    item.price >= min
            );
        }


        // MAX PRICE
        const max =
            Number(maxPrice.value);

        if (
            maxPrice.value !== "" &&
            Number.isFinite(max)
        ) {

            items = items.filter(
                item =>
                    item.price <= max
            );
        }


        // SORT
        switch (sortFilter.value) {

            case "price-low":

                items.sort(
                    (a, b) =>
                        a.price - b.price
                );

                break;


            case "price-high":

                items.sort(
                    (a, b) =>
                        b.price - a.price
                );

                break;


            case "name":

                items.sort(
                    (a, b) =>
                        a.name.localeCompare(
                            b.name
                        )
                );

                break;


            case "featured":

            default:

                // Keep original shop-data order.
                break;
        }

        return items;
    }


    // ------------------------------------------
    // 10. CATEGORY → SUBCATEGORY FILTER
    // ------------------------------------------

    function updateSubcategoryFilter() {

        const selectedCategory =
            categoryFilter.value;

        const subcategories =
            new Set();

        shopItems.forEach(item => {

            if (
                selectedCategory === "all" ||
                item.category === selectedCategory
            ) {
                if (item.subcategory) {
                    subcategories.add(
                        item.subcategory
                    );
                }
            }
        });


        const currentValue =
            subcategoryFilter.value;

        subcategoryFilter.innerHTML =
            `<option value="all">All Types</option>`;


        [...subcategories]
            .sort((a, b) =>
                a.localeCompare(b)
            )
            .forEach(subcategory => {

                const option =
                    document.createElement("option");

                option.value =
                    subcategory;

                option.textContent =
                    formatLabel(subcategory);

                subcategoryFilter.appendChild(
                    option
                );
            });


        if (
            [...subcategoryFilter.options]
                .some(option =>
                    option.value === currentValue
                )
        ) {

            subcategoryFilter.value =
                currentValue;

        } else {

            subcategoryFilter.value =
                "all";
        }
    }


    // ------------------------------------------
    // 11. LABEL FORMATTER
    // ------------------------------------------

    function formatLabel(value) {

        if (!value) {
            return "";
        }

        return value
            .replace(/-/g, " ")
            .replace(/\b\w/g, letter =>
                letter.toUpperCase()
            );
    }


    // ------------------------------------------
    // 12. CREATE SHOP CARD
    // ------------------------------------------

    function createShopCard(item) {

        const card =
            document.createElement("article");

        card.className =
            "shop-card";

        const canAfford =
            balance >= item.price;

        const imageHTML =
            item.image
                ? `
                    <div class="shop-card-image">
                        <img
                            src="${escapeHTML(item.image)}"
                            alt="${escapeHTML(item.name)}"
                            loading="lazy"
                            onerror="this.parentElement.classList.add('image-failed'); this.style.display='none';"
                        >
                    </div>
                `
                : `
                    <div class="shop-card-image no-image">
                        <div class="placeholder-icon">
                            ${getCategoryIcon(item.category)}
                        </div>
                    </div>
                `;


        card.innerHTML = `
            ${imageHTML}

            <div class="shop-card-content">

                <div class="shop-card-top">

                    <span class="shop-category">
                        ${escapeHTML(
                            formatLabel(item.category)
                        )}
                    </span>

                    <span class="shop-type">
                        ${escapeHTML(
                            formatLabel(item.subcategory)
                        )}
                    </span>

                </div>

                <h3>
                    ${escapeHTML(item.name)}
                </h3>

                <p class="shop-description">
                    ${escapeHTML(
                        item.description || ""
                    )}
                </p>

                <div class="shop-card-bottom">

                    <div class="shop-price">
                        ${formatCompactMoney(item.price)}
                    </div>

                    <button
                        type="button"
                        class="buy-button ${canAfford ? "" : "disabled"}"
                        data-item-id="${escapeHTML(item.id)}"
                        ${canAfford ? "" : "disabled"}
                    >
                        ${canAfford
                            ? "💰 BUY"
                            : "🔒 TOO EXPENSIVE"}
                    </button>

                </div>

            </div>
        `;


        const buyButton =
            card.querySelector(".buy-button");

        if (buyButton && canAfford) {

            buyButton.addEventListener(
                "click",
                () => openPurchaseModal(item)
            );
        }

        return card;
    }


    // ------------------------------------------
    // 13. CATEGORY ICONS
    // ------------------------------------------

    function getCategoryIcon(category) {

        const icons = {

            "real-estate": "🏙️",
            "vehicles": "🏎️",
            "aviation": "✈️",
            "yachts": "🛥️",
            "watches": "⌚",
            "jewellery": "💎",
            "art": "🎨",
            "technology": "💻",
            "businesses": "🏢",
            "travel": "🌍",
            "mega-projects": "🏗️"
        };

        return icons[category] || "💰";
    }


    // ------------------------------------------
    // 14. ESCAPE HTML
    // ------------------------------------------

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    // ------------------------------------------
    // 15. RENDER SHOP
    // ------------------------------------------

    function renderShop() {

        const items =
            getFilteredItems();

        shopGrid.innerHTML = "";

        shopResultCount.textContent =
            `${items.length} ${
                items.length === 1
                    ? "item"
                    : "items"
            }`;


        if (items.length === 0) {

            shopNoResults.style.display =
                "block";

            return;
        }


        shopNoResults.style.display =
            "none";


        const fragment =
            document.createDocumentFragment();

        items.forEach(item => {

            fragment.appendChild(
                createShopCard(item)
            );
        });

        shopGrid.appendChild(fragment);
    }


    // ------------------------------------------
    // 16. PURCHASE MODAL
    // ------------------------------------------

    function openPurchaseModal(item) {

        if (balance < item.price) {

            showToast(
                "🔒",
                "Purchase Blocked",
                "You don't have enough fictional fortune."
            );

            return;
        }

        pendingPurchase =
            item;

        modalItemName.textContent =
            item.name;

        modalItemPrice.textContent =
            formatMoney(item.price);

        modalRemainingBalance.textContent =
            formatMoney(
                balance - item.price
            );

        purchaseModal.classList.add(
            "active"
        );
    }


    function closePurchaseModalWindow() {

        pendingPurchase =
            null;

        purchaseModal.classList.remove(
            "active"
        );
    }


    // ------------------------------------------
    // 17. COMPLETE PURCHASE
    // ------------------------------------------

    function confirmPurchaseItem() {

        if (!pendingPurchase) {
            return;
        }

        const item =
            pendingPurchase;


        if (balance < item.price) {

            showToast(
                "🔒",
                "Not Enough Fortune",
                "This item is too expensive."
            );

            closePurchaseModalWindow();

            return;
        }


        // Deduct price
        balance -= item.price;


        // Check if already owned
        const existing =
            inventory.find(
                owned =>
                    owned.id === item.id
            );


        if (existing) {

            existing.quantity += 1;

        } else {

            inventory.push({
                id: item.id,
                name: item.name,
                category: item.category,
                subcategory: item.subcategory,
                price: item.price,
                image: item.image || "",
                quantity: 1
            });
        }


        updateStats();

        renderShop();

        renderInventory();

        closePurchaseModalWindow();


        showToast(
            "✓",
            "Purchase Complete",
            `${item.name} added to your collection.`
        );
    }


    // ------------------------------------------
    // 18. TOAST
    // ------------------------------------------

    let toastTimeout = null;

    function showToast(
        icon,
        title,
        message
    ) {

        purchaseToastIcon.textContent =
            icon;

        purchaseToastTitle.textContent =
            title;

        purchaseToastText.textContent =
            message;


        purchaseToast.classList.add(
            "show"
        );


        clearTimeout(toastTimeout);

        toastTimeout =
            setTimeout(() => {

                purchaseToast.classList.remove(
                    "show"
                );

            }, 3000);
    }


    // ------------------------------------------
    // 19. INVENTORY
    // ------------------------------------------

    function renderInventory() {

        inventoryList.innerHTML = "";


        if (inventory.length === 0) {

            inventoryList.innerHTML = `
                <div class="empty-inventory">

                    <div>🎒</div>

                    <h3>
                        NOTHING OWNED YET
                    </h3>

                    <p>
                        Start shopping to build
                        your collection.
                    </p>

                </div>
            `;

            return;
        }


        const fragment =
            document.createDocumentFragment();


        inventory.forEach(item => {

            const inventoryItem =
                document.createElement("div");

            inventoryItem.className =
                "inventory-item";


            inventoryItem.innerHTML = `

                <div class="inventory-item-icon">
                    ${getCategoryIcon(item.category)}
                </div>

                <div class="inventory-item-info">

                    <h3>
                        ${escapeHTML(item.name)}
                    </h3>

                    <span>
                        ${escapeHTML(
                            formatLabel(item.category)
                        )}
                    </span>

                </div>

                <div class="inventory-item-right">

                    <strong>
                        ${formatCompactMoney(
                            item.price
                        )}
                    </strong>

                    <small>
                        ×${item.quantity}
                    </small>

                </div>
            `;


            fragment.appendChild(
                inventoryItem
            );
        });


        inventoryList.appendChild(
            fragment
        );
    }


    // ------------------------------------------
    // 20. FILTER EVENTS
    // ------------------------------------------

    shopSearch.addEventListener(
        "input",
        renderShop
    );


    categoryFilter.addEventListener(
        "change",
        () => {

            updateSubcategoryFilter();

            renderShop();
        }
    );


    subcategoryFilter.addEventListener(
        "change",
        renderShop
    );


    minPrice.addEventListener(
        "input",
        renderShop
    );


    maxPrice.addEventListener(
        "input",
        renderShop
    );


    sortFilter.addEventListener(
        "change",
        renderShop
    );


    clearShopSearch.addEventListener(
        "click",
        () => {

            shopSearch.value = "";

            renderShop();

            shopSearch.focus();
        }
    );


    resetFilters.addEventListener(
        "click",
        () => {

            shopSearch.value = "";

            categoryFilter.value = "all";

            updateSubcategoryFilter();

            subcategoryFilter.value = "all";

            minPrice.value = "";

            maxPrice.value = "";

            sortFilter.value = "featured";

            renderShop();
        }
    );


    // ------------------------------------------
    // 21. INVENTORY EVENTS
    // ------------------------------------------

    inventoryButton.addEventListener(
        "click",
        () => {

            inventoryPanel.classList.add(
                "active"
            );
        }
    );


    closeInventory.addEventListener(
        "click",
        () => {

            inventoryPanel.classList.remove(
                "active"
            );
        }
    );


    // ------------------------------------------
    // 22. MODAL EVENTS
    // ------------------------------------------

    closePurchaseModal.addEventListener(
        "click",
        closePurchaseModalWindow
    );


    cancelPurchase.addEventListener(
        "click",
        closePurchaseModalWindow
    );


    confirmPurchase.addEventListener(
        "click",
        confirmPurchaseItem
    );


    // Click outside modal
    purchaseModal.addEventListener(
        "click",
        event => {

            if (
                event.target === purchaseModal
            ) {

                closePurchaseModalWindow();
            }
        }
    );


    // ESC key
    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closePurchaseModalWindow();

                inventoryPanel.classList.remove(
                    "active"
                );
            }
        }
    );


    // ------------------------------------------
    // 23. INITIALIZE
    // ------------------------------------------

    updateSubcategoryFilter();

    updateStats();

    renderShop();

    renderInventory();

});