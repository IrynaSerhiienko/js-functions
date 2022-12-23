console.log("**********Minimum-1***********");
/* Напиши всі можливі варіанти створення функцій. */

//function declaration
let number1 = 2;
let number2 = 3;

function sum(a, b) {
  const num1 = a;
  const num2 = b;
  let sum = num1 + num2;
  console.log(`summa1 equal: ${sum}`);
  return sum;
}
sum(number1, number2);

//function expression
let sum1 = function(c, d) {
    const num3 = c;
    const num4 = d;
    let sum1 = num3 + num4;
    console.log(`summa2 equal: ${sum1}`);
    return sum1;
}
sum1(number1, number2);

//arrow function 
let sum2 = (e, f) => {
    const num5 = e;
    const num6 = f;
    let sum2 = num5 + num6;
    console.log(`summa3 equal: ${sum2}`);
    return sum2;
}
sum2(number1, number2);