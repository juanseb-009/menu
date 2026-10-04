// ========================================
// MENÚ RESPONSIVE
// ========================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ========================================
// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// ========================================

const links =
    document.querySelectorAll(".nav-links a");


links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});