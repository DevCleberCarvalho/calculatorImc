calculate = () => {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    
    let imc = (weight / (height ** 2 )).toFixed(2);
    let text;

    if(imc < 18.5) {
        text = `Seu IMC é: ${imc} Você está magro!`; 
    } else if(imc < 24.9) {
        text = `Seu IMC é:  ${imc} Você está normal!`;
    } else if(imc < 29.9) {
       text = `Seu IMC é:  ${imc} Você está com sobrepeso!`;
    } else if(imc < 39.9) {
       text = `Seu IMC é:  ${imc} Você está com obesidade!`;
    } else if(imc > 39.9) {
       text = `Seu IMC é:  ${imc} Você está com obesidade mórbida!`;
    }
    document.getElementById('imc').innerText = text;
}