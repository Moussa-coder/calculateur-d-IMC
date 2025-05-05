// Récupération des éléments du formulaire
const form = document.getElementById('form');
const resultat = document.getElementById('resultat');

// Ajout d'un gestionnaire d'événement
form.addEventListener('submit', function (e) {
    e.preventDefault();

  //Récupération et conversion des valeurs 
  const taille = parseFloat(document.getElementById('taille').value);
  const poids = parseFloat(document.getElementById('poids').value);

  //Validations d'entrée
  if (taille > 0 && poids > 0) {
    const imc = poids / (taille * taille);
    resultat.textContent = `Votre IMC est de ${imc.toFixed(2)}`;
  } else {
    resultat.textContent = "Veuillez entrer des valeurs valides";
  }
})