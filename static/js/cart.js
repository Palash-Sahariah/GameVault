/* =========================================================
   GAMEVAULT — YOUR CART
   SHARED BILLIONAIRE CART SYSTEM
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       BASIC SETUP
    ===================================================== */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const billionaireId =
        params.get("id");


    if (!billionaireId) {

        console.error(
            "GameVault Cart: billionaire ID missing."
        );

        return;
    }


    const CART_KEY =
        "gamevaultCart_" +
        billionaireId;


    const SPENDING_KEY =
        "gamevaultSpending_" +
        billionaireId;


    const COLLECTION_KEY =
        "gamevaultCollection_" +
        billionaireId;


    const PURCHASES_KEY =
        "gamevaultPurchases_" +
        billionaireId;



    /* =====================================================
       ELEMENT HELPER
    ===================================================== */

    function el(id) {

        return document.getElementById(id);

    }



    /* =====================================================
       BILLIONAIRE
    ===================================================== */

    let billionaire = null;


    function findBillionaire() {

        if (
            typeof billionaires === "undefined" ||
            !Array.isArray(billionaires)
        ) {

            console.error(
                "GameVault Cart: billionaire dataset missing."
            );

            return null;
        }


        return billionaires.find(
            person =>
                person.id === billionaireId
        );

    }


    billionaire =
        findBillionaire();



    if (!billionaire) {

        console.error(
            "GameVault Cart: billionaire not found:",
            billionaireId
        );

        return;
    }



    /* =====================================================
       MONEY
    ===================================================== */

    function money(value) {

        value =
            Number(value) || 0;


        if (value >= 1e12) {

            return "$" +
                (value / 1e12)
                    .toFixed(2)
                    .replace(/\.00$/, "") +
                "T";
        }


        if (value >= 1e9) {

            return "$" +
                (value / 1e9)
                    .toFixed(2)
                    .replace(/\.00$/, "") +
                "B";
        }


        if (value >= 1e6) {

            return "$" +
                (value / 1e6)
                    .toFixed(2)
                    .replace(/\.00$/, "") +
                "M";
        }


        if (value >= 1e3) {

            return "$" +
                (value / 1e3)
                    .toFixed(1)
                    .replace(/\.0$/, "") +
                "K";
        }


        return "$" +
            value.toLocaleString(
                "en-US",
                {
                    maximumFractionDigits: 0
                }
            );

    }



    function billionaireMoney(
        billions
    ) {

        return money(
            Number(billions) *
            1000000000
        );

    }



    /* =====================================================
       CART
    ===================================================== */

    function readCart() {

        try {

            const saved =
                localStorage.getItem(
                    CART_KEY
                );


            if (!saved) {
                return [];
            }


            const cart =
                JSON.parse(saved);


            if (!Array.isArray(cart)) {
                return [];
            }


            return cart
                .map(normalizeItem)
                .filter(Boolean);

        }

        catch (error) {

            console.error(
                "GameVault Cart read error:",
                error
            );

            return [];
        }

    }



    function saveCart(cart) {

        localStorage.setItem(
            CART_KEY,
            JSON.stringify(cart)
        );


        window.dispatchEvent(
            new Event(
                "gamevault-cart-updated"
            )
        );

    }



    function normalizeItem(item) {

        if (!item) {
            return null;
        }


        const price =
            Number(item.price) || 0;


        const quantity =
            Math.max(
                1,
                Number(item.quantity) || 1
            );


        return {

            id:
                String(
                    item.id ??
                    item.name ??
                    Date.now()
                ),

            name:
                item.name ||
                "Unnamed Item",

            price,

            quantity,

            category:
                item.category ||
                item.type ||
                "other",

            type:
                item.type ||
                item.category ||
                "other",

            description:
                item.description ||
                "",

            stock:
                item.stock ??
                null

        };

    }



    /* =====================================================
       CART TOTALS
    ===================================================== */

    function getUnits(cart) {

        return cart.reduce(
            (total, item) =>
                total +
                Number(item.quantity || 0),
            0
        );

    }



    function getTotal(cart) {

        return cart.reduce(
            (total, item) =>
                total +
                (
                    Number(item.price) *
                    Number(item.quantity)
                ),
            0
        );

    }



    /* =====================================================
       FORTUNE
    ===================================================== */

    const originalFortune =
        Number(
            billionaire.netWorth
        ) *
        1000000000;


    let alreadySpent =
        Number(
            localStorage.getItem(
                SPENDING_KEY
            )
        ) || 0;


    alreadySpent =
        Math.max(
            0,
            Math.min(
                alreadySpent,
                originalFortune
            )
        );


    function availableFortune() {

        return Math.max(
            0,
            originalFortune -
            alreadySpent
        );

    }



    /* =====================================================
       INITIAL PROFILE
    ===================================================== */

    function getInitials(name) {

        return String(name)
            .replace(
                "& family",
                ""
            )
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map(
                word =>
                    word
                        .charAt(0)
                        .toUpperCase()
            )
            .join("") ||
            "?";

    }



    function setupProfile() {

        const initials =
            getInitials(
                billionaire.name
            );


        if (el("billionaireAvatar")) {

            el(
                "billionaireAvatar"
            ).textContent =
                initials;

        }


        if (el("summaryAvatar")) {

            el(
                "summaryAvatar"
            ).textContent =
                initials;

        }


        if (el("billionaireName")) {

            el(
                "billionaireName"
            ).textContent =
                billionaire.name;

        }


        if (
            el("summaryBillionaireName")
        ) {

            el(
                "summaryBillionaireName"
            ).textContent =
                billionaire.name;

        }


        if (el("billionaireRank")) {

            el(
                "billionaireRank"
            ).textContent =
                "Rank #" +
                billionaire.rank;

        }


        if (
            el("summaryBillionaireRank")
        ) {

            el(
                "summaryBillionaireRank"
            ).textContent =
                "Rank #" +
                billionaire.rank;

        }


        if (el("startingFortune")) {

            el(
                "startingFortune"
            ).textContent =
                billionaireMoney(
                    billionaire.netWorth
                );

        }

    }



    /* =====================================================
       CATEGORY NAME
    ===================================================== */

    function categoryName(
        category
    ) {

        const names = {

            "vault":
                "Vault",

            "automotive":
                "Automotive",

            "real-estate":
                "Real Estate",

            "yachts":
                "Yachts",

            "watches":
                "Watches",

            "aviation":
                "Aviation",

            "jewellery":
                "Jewellery",

            "art":
                "Art",

            "empire":
                "Empire",

            "technology":
                "Technology",

            "world":
                "World",

            "mega-projects":
                "Mega Projects"

        };


        const key =
            String(category)
                .toLowerCase()
                .trim();


        return (
            names[key] ||
            category ||
            "Other"
        );

    }



    /* =====================================================
       CATEGORY SUMMARY
    ===================================================== */

    function renderCategorySummary(
        cart
    ) {

        const container =
            el("categorySummary");


        if (!container) {
            return;
        }


        container.innerHTML = "";


        const categories = {};


        cart.forEach(
            item => {

                const name =
                    categoryName(
                        item.category
                    );


                categories[name] =
                    (
                        categories[name] ||
                        0
                    ) +
                    Number(
                        item.quantity
                    );

            }
        );


        Object.entries(categories)
            .forEach(
                ([name, count]) => {

                    const pill =
                        document.createElement(
                            "span"
                        );


                    pill.className =
                        "category-pill";


                    pill.textContent =
                        name +
                        " · " +
                        count;


                    container.appendChild(
                        pill
                    );

                }
            );

    }



    /* =====================================================
       RENDER CART
    ===================================================== */

    function renderCart() {

        const cart =
            readCart();


        const container =
            el("cartItems");


        const empty =
            el("emptyCart");


        const total =
            getTotal(cart);


        const units =
            getUnits(cart);


        if (!container) {
            return;
        }


        container.innerHTML = "";


        renderCategorySummary(
            cart
        );


        if (el("headerCartCount")) {

            el(
                "headerCartCount"
            ).textContent =
                units;

        }


        if (el("summaryItemCount")) {

            el(
                "summaryItemCount"
            ).textContent =
                units;

        }


        if (el("cartFortuneValue")) {

            el(
                "cartFortuneValue"
            ).textContent =
                money(total);

        }


        if (el("subtotal")) {

            el(
                "subtotal"
            ).textContent =
                money(total);

        }


        if (el("cartTotal")) {

            el(
                "cartTotal"
            ).textContent =
                money(total);

        }


        if (
            el("cartSelectionText")
        ) {

            el(
                "cartSelectionText"
            ).textContent =
                units +
                (
                    units === 1
                        ? " item"
                        : " items"
                );

        }


        if (cart.length === 0) {

            if (empty) {

                empty.hidden = false;

            }


            updateFortuneUI(
                0
            );

            updatePurchaseButton(
                0
            );

            return;
        }


        if (empty) {

            empty.hidden = true;

        }


        cart.forEach(
            (item, index) => {

                container.appendChild(
                    createCartItem(
                        item,
                        index
                    )
                );

            }
        );


        updateFortuneUI(
            total
        );


        updatePurchaseButton(
            total
        );

    }



    /* =====================================================
       CREATE CART ITEM
    ===================================================== */

    function createCartItem(
        item,
        index
    ) {

        const article =
            document.createElement(
                "article"
            );


        article.className =
            "cart-item";


        const category =
            categoryName(
                item.category
            );


        const itemTotal =
            Number(item.price) *
            Number(item.quantity);


        let icon = "◆";


        const type =
            String(
                item.category ||
                item.type ||
                ""
            ).toLowerCase();


        if (
            type.includes("automotive")
        ) {
            icon = "🚘";
        }

        else if (
            type.includes("watch")
        ) {
            icon = "⌚";
        }

        else if (
            type.includes("yacht")
        ) {
            icon = "🛥";
        }

        else if (
            type.includes("real")
        ) {
            icon = "🏙";
        }

        else if (
            type.includes("vault")
        ) {
            icon = "💎";
        }

        else if (
            type.includes("technology")
        ) {
            icon = "💻";
        }


        article.innerHTML = `

            <div class="cart-item-image">
                ${icon}
            </div>


            <div class="cart-item-main">

                <div class="cart-item-category">
                    ${escapeHTML(category)}
                </div>


                <div class="cart-item-name">
                    ${escapeHTML(item.name)}
                </div>


                <div class="cart-item-description">
                    ${escapeHTML(
                        item.description ||
                        "GameVault collection item."
                    )}
                </div>


                <div class="cart-item-bottom">

                    <div class="unit-price">

                        ${money(item.price)}
                        each

                    </div>


                    <div class="item-controls">

                        <div class="quantity-controls">

                            <button
                                type="button"
                                class="minus-btn"
                                data-index="${index}"
                                ${
                                    item.quantity <= 1
                                        ? "disabled"
                                        : ""
                                }
                            >
                                −
                            </button>


                            <span
                                class="quantity-number"
                            >
                                ${item.quantity}
                            </span>


                            <button
                                type="button"
                                class="plus-btn"
                                data-index="${index}"
                            >
                                +
                            </button>

                        </div>


                        <strong class="item-total">
                            ${money(itemTotal)}
                        </strong>


                        <button
                            type="button"
                            class="remove-btn"
                            data-index="${index}"
                        >
                            REMOVE
                        </button>

                    </div>

                </div>

            </div>

        `;


        return article;

    }



    /* =====================================================
       HTML ESCAPE
    ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }



    /* =====================================================
       QUANTITY
    ===================================================== */

    function changeQuantity(
        index,
        amount
    ) {

        const cart =
            readCart();


        if (!cart[index]) {
            return;
        }


        cart[index].quantity =
            Math.max(
                1,
                Number(
                    cart[index].quantity
                ) +
                amount
            );


        saveCart(cart);

        renderCart();

        showToast(
            "Cart updated."
        );

    }



    /* =====================================================
       REMOVE
    ===================================================== */

    let pendingRemoveIndex =
        null;


    function openRemoveModal(
        index
    ) {

        const cart =
            readCart();


        if (!cart[index]) {
            return;
        }


        pendingRemoveIndex =
            index;


        const message =
            el("removeMessage");


        if (message) {

            message.textContent =
                '"' +
                cart[index].name +
                '" will be removed from your cart.';

        }


        const overlay =
            el("removeOverlay");


        if (overlay) {

            overlay.hidden =
                false;

        }

    }



    function closeRemoveModal() {

        pendingRemoveIndex =
            null;


        const overlay =
            el("removeOverlay");


        if (overlay) {

            overlay.hidden =
                true;

        }

    }



    function confirmRemove() {

        if (
            pendingRemoveIndex === null
        ) {
            return;
        }


        const cart =
            readCart();


        const removed =
            cart.splice(
                pendingRemoveIndex,
                1
            );


        saveCart(cart);


        closeRemoveModal();

        renderCart();


        if (removed[0]) {

            showToast(
                removed[0].name +
                " removed."
            );

        }

    }



    /* =====================================================
       CLEAR CART
    ===================================================== */

    function openClearModal() {

        const cart =
            readCart();


        if (
            cart.length === 0
        ) {

            showToast(
                "Your cart is already empty."
            );

            return;
        }


        const overlay =
            el("clearOverlay");


        if (overlay) {

            overlay.hidden =
                false;

        }

    }



    function closeClearModal() {

        const overlay =
            el("clearOverlay");


        if (overlay) {

            overlay.hidden =
                true;

        }

    }



    function confirmClear() {

        saveCart([]);


        closeClearModal();

        renderCart();


        showToast(
            "Cart cleared."
        );

    }



    /* =====================================================
       FORTUNE UI
    ===================================================== */

    function updateFortuneUI(
        cartTotal
    ) {

        const afterPurchase =
            Math.max(
                0,
                availableFortune() -
                cartTotal
            );


        const percentage =
            originalFortune > 0
                ? (
                    (
                        alreadySpent +
                        cartTotal
                    ) /
                    originalFortune
                ) *
                100
                : 0;


        const safePercentage =
            Math.min(
                100,
                Math.max(
                    0,
                    percentage
                )
            );


        if (el("fortuneRemaining")) {

            el(
                "fortuneRemaining"
            ).textContent =
                money(
                    afterPurchase
                );

        }


        if (el("summaryRemaining")) {

            el(
                "summaryRemaining"
            ).textContent =
                money(
                    afterPurchase
                );

        }


        if (el("fortunePercentage")) {

            el(
                "fortunePercentage"
            ).textContent =
                safePercentage.toFixed(
                    2
                ) +
                "%";

        }


        if (
            el("fortuneProgressBar")
        ) {

            el(
                "fortuneProgressBar"
            ).style.width =
                safePercentage +
                "%";

        }


        if (
            el("fortuneProgressText")
        ) {

            if (
                cartTotal >
                availableFortune()
            ) {

                el(
                    "fortuneProgressText"
                ).textContent =
                    "Your cart exceeds the available fortune.";

            }

            else {

                el(
                    "fortuneProgressText"
                ).textContent =
                    money(
                        afterPurchase
                    ) +
                    " remaining after this purchase.";

            }

        }


        const warning =
            el("fortuneWarning");


        if (warning) {

            warning.hidden =
                cartTotal <=
                availableFortune();

        }

    }



    /* =====================================================
       PURCHASE BUTTON
    ===================================================== */

    function updatePurchaseButton(
        total
    ) {

        const button =
            el("checkoutButton");


        if (!button) {
            return;
        }


        const canBuy =
            total > 0 &&
            total <=
            availableFortune();


        button.disabled =
            !canBuy;


        if (total === 0) {

            button.querySelector(
                "span"
            ).textContent =
                "YOUR CART IS EMPTY";

        }

        else if (
            total >
            availableFortune()
        ) {

            button.querySelector(
                "span"
            ).textContent =
                "FORTUNE TOO LOW";

        }

        else {

            button.querySelector(
                "span"
            ).textContent =
                "COMPLETE PURCHASE";

        }

    }



    /* =====================================================
       COMPLETE PURCHASE
    ===================================================== */

    function completePurchase() {

        const cart =
            readCart();


        if (
            cart.length === 0
        ) {

            showToast(
                "Your cart is empty."
            );

            return;
        }


        const total =
            getTotal(cart);


        const available =
            availableFortune();


        if (
            total >
            available
        ) {

            showToast(
                "Not enough fortune."
            );

            return;
        }


        /*
         * Update spending.
         */

        alreadySpent +=
            total;


        alreadySpent =
            Math.min(
                alreadySpent,
                originalFortune
            );


        localStorage.setItem(
            SPENDING_KEY,
            String(
                alreadySpent
            )
        );


        /*
         * Collection.
         */

        let collection = [];


        try {

            collection =
                JSON.parse(
                    localStorage.getItem(
                        COLLECTION_KEY
                    )
                ) || [];

        }

        catch {

            collection = [];

        }


        cart.forEach(
            item => {

                collection.push({
                    ...item,
                    purchasedAt:
                        new Date()
                            .toISOString()
                });

            }
        );


        localStorage.setItem(
            COLLECTION_KEY,
            JSON.stringify(
                collection
            )
        );


        /*
         * Purchase history.
         */

        let purchases = [];


        try {

            purchases =
                JSON.parse(
                    localStorage.getItem(
                        PURCHASES_KEY
                    )
                ) || [];

        }

        catch {

            purchases = [];

        }


        purchases.push({

            id:
                "purchase-" +
                Date.now(),

            billionaireId,

            total,

            items:
                cart.map(
                    item => ({
                        ...item
                    })
                ),

            purchasedAt:
                new Date()
                    .toISOString()

        });


        localStorage.setItem(
            PURCHASES_KEY,
            JSON.stringify(
                purchases
            )
        );


        /*
         * Empty cart.
         */

        saveCart([]);


        showToast(
            "Purchase completed! Collection updated."
        );


        renderCart();


        /*
         * Let other GameVault pages know.
         */

        window.dispatchEvent(
            new Event(
                "gamevault-purchase-completed"
            )
        );

    }



    /* =====================================================
       NAVIGATION
    ===================================================== */

    function goBackToVault() {

        window.location.href =
            "/games/billionaire/vault?id=" +
            encodeURIComponent(
                billionaireId
            );

    }



    function continueShopping() {

        window.location.href =
            "/games/billionaire/play?id=" +
            encodeURIComponent(
                billionaireId
            );

    }



    /* =====================================================
       EVENTS
    ===================================================== */

    function bindEvents() {

        document.addEventListener(
            "click",
            function (event) {

                const minus =
                    event.target.closest(
                        ".minus-btn"
                    );


                if (minus) {

                    changeQuantity(
                        Number(
                            minus.dataset.index
                        ),
                        -1
                    );

                    return;
                }


                const plus =
                    event.target.closest(
                        ".plus-btn"
                    );


                if (plus) {

                    changeQuantity(
                        Number(
                            plus.dataset.index
                        ),
                        1
                    );

                    return;
                }


                const remove =
                    event.target.closest(
                        ".remove-btn"
                    );


                if (remove) {

                    openRemoveModal(
                        Number(
                            remove.dataset.index
                        )
                    );

                }

            }
        );


        const removeConfirm =
            el(
                "confirmRemoveButton"
            );


        if (removeConfirm) {

            removeConfirm.addEventListener(
                "click",
                confirmRemove
            );

        }


        const removeCancel =
            el(
                "cancelRemoveButton"
            );


        if (removeCancel) {

            removeCancel.addEventListener(
                "click",
                closeRemoveModal
            );

        }


        const clearButton =
            el(
                "clearCartButton"
            );


        if (clearButton) {

            clearButton.addEventListener(
                "click",
                openClearModal
            );

        }


        const clearConfirm =
            el(
                "confirmClearButton"
            );


        if (clearConfirm) {

            clearConfirm.addEventListener(
                "click",
                confirmClear
            );

        }


        const clearCancel =
            el(
                "cancelClearButton"
            );


        if (clearCancel) {

            clearCancel.addEventListener(
                "click",
                closeClearModal
            );

        }


        const purchase =
            el(
                "checkoutButton"
            );


        if (purchase) {

            purchase.addEventListener(
                "click",
                completePurchase
            );

        }


        const continueButton =
            el(
                "continueShoppingButton"
            );


        if (continueButton) {

            continueButton.addEventListener(
                "click",
                continueShopping
            );

        }


        const summaryContinue =
            el(
                "summaryContinueButton"
            );


        if (summaryContinue) {

            summaryContinue.addEventListener(
                "click",
                continueShopping
            );

        }


        const back =
            el(
                "backButton"
            );


        if (back) {

            back.addEventListener(
                "click",
                goBackToVault
            );

        }


        const emptyShop =
            el(
                "emptyCartShopButton"
            );


        if (emptyShop) {

            emptyShop.addEventListener(
                "click",
                continueShopping
            );

        }


        /*
         * Close modals by clicking outside.
         */

        const removeOverlay =
            el(
                "removeOverlay"
            );


        if (removeOverlay) {

            removeOverlay.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        removeOverlay
                    ) {

                        closeRemoveModal();

                    }

                }
            );

        }


        const clearOverlay =
            el(
                "clearOverlay"
            );


        if (clearOverlay) {

            clearOverlay.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        clearOverlay
                    ) {

                        closeClearModal();

                    }

                }
            );

        }


        /*
         * Escape closes modal.
         */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeRemoveModal();

                    closeClearModal();

                }

            }
        );


        /*
         * If another GameVault page
         * changes the cart.
         */

        window.addEventListener(
            "storage",
            function (event) {

                if (
                    event.key ===
                    CART_KEY
                ) {

                    renderCart();

                }

            }
        );


        window.addEventListener(
            "gamevault-cart-updated",
            renderCart
        );

    }



    /* =====================================================
       TOAST
    ===================================================== */

    let toastTimer = null;


    function showToast(
        message
    ) {

        const toast =
            el("cartToast");


        const text =
            el(
                "cartToastMessage"
            );


        if (!toast || !text) {
            return;
        }


        text.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );

                },
                2400
            );

    }



    /* =====================================================
       START
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            setupProfile();

            bindEvents();

            renderCart();

        }
    );


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.GameVaultCart = {

        getCart:
            readCart,

        saveCart,

        render:
            renderCart,

        getTotal:
            function () {

                return getTotal(
                    readCart()
                );

            }

    };


})();