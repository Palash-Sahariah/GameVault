// ======================================
// GameVault Homepage
// ======================================


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ======================================
// Simple mobile menu
// ======================================

const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {

    alert(
        "GameVault menu\n\n" +
        "Home\n" +
        "Games\n" +
        "Coming Soon\n\n" +
        "Full mobile menu coming soon."
    );

});


// ======================================
// Card reveal animation
// ======================================

const cards = document.querySelectorAll(".game-card");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";

    observer.observe(card);

});