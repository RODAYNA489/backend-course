// Notre "base de données" de livres
let livres = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true },
    { titre: "1984", auteur: "George Orwell", disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", disponible: true }
];

// Fonctions à implémenter :
// 1. ajouterLivre
const addobject= (title,author) =>{
    const temp={"titre":title ,"auteur":author,"disponible":false} 
    livres.push(temp)
}
// 2. emprunterLivre
const emprunterLivre = (title) => {
    for (let i = 0; i< livres.length;i++){
        if (livres[i].titre ===title){
            if(livres[i].disponible===true){
                livres[i].disponible===false
                return(livres[i])
        }else{
           console.log("not available") 
        }
        return;
    }
   }
console.log("not exist")
};
// 3. retournerLivre
const retournerLivre = (title) => {
    for (let i = 0; i< livres.length;i++){
        if (livres[i].titre ===title){
            if(livres[i].disponible===true){
                 console.log("true")
        }else{
           console.log("not available") 
        }
        return;
    }
   }
console.log("not exist")
};
// 4. afficherLivresDisponibles
const afficherLivresDisponibles = () => {
   const livresDisponibles = livres.filter(livre => livre.disponible === true)
     livresDisponibles.forEach(livre => {
      console.log(`titre: ${livre.titre}, auteur: ${livre.auteur}`);
    });
  };

  // 5. rechercherLivre
const rechercherLivre =(terme, livre) =>{
    const livreTrouve=livres.find(livre=>
     livre.titre.toUpperCase().includes(terme.toUpperCase())or livre.auteur.toUpperCase(terme.toUpperCase())
);
console.log(livreTrouve)
    }
// Fonction pour tester notre systèm
function testerBibliotheque() {
    // Nous appellerons nos fonctions ici pour tester
    addobject("jrf","jlj")
   // console.log(livres)
   afficherLivresDisponibles()
}

// Appel de la fonction de test
testerBibliotheque();

//try catch


