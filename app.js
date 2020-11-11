//SELECTION DOM
const pierre = document.querySelector(".pierre"); //1
const papier = document.querySelector(".papier"); //2
const ciseau = document.querySelector(".ciseau"); //3
const resultat = document.querySelector("h2");
const btn = document.querySelector("button");
const joueurScore = document.querySelector(".joueurScore");
const ordiScore = document.querySelector(".ordiScore");

// Variables
let reponse;
let pointsJoueur = 0;
let pointsOrdi = 0;
joueurScore.innerText = pointsJoueur;
ordiScore.innerText = pointsOrdi;
let alreadyCheck = false;

//Evenements
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

//Génération choix adversaire
let repAdversaire = Math.floor(Math.random() * 3) + 1; // nbr entre 1 et 3
console.log(repAdversaire);

//Rejouer
btn.addEventListener("click", () => {
  repAdversaire = Math.floor(Math.random() * 3) + 1;
  resultat.innerText = "";
  console.log("rejouer " + repAdversaire);
  alreadyCheck = false;
});

//Test réponse adversaire VS réponse Ordinateur
let verification = (elt) => {
  if (alreadyCheck == false) {
    let nbrEleve = elt;
    //Petit tric pour lorsque la réponse est 3
    if (nbrEleve + 1 == 4) {
      nbrEleve = 0;
    }
    if (elt == repAdversaire) {
      resultat.innerText = "😐Match Nul😐 !";
    } else if (nbrEleve + 1 == repAdversaire) {
      resultat.innerText = "😭Vous avez perdu😭 !";
      pointsOrdi++;
      setTimeout(() => {
        ordiScore.innerText = pointsOrdi;
      }, 600);
    } else {
      resultat.innerText = "😄Vous avez gagné😄 !";
      pointsJoueur++;
      setTimeout(() => {
        joueurScore.innerText = pointsJoueur;
      }, 600);
    }
    alreadyCheck = true;
      btn.style.opacity = 1;
  } else {
    return;
  }
};
