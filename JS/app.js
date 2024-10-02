
//console.log("Hello World,JS");



// const valor = 5;
// console.log(valor);

// Nomeclatura  CamelCase
// Inicia com letra minuscula ou _
// nunca inicia com numero
// Case sensitive
//CamelCase
//Nao pode ter espaço


//Criando 1 app

//escreva 1 algorito que receba 2 valores e some 2 valores. some e mostre o resultado

/*
exemplo:
    valor1:5
    valor2:4

    Resultado:9

    */

//1. declaração de variaveis
//let valor1;
//let valor2;
//let resultado;
//2. atribuição de valores ( entrada)
//valor1 = 5;
//valor2 = 4;
//3. Calculos e validações( processamento)
//resultado = valor1 + valor2;
//4. Mostrar na Tela(saida)
//console.log("Resultado:", resultado); //concatenação
//console.log(` O resultado da soma de ${valor1} + ${valor2} é igual a ${resultado}`);//${indica que é uma variavel}


// exercicio 
//escreva um algorito que receba 3 notas, calcule a media e imprima na tela

let nota1 = parseFloat (prompt("Digite primeira nota: "));
let nota2 = parseFloat (prompt ("Digite segunda nota: "));
let nota3 = parseFloat (prompt ("Digite terceira nota: "));
let notaFinal;

notaFinal = (nota1 + nota2 + nota3) / 3;
notaFinal = notaFinal.toFixed(2);
// 
// 


if(notaFinal > 7){
console.log(`Aprovado , nota : ${notaFinal}`);
}
else{
console.log(`Reprovado , nota : ${notaFinal}`);
}

/*
O erro está na forma como as notas são somadas. O prompt retorna strings, então ao somar, você está concatenando, não somando números. Use parseFloat para converter as entradas. Tente assim:

javascript
Copiar código
notaFinal = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
Dessa forma, a média será calculada corretamente.
*/










