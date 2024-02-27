let number1;
let number2;

while (isNaN(number1)) {
    number1 = Number(prompt("Insira um número"));
    if (isNaN(number1)) {
        alert('Insira um número válido');
    }
}

alert(`Número ${number1} inserido com sucesso.`);

while (isNaN(number2)) {
    number2 = Number(prompt("Insira um número"));
    if (isNaN(number2)) {
        alert('Insira um número válido');
    }
}

alert(`Número ${number2} inserido com sucesso.`);

alert (`A soma de ${number1} e ${number2} é igual a ${number1 + number2}`)
alert (`A subtração de ${number1} e ${number2} é igual a ${number1 - number2}`)
alert (`A multiplicação de ${number1} e ${number2} é igual a ${number1 * number2}`)
alert (`A divisão de ${number1} e ${number2} é igual a ${number1 / number2}`)
alert (`O resto da divisão de ${number1} e ${number2} é igual a ${number1 + number2}`)

if (number1 % 2 === 0 ) {
    alert (`O número ${number1} é par`)
} else {
    alert (`O número ${number1} é ímpar`)
}

if (number2 % 2 === 0 ) {
    alert (`O número ${number2} é par`)
} else {
    alert (`O número ${number2} é ímpar`)
}

if (number1 === number2) {
    alert("Os números são iguais")
} else {
    alert("Os números não são iguais")
}
