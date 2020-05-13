let produit = document.getElementById("produit");
let prix = document.getElementById("prix");
let corps = document.getElementById("corps");
let marque = document.getElementById("marque");
let tab_produit = ["hp dv 5", "sony vaio v6", "dell latitude E45"];
let tab_prix = [2000, 3000, 5000];
let tab_marque = ["hp", "sony", "dell"];
let tab_logo = ["hp.png", "sony.png", "dell.png"];

function afficher_tableau() {
  corps.innerHTML = "";
  for (let i = 0; i < tab_produit.length; i++) {
    corps.innerHTML +=
      "<tr>" +
      "<td>" +
      (i + 1) +
      "</td>" +
      " <td>" +
      tab_produit[i] +
      "</td>" +
      " <td>" +
      tab_prix[i] +
      "</td>" +
      " <td>" +
      tab_marque[i] +
      "</td>" +
      " <td>" +
      "<img width=100 src=images/" +
      tab_logo[i] +
      ">" +
      "</td>" +
      " </tr>";
  }
}

function ajouter_produit() {
  let m = marque.value;
  //alert("la marque est " + m);
  // console.log(tab_produit.includes(produit.value));
  let libelle = produit.value;
  if (tab_produit.includes(libelle)) {
    alert("ce produit existe deja dans la liste de nos produits ");
  } else {
    tab_produit.push(libelle);
    tab_prix.push(prix.value);
    tab_marque.push(m);
    tab_logo.push(m + ".png");
  }

  afficher_tableau();
}
