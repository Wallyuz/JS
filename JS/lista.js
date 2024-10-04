//1 questao
// let nota1,nota2,nota3,nota4,media;

// nota1 = parseFloat(prompt("Digite 1 nota:"));
// nota2 = parseFloat(prompt("Digite 2 nota:"));
// nota3 = parseFloat(prompt("Digite 3 nota:"));
// nota4 = parseFloat(prompt("Digite 4 nota:"));

// media = (nota1 + nota2 + nota3 + nota4 ) / 4

// if(media >=6){
//     console.log("Aprovado!");
// }else{
//     console.log("Reprovado!");
// }

//2 questao 

// let nome = prompt("digite seu nome: ");

// if(nome ===""){
//     console.log("Bem-vindo(a) visitante!");
// }else{
//     console.log(` "Bem-vindo(a) ${nome}"`);
// }

//3 questao

// let numero = prompt("Digite seu numero:");

// if(numero ===""){
//     console.log("Erro ao acessar um valor nulo na memória!");
// }else{
//     console.log(`Valor informado:${numero}`);
// }

//4 questao

// let numero = prompt("digite um numero:");

// if(numero == 0){
//     console.log("Zero!");
// }else if(numero % 2 != 0){
//     console.log("Impar!")
// }else{
//     console.log("Par!")
// }

//5 questao

// let n1, n2;

// n1 = prompt("Digite 1 numero: ");
// n2 = prompt("Digite 2 numero: ");

// if(n1>n2){
//     console.log(`Maior valor: ${n1}\n Menor valor:${n2}\n`);
// }else if(n2>n1){
//     console.log(`Maior valor: ${n2}\n Menor valor:${n1}\n`);
// }else{
//     console.log("Valores Iguais!")
// }

//6 questao

// let pesom,altura,sexo,pesof;

// altura = prompt("Digite sua Altura:");
// sexo = prompt("Digite seu Sexo: ");

// if(sexo == "M"){
//     pesom = (72.7 * altura) - 58
//     console.log(`Peso ideal: ${pesom.toFixed(2)}`);
// }else if(sexo == "F"){
//     pesof = (62.1 * altura) - 44.7;
//     console.log(`Peso ideal: ${pesof.toFixed(2)}`);
// }else{
//     console.log("Opção invalida");
// }

//7 questao

// let letra;

// console.log("C)Create(Cadastrar/Inserir)\nR)Read(Buscar/Ler)\nU)Update(Editar/Atualizar)\nD)Delete(Excluir/Apagar)");

// letra = prompt("Digite sua opção:").toLowerCase();

// switch (letra){
//     case "c":
//         console.log("Cadastrar/Inserir");
//         break;
//     case "r":
//         console.log("Buscar/Ler");
//         break;
//     case "u":
//         console.log("Editar/Atualizar");
//         break;
//     case "d":
//         console.log("Excluir/Apagar");
//         break;           
// }

//DESAFIO 1

// let ano;

// ano = prompt("Digite seu ano:")

// if(ano % 4 == 0 && ano % 100 !== 0 || ano % 400 === 0){
//     console.log("Ano bissexto");
// }else{
//     console.log("");
// }