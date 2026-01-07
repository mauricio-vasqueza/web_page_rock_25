/* ===== FUNCIONES COOKIES ===== */
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function mostrarBanner() {
  const banner = document.querySelector('.cookies-banner');
  if (!getCookie('aceptar_cookie')) {
    banner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }
}

function aceptarCookies() {
  setCookie('aceptar_cookie', '1', 365); // Cookie válida 1 año
  document.querySelector('.cookies-banner').style.display = 'none';
}

// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', function() {
  mostrarBanner();

  const boton = document.querySelector('.cookies-boton');
  if (boton) {
    boton.addEventListener('click', aceptarCookies);
  }
});
