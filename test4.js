const livres = [
    {id: 1, titre: "le petit prince", auteur: "Antoine de Saint-Exupery", disponible: true},
    {id: 2, titre: "l'etranger", auteur: "Albert Camus", disponible: false},
    {id: 3, titre: "les miserables", auteur: "victor hugo", disponible: true }
];

const p = document.querySelector('#compteur')
p.textContent = `${livres.length} livres dans la bibliotheque`
const title = document.querySelector("h1");
title.textContent = "gestionnaire de bibliotheque";