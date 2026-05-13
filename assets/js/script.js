const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const sections = document.querySelectorAll("section[id]");

const activeNavOnScroll = () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");

        if (item.getAttribute("href") === `#${currentSection}`) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeNavOnScroll);
window.addEventListener("load", activeNavOnScroll);
