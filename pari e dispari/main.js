// FUNZIONI
function numeroRandom(min, max){

    var random = Math.floor(Math.random() * (max-min +1)+min);
     return random;



}

 function isEven(num1){
     if((num1 % 2) ==0){
        return true;
    }else{
       return false;
    }
 }






// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta = prompt("inserisci pari o dispari").toLowerCase();
while(scelta  != "pari" && scelta != "false"){
    scelta = prompt("Iserisci una scelta valida: PARI O DISPARI").toLowerCase();
}
var sceltaNumero = parseInt(prompt("inserisci un numero da 1 a 5"));
while(sceltaNumero <1 ||sceltaNumero > 5 ){
   sceltaNumero = parseInt(prompt("inserisci un numero da 1 a 5"));
 }
console.log(scelta);
console.log(sceltaNumero);
// Generiamo un numero random (sem)pre da 1 a 5) per il computer (usando una funzione).
var numeroUtente = numeroRandom(1, 5);
var numeroPc = numeroRandom(1, 5);

var somma = numeroUtente + numeroPc;

console.log(somma);

if(isEven(somma) && scelta == "pari") {
    alert("hai vinto")

} else if(!isEven(somma) && scelta == "dispari"){
    alert("hai perso")
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Dichiariamo chi ha vinto.
