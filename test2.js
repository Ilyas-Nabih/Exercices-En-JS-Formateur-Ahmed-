const livres = [
    {id: 1, titre: "le petit prince", auteur: "Antoine de Saint-Exupery", disponible: true},
    {id: 2, titre: "l'etranger", auteur: "Albert Camus", disponible: false},
    {id: 3, titre: "les miserables", auteur: "victor hugo", disponible: true }
];
let count = 0
console.log(livres);

const targetId = 1;
const targettitre = "les miserables";

for (let i = 0; i < livres.length; i++) {
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
    if(livres[k].titre === targettitre) {
        console.log(livres[k].auteur +" ", livres[k].titre)
        break;
    }
}
livres.forEach((livre) => {
    let kayn = ""
    if (livre.disponible === true){
        kayn = "disponible"
    }
    else if (livre.disponible === false) {
        kayn = " Emprunté"
    }
    console.log(`${livre.titre} - ${livre.auteur} - ${kayn} `);
});
//Le paramètre livre correspond à l'élément du tableau en cours de traitement lors du tour de boucle actuel.