// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isPalindorome(string){
    var newString ="";
    for (var i = string.length - 1; i >= 0; i--) { 
        newString += string[i]; // or newString = newString + string[i]; 
        
    }
    
    return  newString;

}


var parola = prompt("inserisci una parola ");

while(!isNaN(parola)){
    parola =prompt("attenzione inserisci una parola");
}

console.log(parola);
console.log(isPalindorome(parola));


if(isPalindorome(parola) == parola){
    alert( " SI è palindroma");
}else{
    alert(" non è palindroma")
}

