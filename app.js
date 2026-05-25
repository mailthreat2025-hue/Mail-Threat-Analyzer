document.addEventListener("DOMContentLoaded", () => {
    const yearTarget = document.querySelector("[data-current-year]");
    if (yearTarget) {
        yearTarget.textContent = String(new Date().getFullYear());
    }

    const cards = Array.from(document.querySelectorAll(".floating-card"));
    cards.forEach((card, index) => {
        card.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(-8px)" },
                { transform: "translateY(0px)" },
            ],
            {
                duration: 3800 + index * 600,
                iterations: Infinity,
                easing: "ease-in-out",
            }
        );
    });
});
