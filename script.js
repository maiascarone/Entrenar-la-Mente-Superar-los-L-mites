// ========================================
// LA MENTE TAMBIÉN ENTRENA
// JavaScript - Psicología del Deporte
// ========================================

document.addEventListener("DOMContentLoaded", function () {

// ----------------------------------------
// MENSAJE DE BIENVENIDA
// ----------------------------------------

console.log("Bienvenido a La mente también entrena 🧠🏆");

// ----------------------------------------
// ANIMACIÓN DE LAS TARJETAS
// ----------------------------------------

const tarjetas = document.querySelectorAll(".tarjeta, .tecnica");

tarjetas.forEach(function (tarjeta, indice) {

    tarjeta.style.opacity = "0";
    tarjeta.style.transform = "translateY(30px)";

    setTimeout(function () {

        tarjeta.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        tarjeta.style.opacity = "1";
        tarjeta.style.transform = "translateY(0)";

    }, 150 * indice);
});


// ----------------------------------------
// EFECTO EN LOS BOTONES
// ----------------------------------------

const botones = document.querySelectorAll(
    ".boton, button, .volver"
);

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        boton.style.transform = "scale(0.95)";

        setTimeout(function () {
            boton.style.transform = "";
        }, 150);

    });

});


// ----------------------------------------
// BOTÓN "VOLVER ARRIBA"
// ----------------------------------------

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "↑";

botonArriba.id = "volverArriba";

botonArriba.style.position = "fixed";
botonArriba.style.bottom = "25px";
botonArriba.style.right = "25px";
botonArriba.style.width = "50px";
botonArriba.style.height = "50px";
botonArriba.style.border = "none";
botonArriba.style.borderRadius = "50%";
botonArriba.style.background = "#ffb703";
botonArriba.style.color = "#14213d";
botonArriba.style.fontSize = "24px";
botonArriba.style.fontWeight = "bold";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";
botonArriba.style.zIndex = "999";

document.body.appendChild(botonArriba);


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }

});


botonArriba.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ----------------------------------------
// FORMULARIO DE CONTACTO
// ----------------------------------------

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre =
            document.querySelector("#nombre").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const mensaje =
            document.querySelector("#mensaje").value.trim();


        // Comprobar que los campos estén completos

        if (nombre === "" || email === "" || mensaje === "") {

            alert(
                "⚠️ Por favor, completá todos los campos."
            );

            return;
        }


        // Comprobar el formato del email

        const formatoEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoEmail.test(email)) {

            alert(
                "📧 Por favor, ingresá un correo electrónico válido."
            );

            return;
        }


        // Mensaje de éxito

        alert(
            "¡Gracias, " + nombre +
            "! 🧠🏆\n\n" +
            "Tu mensaje fue preparado correctamente."
        );


        // Limpiar formulario

        formulario.reset();

    });

}


// ----------------------------------------
// EFECTO AL PASAR POR LOS TÍTULOS
// ----------------------------------------

const titulos = document.querySelectorAll(
    "h2, h3"
);

titulos.forEach(function (titulo) {

    titulo.addEventListener("mouseenter", function () {

        titulo.style.transition = "0.3s";
        titulo.style.transform = "scale(1.03)";

    });

    titulo.addEventListener("mouseleave", function () {

        titulo.style.transform = "scale(1)";

    });

});


});
