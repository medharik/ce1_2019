let produit = document.getElementById("produit");
let corps = document.getElementById("corps");
let tab = ["hp dv 5", "sony vaio v6", "acer a9", "dell latitude E45"];
function afficher_tableau() {
  corps.innerHTML = "";
  for (let i = 0; i < tab.length; i++) {
    corps.innerHTML +=
      " <tr><td>" + (i + 1) + "</td><td>" + tab[i] + " </td></tr>";
  }
}

function ajouter_produit() {
  let libelle = produit.value;
  tab.push(libelle);
  afficher_tableau();
}
