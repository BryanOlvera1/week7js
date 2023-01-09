// Very Easy Challenge//
var x= 12
var y= 10

console.log('the difference is '+(x-y) )
//Easy Challenge//
const J= "Jonathan"
const B= "Bryan" 

console.log('The name Jonathan is longer than Bryan by '+(J.length-B.length)+ 'characters')
//Medium Challenge//
var name = prompt("Name?")

if (name.toUpperCase()== name) { 
    console.log('shouting')
}
else if (name.toLowerCase()== name) {console.log('whispering')}
else {
    console.log('talking normally');
}
//Hard Challenge//
//addition//
function add(number1, number2)
{console.log(number1 + number2)
}
add (100,100)
//subtraction//
function subtract(number1, number2)
{console.log( number1 - number2)
}
subtract (100,50)
//multiplication//
function multiply(number1, number2)
{console.log(number1 * number2)
}
multiply(100,100)
//division//
function divide(number1, number2)
{console.log( number1 / number2)
}
divide (100,50)
//Very Hard Challenge//
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