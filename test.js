const livres = [
    {id: 1, titre: "le petit prince", auteur: "Antoine de Saint-Exupery", disponible: true},
    {id: 2, titre: "l'etranger", auteur: "Albert Camus", disponible: false},
    {id: 3, titre: "les miserables", auteur: "victor hugo", disponible: true }
];
let count = 0
console.log(livres);

const targetId = 1;
const targetIds = 3;

for (let i = 0; i < livres.length; i++) { // Changement de 1 à 0 ici
    if (livres[i].id === targetId) {
        console.log(livres[i].titre);
        break;
    }
}

for (let j = 0; j < livres.length ; j++) { 
    if(count !== livres.length) {
        count++
    }
}
console.log(count)

for(let k = 0; k < livres.length ; k++) {
    if(livres[k].id = targetIds) {
        console.log(livres[k].auteur)
        break;
    }
}