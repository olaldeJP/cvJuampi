document.addEventListener("DOMContentLoaded", function () {
  // Selecciona la imagen por su id
  const avatar = document.getElementById("avatar");

  setTimeout(() => {
    avatar.src = "imagenes/Avatar-Maker-B.png";

    setTimeout(() => {
      avatar.src = "imagenes/Avatar-Maker.png";
    }, 2000);
  }, 0);
});
