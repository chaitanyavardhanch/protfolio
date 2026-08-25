const words = [
    "Web Developer",
    "Python Learner",
    "AI Enthusiast",
    "Creative Designer"
];

let wordIndex = 0;
let letterIndex = 0;

const typingElement = document.getElementById("typing");

const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function typeWord() {

    if (letterIndex < words[wordIndex].length) {

        typingElement.textContent +=
            words[wordIndex].charAt(letterIndex);

        letterIndex++;

        setTimeout(typeWord, 100);

    } else {

        setTimeout(deleteWord, 1500);

    }
}


function deleteWord() {

    if (letterIndex > 0) {

        typingElement.textContent =
            words[wordIndex].substring(
                0,
                letterIndex - 1
            );

        letterIndex--;

        setTimeout(deleteWord, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeWord, 500);

    }

}


if (prefersReducedMotion) {
    typingElement.textContent = words[0];
} else {
    typeWord();
}
// Skill Progress Animation

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const progressBar = entry.target;

                progressBar.style.width =
                    progressBar.getAttribute("data-width");

            }

        });

    },
    {
        threshold: 0.5
    }
);


skillBars.forEach((bar) => {

    skillObserver.observe(bar);

});
// ==============================
// Project Filtering
// ==============================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active class

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        });


        // Add active class

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");


        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach((card) => {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                filter === category
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});
// ==============================
// Current Year
// ==============================

const currentYear =
    document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent =
        new Date().getFullYear();
}


// ==============================
// Dark Mode
// ==============================

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    themeToggle.querySelector("i");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeToggle.setAttribute("aria-pressed", "true");
    themeToggle.setAttribute("aria-label", "Switch to light mode");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeToggle.setAttribute("aria-pressed", "true");
        themeToggle.setAttribute("aria-label", "Switch to light mode");

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeToggle.setAttribute("aria-pressed", "false");
        themeToggle.setAttribute("aria-label", "Switch to dark mode");

    }

});


// ==============================
// Mobile Menu
// ==============================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

const menuIcon =
    menuToggle.querySelector("i");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");


    if (navLinks.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    }

});


// Close menu after clicking a link

document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

        });

    });


// ==============================
// Scroll Reveal
// ==============================

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-card, .about-content, .skill-card, .project-card, .experience-card, .contact-simple"
    );


revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});
// ==============================
// Page Loader
// ==============================

const pageLoader =
    document.getElementById("pageLoader");

window.addEventListener("load", () => {

    setTimeout(() => {
        if (pageLoader) {
            pageLoader.classList.add("hide");
        }
    }, 400);

});


// ==============================
// Navbar Shadow
// ==============================

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}, { passive: true });


// ==============================
// Scroll To Top
// ==============================

const scrollTopBtn =
    document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

}, { passive: true });


scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
    });

});


// ==============================
// Active Navbar Highlight
// ==============================

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


function highlightNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active-link");

        }

    });

}


window.addEventListener(
    "scroll",
    highlightNavigation,
    { passive: true }
);

highlightNavigation();
// ==============================
// Smooth Navbar Scroll
// ==============================

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute("href");

                if (targetId === "#") {
                    event.preventDefault();
                    return;
                }

                if (!document.querySelector(targetId)) {
                    return;
                }

                event.preventDefault();

                const target =
                    document.querySelector(targetId);

                target.scrollIntoView({
                    behavior: prefersReducedMotion ? "auto" : "smooth",
                    block: "start"
                });

            }
        );

    });

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        navLinks.classList.contains("active")
    ) {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.focus();
    }
});

window.addEventListener("resize", () => {
    if (
        window.innerWidth > 850 &&
        navLinks.classList.contains("active")
    ) {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});
