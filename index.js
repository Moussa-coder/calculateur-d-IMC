const form = document.getElementById('form');
const resultat = document.getElementById('resultat');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taille = parseFloat(document.getElementById('taille').value);
  const poids = parseFloat(document.getElementById('poids').value);

  if (taille > 0 && poids > 0) {
    const imc = poids / (taille * taille);
    const imcValue = imc.toFixed(2);
    let categorie = "";
    let couleur = "";

    if (imc < 18.5) {
      categorie = "Maigreur";
      couleur = "blue";
    } else if (imc < 25) {
      categorie = "Corpulence normale";
      couleur = "green";
    } else if (imc < 30) {
      categorie = "Surpoids";
      couleur = "orange";
    } else {
      categorie = "Obésité";
      couleur = "red";
    }

    resultat.textContent = `Votre IMC est de ${imcValue} : ${categorie}`;
    resultat.style.color = couleur;
  } else {
    resultat.textContent = "Veuillez entrer des valeurs valides.";
    resultat.style.color = "black";
  }
});
