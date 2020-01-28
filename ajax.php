<?php

/*
echo "Mon texte";

echo "<div id='main2' style='background:blue'>Renvoie aussi du html</div>";
*/

//Convertir un tableau en Json

//$tableauX = ["Simon", "Romain", "Michel"];
//echo json_encode($tableauX, true);

//echo "<br>";

$prenom = $_GET['prenom'];

$tableau = [
    "couleur"=>"bleu",
    "prenom"=>$prenom
];
echo json_encode($tableau);

