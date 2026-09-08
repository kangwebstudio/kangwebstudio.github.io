// Smoothly reveal sections as they enter the screen
const sections = document.querySelectorAll(".section, .contact-section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// Add a subtle effect to the navigation when scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Prevent empty project links from jumping to the top
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        if (link.getAttribute("href") === "#") {
            event.preventDefault();
            alert("Live project link coming soon.");
        }
    });
});
