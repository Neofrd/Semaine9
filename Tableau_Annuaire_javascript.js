$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$numero = document.getElementById("numero");
$ajouter = document.getElementById("ajouter");
$annuler = document.getElementById("Annuler");
$recherche = document.getElementById("recherche");
$rechercher = document.getElementById("rechercher");
$resultats = document.getElementById("resultats");

$liste2 = document.getElementById("liste2");
$supprimer = document.getElementById("supprimer");
$restaurer = document.getElementById("restaurer");

var contacts = [{
  prenom: "Julien",
  nom: "Grillot",
  numero: "0123456789"
}, {
  prenom: "John",
  nom: "Smith",
  numero: "0123456789"
}];

function texteContact(contact) {
  return contact.prenom + ' ' + contact.nom + ' (' + contact.numero +')';
}

/*alert(texteContact(contacts[0]));*/

function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
}
function annuler(){
    contacts.pop();
    afficherListe();
}
function rechercher() {
    recherche = $recherche.value;
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].prenom == recherche || contacts[i].nom == recherche || contacts[i].numero == recherche) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    $resultats.innerHTML = elements;
}

$ajouter.onclick = ajouter;
$annuler.onclick= annuler;
$rechercher.onclick = rechercher;
afficherListe();

function selectionne(e){
  //e.target correspond au <li> qui a été cliqué dans le <ul>!
  e.target.classList.toggle("selected");
}

function supprimer() {
    for (i = 0; i < $liste2.children.length; i++) {
        if ($liste2.children[i].classList.contains("selected")) {
            $liste2.children[i].classList.add("poubelle");
        }
    }
}

function restaurer() {
    for (i = 0; i < $liste2.children.length; i++) {
        $liste2.children[i].classList.remove("poubelle");
    }
}

$liste2.onclick = selectionne;
$supprimer.onclick = supprimer;
$restaurer.onclick = restaurer;

/*
tableau = ["Bob", "Julien", "Roger"];
$element = document.getElementbyid("liste");

//ajouter la classe li après avoir testé sa présence
$element.classlist.contains("ul");
$element.classlist.add("li");*/


