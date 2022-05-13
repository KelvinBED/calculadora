function adicao(num1, num2){
    return num1 + num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function multiplicacao(num1, num2){
    return num1 * num2;
}

function divisao(num1, num2){
    return num1 / num2;
}

function quadradoDoNumero(num1){
    return num1 * num1;
}

function mediaDeTresNumeros(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

function calculoPorcentagem(num1, porcento){
    
    return (porcento * num1)/100;
}

function porcentagem(num1, num2){
    return (num1 / num2)*100;
}


//Substituir os parametros dentro dos parênteses para alterar os numeros da conta

console.log('Testando calculadora - função Adição =', adicao(1,2));
console.log('Testando calculadora - função Subtrai =', subtracao(10,2));
console.log('Testando calculadora - função Multiplica =', multiplicacao(2,2));
console.log('Testando calculadora - função Dividir =', divisao(10,2));
console.log('Testando calculadora - função Numero ao Quadrado =', quadradoDoNumero(3));
console.log('Testando calculadora - função Média de três numeros =', mediaDeTresNumeros(1, 2, 3));
console.log('Testando calculadora - função que calcula o valor da Porcentagem =', calculoPorcentagem(100,10));
console.log('Testando calculadora - função que calcula a Porcentagem =', porcentagem(10,1000,),'%');