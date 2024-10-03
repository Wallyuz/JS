let valorTotal =  prompt("Digite valor: ");
let valorDesconto;
let Resul;


valorDesconto = valorTotal * 0.10;
Resul = valorTotal - valorDesconto;

valorDesconto = valorDesconto.toFixed(2);
Resul = Resul.toFixed(2);


console.log(`valor sem desconto: ${valorTotal.toFixed(2).replace('.', ',')}`);
console.log(`valor do desconto:${valorDesconto}`)
console.log(`valor total:${Resul}`);



// let valorTotal = prompt("Digite valor: ");
// valorTotal = parseFloat(valorTotal); // Converte a string para um número

// let valorDesconto;
// let Resul;

// valorDesconto = valorTotal * 0.10;
// Resul = valorTotal - valorDesconto;

// // Formata todos os valores para duas casas decimais e substitui o ponto pela vírgula
// valorDesconto = valorDesconto.toFixed(2).replace('.', ',');
// Resul = Resul.toFixed(2).replace('.', ',');
// valorTotal = valorTotal.toFixed(2).replace('.', ',');

// console.log(`valor sem desconto: ${valorTotal}`);
// console.log(`valor do desconto: ${valorDesconto}`);
// console.log(`valor total: ${Resul}`);