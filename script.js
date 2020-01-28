// on crée une nouvelle instance (avec le new); on peut ainsi en créer à volonté

var xhttp = new XMLHttpRequest();


// Qd l'état change, on exécute une fonction
// Requête Ajax silencieuse, sans rafraîchissement (l'ordinateur nous fait connaître les étapes:
// ce qui nous intéresse, c'est de savoir qd elle est complétée)

// Ici, on va faire une requête vers un ficher texte
// Ajax permet de précharger des choses (images, sons, vidéos): dc pas besoin d'afficher les éléments HTML,
// avec 'display none',...

/*
// Partie à adapater
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
        alert(this.responseText);
    }
};
*/

/*
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
        document.getElementById('main').innerHTML = this.responseText;
    }
};
*/

/*
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
        alert(this.responseText);
    }
};
*/


xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
        var text = this.responseText;
        // convertir le texte brut en objet Javascript
        var text2 = JSON.parse(text);
        alert(text2.prenom);
    }
};




// de 0 à 4, 4 = la requête est complétée
//200 : ok
// 404, 502, code http retourné par le serveur
// 404: requête vers un ficher que le serveur n'arrive pas à trouver (fichier renommé, page inexistante...)
// 500: erreur interne liée au serveur (?)
// hihi erreur 418;


/*
fonction anonyme et classique (ds une fonction fléchée this fait référence au contexte objet courant)
fonction flechée (this fait référence à la fenêtre du navigateur: à l'objet window car il fait référence
à ce qui est avant, or là il n'y a rien avant à part le navigateur)
*/




// on ouvre la requête
// asynchrone ne bloque rien du tout (synchrone attend que tout soit terminé/chargé pour lancer la requête;
// le reste du code JS peut s'exécuter tranquillement pendant que ça charge)



//xhttp.open("GET", "data.txt", true);
xhttp.open("GET", "ajax.php", true);
xhttp.open("GET", "ajax.php?prenom=Robert", true);
xhttp.send();