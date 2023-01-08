const button = document.querySelector("button");
const cards = document.querySelectorAll('.cards');


console.log(button);
console.log(document.querySelector('.cards'));
console.log(document.querySelectorAll('.cards'));

button.addEventListener("click", function () {
for (i = 0; i < 5; i++) {
  cards[i].classList.toggle("active");
  cards[i].style.transitionDelay = (0.75 * i) + "s";
}
const h2 = document.querySelector("h2");
    h2.style.color = "purple" ;
document.getElementById("supr").innerHTML = ""
document.getElementById("text").innerHTML = "J'espère avoir rempli la consigne j'ai pas pu suivre les cours pour raison familiale. Je n'ai pas réussi à savoir si on devait vous rendre une ou plusieurs animations différentes alors j'ai tout mis dans la même"
});


