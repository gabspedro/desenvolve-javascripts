// Soma
const soma = (num1, num2) => num1 + num2;

// Subtrai
const subtrai = (num1, num2) => num1 - num2;

// Multiplica
const multiplica = (num1, num2) => num1 * num2;

// Divide
const divide = (num1, num2) => num1 / num2;

// MostraResultado
const mostraResultado = (num1, num2) => {
    console.log(`[Soma] entre ${num1} e ${num2}: ${soma(num1, num2)}`);
    console.log(`[Subtração] entre ${num1} e ${num2}: ${subtrai(num1, num2)}`);
    console.log(`[Multiplicação] entre ${num1} e ${num2}: ${multiplica(num1, num2)}`);
    console.log(`[Divisão] entre ${num1} e ${num2}: ${divide(num1, num2)}`);
};

// Testando a função
mostraResultado(10, 5);