//SELECTION DOM
const pierre = document.querySelector(".pierre"); //1
const papier = document.querySelector(".papier"); //2
const ciseau = document.querySelector(".ciseau"); //3
const resultat = document.querySelector("h2");
const btn = document.querySelector("button");
let reponse;

pierre.addEventListener("click", () => {
  reponse = 1;
  verification(reponse);
});
papier.addEventListener("click", () => {
  reponse = 2;
  verification(reponse);
});
ciseau.addEventListener("click", () => {
  reponse = 3;
  verification(reponse);
});

let repAdversaire = Math.floor(Math.random() * 3) + 1; // nbr entre 1 et 3
console.log(repAdversaire);
btn.addEventListener("click", () => {
  repAdversaire = Math.floor(Math.random() * 3) + 1;
  resultat.innerText = "";
  console.log("rejouer " + repAdversaire);
});

let verification = (elt) => {
  let nbrEleve = elt;
  if (nbrEleve + 1 == 4) {
    nbrEleve = 0;
  }
  if (elt == repAdversaire) {
    resultat.innerText = "Egalite";
  } else if (nbrEleve + 1 == repAdversaire) {
    resultat.innerText = "Vous avez perdu";
  } else {
    resultat.innerText = "Vous avez gagné";
  }
};
