document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".flip-card button").forEach(button => {
      button.addEventListener("click", function () {
          let card = this.closest(".flip-card");
          card.classList.toggle("flipped");
      });
  });
});






