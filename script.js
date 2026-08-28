
/* =================================
   ANIMACIONES AL HACER SCROLL
================================= */

const elements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    observer.observe(element);

});


/* =================================
   EFECTO SUAVE DEL VIDEO
================================= */

const heroVideo = document.querySelector(".hero-video");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (heroVideo) {

        heroVideo.style.transform =
            `translateY(${scrollPosition * 0.15}px)`;

    }

});


/* =================================
   BOTÓN VOLVER ARRIBA
================================= */

const backTop = document.querySelector(".back-top");

if (backTop) {

    backTop.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

