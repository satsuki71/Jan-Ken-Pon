//Déclaration des variables
const btn_pierre = document.querySelector('#pierre');
const btn_feuille = document.querySelector('#feuille');
const btn_ciseaux = document.querySelector('#ciseaux');

const choix_ordi = document.querySelector('#choix-ordi');
const resultat_match = document.querySelector('#resultat-match');
const victoire = document.querySelector('#victoire');
const defaite = document.querySelector('#defaite');
const egalite = document.querySelector('#egalite');

const btn_reinitialiser = document.querySelector('.reinitialiser');

//Déclaration et initialisation des variables de score à 0
let score_victoire = 0;
let score_egalite = 0;
let score_defaite = 0;

//Créer une fonction pour générer le choix de l'ordinateur
function choix_ordinateur() {
  //Déclare mon tableau avec mes 3 choix possibles
  const choix = ['Pierre', 'Feuille', 'Ciseaux'];

  const index_aleatoire = Math.floor(Math.random() * choix.length);
  return choix[index_aleatoire];
}

//Créer une fonction pour déterminer le résultat du match
function definir_resultat(utilisateur, ordinateur) {
  if (utilisateur === ordinateur) {
    return 'Egalité';
  } else if (
    (utilisateur === 'Pierre' && ordinateur === 'Ciseaux') ||
    (utilisateur === 'Feuille' && ordinateur === 'Pierre') ||
    (utilisateur === 'Ciseaux' && ordinateur === 'Feuille')
  ) {
    return 'Victoire';
  } else {
    return 'Défaite';
  }
}

//Créer une fonction pour mettre à jour le score
function maj_resultat(resultat) {
  if (resultat === 'Victoire') {
    score_victoire++;
    victoire.textContent = `Victoire : ${score_victoire}`;
  } else if (resultat === 'Défaite') {
    score_defaite++;
    defaite.textContent = `Défaite : ${score_defaite}`;
  } else {
    score_egalite++;
    egalite.textContent = `Egalité : ${score_egalite}`;
  }
}

//On créé un fonction qui lance le jeu

function start_game(choix_utilisateur) {
  const choix = choix_ordinateur();
  choix_ordi.textContent = `Choix de l'ordinateur : ${choix}`;

  const resultat = definir_resultat(choix_utilisateur, choix);
  resultat_match.textContent = `Résultat : ${resultat}`;

  maj_resultat(resultat);
}

//On récupère le choix du player au clic

btn_pierre.addEventListener('click', () => start_game('Pierre'));
btn_feuille.addEventListener('click', () => start_game('Feuille'));
btn_ciseaux.addEventListener('click', () => start_game('Ciseaux'));

//Créer une fonction pour réinitialiser les scores
btn_reinitialiser.addEventListener('click', () => {
  score_victoire = 0;
  score_defaite = 0;
  score_egalite = 0;

  victoire.textContent = `Victoire : -`;
  defaite.textContent = `Défaite : -`;
  egalite.textContent = `Egalité : -`;
  resultat_match.textContent = `Résultat : -`;
  choix_ordi.textContent = `Choix de l'ordinateur : -`;
});
