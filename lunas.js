document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       BOTÓN EXPLORAR
    ========================= */

    const boton = document.querySelector(".scroll-button");

    if (boton) {

        boton.addEventListener("click", (e) => {

            e.preventDefault();

            const destino = document.querySelector("#introduccion");

            if (destino) {

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    /* =========================
       ANIMACIÓN AL HACER SCROLL
    ========================= */

    const elementos = document.querySelectorAll(
        ".text-box, .image-box, .nav-card"
    );

    const observer = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elementos.forEach((elemento) => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(40px)";

        elemento.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(elemento);

    });


    /* =========================
       EFECTO PARALLAX DE LA LUNA
    ========================= */

    const luna = document.querySelector(".moon-hero");

    if (luna) {

        window.addEventListener("scroll", () => {

            const movimiento =
                window.scrollY * 0.15;

            luna.style.backgroundPosition =
                `center ${movimiento}px`;

        });

    }

});