document.addEventListener("DOMContentLoaded", function () {
  let boton_encendido = document.getElementById("boton_encendido");
  let aguja_movimiento = document.querySelector(".aguja");

  boton_encendido.addEventListener("click", function () {
    // Cuando le hago click en el boton de encendido/apagado de pone y se quita con toggle la clase moviemiento.
    aguja_movimiento.classList.toggle("movimiento");
  });
});
