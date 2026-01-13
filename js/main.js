const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

/* Scroll Effect */
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* Toggle Mobile Menu */
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

/* Smooth Scroll */
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        mobileMenu.classList.remove("show");

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {

    /* ================= Navbar ================= */

    const navbarr = document.getElementById("navbar");
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");


    if (navbarr) {
        window.addEventListener("scroll", () => {
            navbarr.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    // if (menuBtn && mobileMenu) {
    //     menuBtn.addEventListener("click", () => {
    //         mobileMenu.classList.toggle("show");
    //     });
    // }

    // document.querySelectorAll("a[href^='#']").forEach(link => {
    //     link.addEventListener("click", function (e) {
    //         e.preventDefault();
    //         mobileMenu?.classList.remove("show");

    //         const target = document.querySelector(this.getAttribute("href"));
    //         target?.scrollIntoView({ behavior: "smooth" });
    //     });
    // });

    /* ================= Counter ================= */
    const counter = document.querySelector('.followers-badge strong');

    if (counter) {
        let target = 50000;
        let count = 0;

        const updateCounter = () => {
            if (count < target) {
                count += 200;
                counter.innerText = `+${Math.floor(count / 1000)}K`;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = '+50K';
            }
        };

        updateCounter();
    }

    /* ================= Generate Slides ================= */
    const slidesContainer = document.getElementById("foodSlides");

    if (slidesContainer) {
        const slideTexts = [
            { title: "المذاق البدوي الأصيل", desc: "أفضل المشويات بوصفات موروثة" },
            { title: "جودة لا تُضاهى", desc: "مكونات طازجة يومياً" },
            { title: "خدمة تليق بذوقك", desc: "تجربة طعام لا تُنسى" }
        ];

        for (let i = 1; i <= 21; i++) {
            const text = slideTexts[(i - 1) % slideTexts.length];

            slidesContainer.innerHTML += `
          <div class="swiper-slide">
            <img src="images/sliders/${i}.jpg"  alt="food ${i}">
            <div class="slide-content">
              <h3>${text.title}</h3>
              <p>${text.desc}</p>
            </div>
          </div>
        `;
        }
    }

    /* ================= Swiper Init ================= */
    if (document.querySelector(".foodSwiper")) {
        new Swiper(".foodSwiper", {
            loop: true,
            speed: 900,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

});
