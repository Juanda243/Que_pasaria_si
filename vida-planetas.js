document.addEventListener("DOMContentLoaded",()=>{

    /* BOTÓN EXPLORAR */

    const boton=document.querySelector(".scroll-button");

    boton?.addEventListener("click",e=>{

        e.preventDefault();

        document.querySelector("#introduccion")
        ?.scrollIntoView({
            behavior:"smooth"
        });

    });


    /* ANIMACIÓN AL BAJAR */

    const elementos=document.querySelectorAll(
        ".content-box,.nav-card"
    );

    const observer=new IntersectionObserver(
        entradas=>{

            entradas.forEach(entrada=>{

                if(entrada.isIntersecting){

                    entrada.target.style.opacity="1";
                    entrada.target.style.transform=
                        "translateY(0)";

                }

            });

        },
        {threshold:.15}
    );


    elementos.forEach(elemento=>{

        elemento.style.opacity="0";
        elemento.style.transform="translateY(30px)";
        elemento.style.transition=".7s";

        observer.observe(elemento);

    });

});