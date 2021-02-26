/*
Calcolo del prezzo del biglietto del treno.
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
_ il prezzo del biglietto è definito in base ai km (0.21 € al km)
_ va applicato uno sconto del 20% per i minorenni
_ va applicato uno sconto del 40% per gli over 65
*/

// 1. Richiesta numero di chilometri
var chilometri = parseInt(prompt("Inserisci il numero di chilometri"));

if ( isNaN(chilometri) ) {
  var chilometri = parseInt(prompt("Inserisci il numero di chilometri. Deve essere un numero!"));
}

// 2. Richiedo l'eta'
var eta = parseInt(prompt("Quanti anni hai?"));

if ( isNaN(eta) ) {
  var eta = parseInt(prompt("Quanti anni hai? La tua eta' deve essere un numero!"));
}

// 3. Calcolo prezzo del biglietto
var prezzo = chilometri * 0.21;

if ( eta < 18) {
  var prezzoFinale = ( prezzo - 0.2 );
  document.getElementById("biglietto").innerHTML = prezzoFinale.toFixed(2);
  // alert("Il prezzo per il tuo biglietto e' " + prezzoFinale.toFixed(2) + " euro");
} else if ( eta > 65) {
  var prezzoFinale = ( prezzo - 0.4 );
  document.getElementById("biglietto").innerHTML = prezzoFinale.toFixed(2);
  // alert("Il prezzo per il tuo biglietto e' " + prezzoFinale.toFixed(2) + " euro");
} else {
  document.getElementById("biglietto").innerHTML = prezzo.toFixed(2);
  // alert("Il prezzo per il tuo biglietto e' " + prezzo.toFixed(2) + " euro");
}
