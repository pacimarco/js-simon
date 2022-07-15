//genero i 5 numeri casuali//

let Number = 5;
let numbers = [];
for (let i = 0; i <Number; i++) {
    let newRandomNumber = generateRandomNumber(1, 100);
    console.log(i, newRandomNumber);

    while(numbers.includes(newRandomNumber)){
        newRandomNumber = generateRandomNumber(1, 100);
        console.log(i, newRandomNumber);
    }

    numbers.push(newRandomNumber);
}
//li mostro nel container//
console.log(numbers);
document.getElementById("container").innerHTML = numbers;
let numero1;
let numero2;
let numero3;
let numero4;
let numero5;


//dopo 30 sec nascondo i numeri e in seguito parte il promt//
setTimeout(function () {
    
    
    document.getElementById("container").innerHTML = "";

    

    setTimeout(function () {
    
    
    

        numero1=parseInt(prompt("Inserisci numero 1 di 5"));
        numero2=parseInt(prompt("Inserisci numero 2 di 5"));
        numero3=parseInt(prompt("Inserisci numero 3 di 5"));
        numero4=parseInt(prompt("Inserisci numero 4 di 5"));
        numero5=parseInt(prompt("Inserisci numero 5 di 5"));
    
        console.log(parseInt(numero1));
        console.log(numero2);
        console.log(numero3);
        console.log(numero4);
        console.log(numero5);

//tentativi controllo risultato e alert//
        for (let i = 0; i <Number; i++) {
            if (numbers[i]==numero1){
                alert('Hai indovinato il numero' + numero1);
            }
            if (numbers[i]==numero2){
                alert('Hai indovinato il numero' + numero2);
            }
            if (numbers[i]==numero3){
                alert('Hai indovinato il numero' + numero3);
            }
            if (numbers[i]==numero4){
                alert('Hai indovinato il numero' + numero4);
            }
            if (numbers[i]==numero5){
                alert('Hai indovinato il numero' + numero5);
            }
        }
    
    }, 1000);

}, 10000);

//provo a confrontare i numeri inseriti e a generare un risultato//





function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}