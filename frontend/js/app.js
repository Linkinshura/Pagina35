const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

const revealElements = document.querySelectorAll(
    ".stat-card, .specialty-card, .news-card, .presentation-text, .presentation-image"
);

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

const newsCards = document.querySelectorAll(".news-card");

newsCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("hovered");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("hovered");

    });

});

const specialtyCards = document.querySelectorAll(".specialty-card");

specialtyCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 15) * -1;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

});

const heroTitle = document.querySelector(".hero h2");

const heroText = `
Escuela Técnica N°35
Ing. Eduardo Latzina
`;

let index = 0;

heroTitle.textContent = "";

function typeWriter() {

    if (index < heroText.length) {

        heroTitle.textContent += heroText.charAt(index);

        index++;

        setTimeout(typeWriter, 50);

    }

}

typeWriter();

const stats = document.querySelectorAll(".stat-card h3");

stats.forEach((stat) => {

    const target = stat.innerText;

    const number = parseInt(target);

    let count = 0;

    function updateCounter() {

        if (count < number) {

            count += Math.ceil(number / 40);

            if (count > number) {

                count = number;

            }

            if (target.includes("+")) {

                stat.innerText = count + "+";

            } else {

                stat.innerText = count;

            }

            requestAnimationFrame(updateCounter);

        }

    }

    updateCounter();

});

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .card-btn, .campus-btn"
);

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.classList.add("button-hover");

    });

    button.addEventListener("mouseleave", () => {

        button.classList.remove("button-hover");

    });

});