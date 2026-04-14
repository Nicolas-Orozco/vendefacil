// Cuando el usuario hace clic en "Actualizar catálogo"...
document.querySelector(".boton-verde").addEventListener("click", function() {
  
  // Math.random() genera un número entre 0 y 1
  // Math.floor() lo redondea hacia abajo
  // * 50 significa que el resultado será entre 0 y 50
  document.getElementById("num-productos").textContent = Math.floor(Math.random() * 50);
  document.getElementById("num-pedidos").textContent = Math.floor(Math.random() * 20);
  document.getElementById("num-envios").textContent = Math.floor(Math.random() * 10);
  
  document.getElementById("mensaje").textContent = "✅ Catálogo sincronizado con WhatsApp e Instagram";
});

// Cuando el usuario hace clic en "Configurar automatizaciones"...
document.querySelector(".boton-naranja").addEventListener("click", function() {
  
  // .style nos permite cambiar cualquier propiedad CSS desde JS
  document.body.style.backgroundColor = "#1a0a2e";
  
  document.getElementById("mensaje").textContent = "⚙️ Modo automatización activado";
});