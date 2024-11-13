document.addEventListener("DOMContentLoaded", function () {
  // Selecciona la imagen por su id
  const avatar = document.getElementById("avatar");

  setTimeout(() => {
    avatar.src = "imagenes/Avatar-Maker-B.webp";

    setTimeout(() => {
      avatar.src = "imagenes/Avatar-Maker.webp";
    }, 2000);
  }, 0);
});
