document.addEventListener("DOMContentLoaded", function () {
  let boton_encendido = document.getElementById("boton_encendido");
  let aguja_movimiento = document.getElementById("aguja");

  // Si quisieramos cogerla por su clase en vez de por su id ponedríamos let aguja_movimiento = document.querySelector(".aguja");

  boton_encendido.addEventListener("click", function () {
    // Cuando le hago click en el boton de encendido/apagado de pone y se quita con toggle la clase moviemiento.
    aguja_movimiento.classList.toggle("movimiento");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let gris = document.getElementById("gris");
  let oscuro = document.getElementById("oscuro");
  let mar = document.getElementById("mar");


  gris.addEventListener("click", function () {
    document.body.style.backgroundColor = "#dadada";
    document.body.style.removeProperty("background-image");
    document.body.style.removeProperty("background-size");
  });

  oscuro.addEventListener("click", function () {
    document.body.style.backgroundColor = '#4c4c4c';
    document.body.style.removeProperty("background-image");
    document.body.style.removeProperty("background-size");

    // Cogiendo el backgroundColor con una cookie
    // let color_oscuro = document.getElementById("oscuro").style.backgroundColor;
    // setCookie("cookie_oscuro", color_oscuro, 365);
    // let color_cookie_oscuro = getCookie("cookie_oscuro");
    // document.body.style.backgroundColor = 'color_cookie_oscuro';
  });

  mar.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('../img/smartphone/fondo_mar 1.webp')";
    document.body.style.backgroundSize = "cover";
  });

  cascada.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('../img/smartphone/fondo_cascada 1.webp')";
    document.body.style.backgroundSize = "cover";
  })

  cielo.addEventListener("click", function () {
    document.body.style.backgroundImage =
      "url('../img/smartphone/fondo_cielo 1.webp')";
    document.body.style.backgroundSize = "cover";
  });

  flores.addEventListener("click", function () {
    document.body.style.backgroundImage =
      "url('../img/smartphone/fondo_flores 1.webp')";
    document.body.style.backgroundSize = "cover";
  });


  


});


// Función para escribir una cookie (crea o actualiza una cookie)
// - c_name:	nombre de la cookie
// - value: 	valor de la cookie
// - exdays:	fecha de expiración (caducidad)
function setCookie(c_name, value, exdays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  let c_value =
    escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

// Función para leer una cookie (muestra el valor de esa cookie)
// - c_name:	nombre de la cookie
function getCookie(c_name) {
  let i, x, y;
  let ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");

    if (x == c_name) {
      return unescape(y);
    }
  }
}