document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".confirmar-btn");

    botones.forEach(boton => {
        boton.addEventListener("click", function() {
            this.textContent = "Confirmado";
            this.style.backgroundColor = "#218838";
            this.disabled = true;
            alert("Cita confirmada con éxito.");
        });
    });
});