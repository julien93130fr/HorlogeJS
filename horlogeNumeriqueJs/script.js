
let heuresDiv = document.querySelector('.heures');
let dateDiv = document.querySelector('.date');


let affichageHeure = function(){
    // déclaration des variables qui seront utilisées:
    let today,annee,listeMois,mois,listeJours,jourNumero,jourNom,heures,minutes,secondes,deuxChiffres;

    //récuperer la date actuelle
    today = new Date();

    //récupérer l 'année
    annee = today.getFullYear()

    // récupérer le mois
    listeMois= ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois=listeMois[today.getMonth()];

    // récupérer le numéro du jour du mois
    jourNumero=today.getDate();

   // Récupérer le jour. Attention la semaine commence un dimanche en Javascript
   listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
   jourNom = listeJours[today.getDay()];

   //Afficher les heures, minutes et secondes toujours avec deux chiffres

   deuxChiffres = function(element){
    if(element < 10){
        return element = "0"+ element;
    }else{
        return element;
    }
   }
   // récupérer les heures
   heures = deuxChiffres(today.getHours());

    // Récupérer les minutes : 
    minutes = deuxChiffres(today.getMinutes());

     // Récupérer les secondes :
     secondes = deuxChiffres(today.getSeconds());

     //Affichage dans nos DIV du HTML : 
     heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
     dateDiv.textContent = jourNom + ", " + jourNumero + " " + mois + " " + annee;

        // Lancer la fonction affichage heure toutes les 1000 ms, soit toute les secondes : 
        setTimeout(affichageHeure, 1000);

}

affichageHeure()