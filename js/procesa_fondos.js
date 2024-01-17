let color_fondo = localStorage.getItem("fondo");

// Si el localStorage es X (se pondrá cuando cliquemos el fondo en ajustes) quitame la imagen de fondo que haya en ese momento si hay y ponme el comor o la imagen en questión que hayamos escogido.
if (color_fondo == "#4c4c4c") {
  document.body.style.removeProperty("background-image");
  document.body.style.backgroundColor = "#4c4c4c";

} else if (color_fondo == "#dadada") {
  document.body.style.removeProperty("background-image");
  document.body.style.backgroundColor == "#dadada";

} else if (color_fondo == "url('img/smartphone/fondo_mar 1.webp')") {
  document.body.style.removeProperty("background-image");
  document.body.style.backgroundImage = "url('img/smartphone/fondo_mar 1.webp')";
  document.body.style.backgroundSize = "cover";

} else if (color_fondo == "url('img/smartphone/fondo_cascada 1.webp')") {
  document.body.style.removeProperty("background-image");
  document.body.style.backgroundImage = "url('img/smartphone/fondo_cascada 1.webp')";
  document.body.style.backgroundSize = "cover";

} else if (color_fondo == "url('img/smartphone/fondo_cielo 1.webp')") {
  document.body.style.removeProperty("background-image");
  document.body.style.backgroundImage = "url('img/smartphone/fondo_cielo 1.webp')";
  document.body.style.backgroundSize = "cover";
  
} else if (color_fondo == "url('img/smartphone/fondo_flores 1.webp')") {
  document.body.style.removeProperty("background-image");
  document.body.style.backgroundImage = "url('img/smartphone/fondo_flores 1.webp')";
  document.body.style.backgroundSize = "cover";
}
