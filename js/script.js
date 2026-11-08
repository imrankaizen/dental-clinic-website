
// Select the menu button
const menuToggle = document.querySelector(".menu-toggle");

// Select navigation
const navbar = document.querySelector(".navbar");

// Open and close mobile navigation
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close navigation after clicking a link
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});
