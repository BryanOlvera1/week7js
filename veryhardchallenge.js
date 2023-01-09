
const operator = prompt('( either +, -, * or / ): ');

const n1 = parseFloat(prompt('N1'));
const n2 = parseFloat(prompt('N2'));
let result;

if (operator == '+') {
    result = n1 +  n2;
}
else if (operator == '-') {
    result = n1 - n2;
}
else if (operator == '*') {
    result = n1 * n2;
}
else {
    result = n1 / n2;
}

console.log(`${n1} ${operator} ${n2} = ${result}`);