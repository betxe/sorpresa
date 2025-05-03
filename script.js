function confirmarFecha() {
    const fecha = document.getElementById("fecha").value;
    if (!fecha) {
      alert("Por favor selecciona una fecha ❤️");
      return;
    }
  
    // Guardamos la fecha en localStorage para usarla en vale.html
    localStorage.setItem("fechaSeleccionada", fecha);
  
    // Redirigimos a la página del vale
    window.location.href = "vale.html";
  }
  