const cardsProyects = document.querySelectorAll(".proyectCard");

cardsProyects.forEach((card) => {
  card.addEventListener("mouseover", (event) => {
    event.preventDefault();
    console.log(event);
  });
});
