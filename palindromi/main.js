// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isPalindorome(str){
    newString =""
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
       
        return   console.log(newString);


    }


}


var parola = prompt("inserisci una parola ");

while(!isNaN(parola)){
    parola =prompt("attenzione inserisci una parola")
}

console.log(parola);


if(isPalindorome(parola)){
    alert( " SI è palinroma");
}

