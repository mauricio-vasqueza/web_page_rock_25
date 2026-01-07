// validacionFormulario.js

function validar(e) {
  var nombre = document.getElementById("nombre");
  var telefono = document.getElementById("telefono");
  var email = document.getElementById("inputEmail4");
  var direccion = document.getElementById("inputAddress");
  var check = document.getElementById("gridCheck");

  // Limpiamos los errores
  document.getElementById("errorNombre").innerText = "";
  document.getElementById("errorTelefono").innerText = "";
  document.getElementById("errorEmail").innerText = "";
  document.getElementById("errorDireccion").innerText = "";
  document.getElementById("errorCheck").innerText = "";

  // Validaciones
  if (nombre.value === "") {
    e.preventDefault();
    document.getElementById("errorNombre").innerText = "Campo obligatorio";
    nombre.focus();
    return false;
  }

  if (email.value === "") {
    e.preventDefault();
    document.getElementById("errorEmail").innerText = "Campo obligatorio";
    email.focus();
    return false;
  }

  if (direccion.value === "") {
    e.preventDefault();
    document.getElementById("errorDireccion").innerText = "Campo obligatorio";
    direccion.focus();
    return false;
  }

  if (telefono.value === "") {
    e.preventDefault();
    document.getElementById("errorTelefono").innerText = "Campo obligatorio";
    telefono.focus();
    return false;
  }

  if (!check.checked) {
    e.preventDefault();
    document.getElementById("errorCheck").innerText = "Debe marcar la casilla";
    check.focus();
    return false;
  }

  return true;
}

// Asociamos la función al evento submit
document.getElementById("miform").addEventListener("submit", validar);
