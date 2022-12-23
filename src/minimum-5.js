console.log("**********Minimum-5***********");
/* Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149. */

let number1 = '1';
let number2 = '4';
let number3 = '9';

function joinNumber(a, b, c) {
  let num1 = a;
  let num2 = b;
  let num3 = c;

  let result = num1 + num2 + num3;
  console.log(+result);
  return +result;
}
joinNumber(number1, number2, number3);
