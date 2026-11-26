const botonTema = document.getElementById("tema-btn");

if (botonTema) {
    botonTema.addEventListener("click", function() {
        document.body.classList.toggle("tema-oscuro");

        if (document.body.classList.contains("tema-oscuro")) {
            botonTema.textContent = "☀️ Modo claro";
        } else {
            botonTema.textContent = "🌙 Modo oscuro";
        }
    });
}