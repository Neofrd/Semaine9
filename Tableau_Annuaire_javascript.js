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

alert(texteContact(contacts[0]));

/*
tableau = ["Bob", "Julien", "Roger"];
$element = document.getElementbyid("liste");

//ajouter la classe li après avoir testé sa présence
$element.classlist.contains("ul");
$element.classlist.add("li");*/


