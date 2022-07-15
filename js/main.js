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

console.log(numbers);
document.getElementById("container").innerHTML = numbers;
let numero1;
let numero2;
let numero3;
let numero4;
let numero5;

setTimeout(function () {
    
    
    document.getElementById("container").innerHTML = "";

    numero1=prompt("inserisci numero 1 di 5");
    numero2=prompt("inserisci numero 2 di 5");
    numero3=prompt("inserisci numero 3 di 5");
    numero4=prompt("inserisci numero 4 di 5");
    numero5=prompt("inserisci numero 5 di 5");



}, 10000);





    



console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);
console.log(numero5);






function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}