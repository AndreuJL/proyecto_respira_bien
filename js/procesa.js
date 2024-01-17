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

  // Si se pulsa en el icono de fondo se cambia el color de fondo y se elimina el background-image y el background-size anterior si hay.
  // Finalmente guardamos el color en un localStorage para llamarlo cuando se abra otra página html.
  gris.addEventListener("click", function () {
    document.body.style.backgroundColor = "#dadada";
    document.body.style.removeProperty("background-image");
    document.body.style.removeProperty("background-size");

    localStorage.setItem("fondo", "#dadada");
  });

  oscuro.addEventListener("click", function () {
    document.body.style.backgroundColor = "#4c4c4c";
    document.body.style.removeProperty("background-image");
    document.body.style.removeProperty("background-size");

    localStorage.setItem("fondo", "#4c4c4c");
  });

  // Si se pulsa en el icono de fondo se pone una imagen de fondo y se elimina el background-image y el background-size anterior si hay.
  // Finalmente guardamos la imagen de fondo en un localStorage para llamarlo cuando se abra otra página html.
  mar.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('img/smartphone/fondo_mar 1.webp')";
    document.body.style.backgroundSize = "cover";

    localStorage.setItem("fondo", "url('img/smartphone/fondo_mar 1.webp')");
  });

  cascada.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('img/smartphone/fondo_cascada 1.webp')";
    document.body.style.backgroundSize = "cover";

    localStorage.setItem("fondo", "url('img/smartphone/fondo_cascada 1.webp')");
  });

  cielo.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('img/smartphone/fondo_cielo 1.webp')";
    document.body.style.backgroundSize = "cover";

    localStorage.setItem("fondo", "url('img/smartphone/fondo_cielo 1.webp')");
  });

  flores.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('img/smartphone/fondo_flores 1.webp')";
    document.body.style.backgroundSize = "cover";

    localStorage.setItem("fondo", "url('img/smartphone/fondo_flores 1.webp')");
  });
});
