// Ejemplo: Mostrar un mensaje cuando se hace clic en un botón
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Redirigiendo a la tienda...");
  });
});
