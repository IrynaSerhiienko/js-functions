console.log("**********Minimum-3***********");
/* Напиши функцію, яка приймає 2 числа і повертає :
1)-1, якщо перше число менше, ніж друге; 
2) 1 - якщо перше число більше, ніж друге; 
3) 0 - якщо числа рівні. */

let firstNumber = 7;
let secondNumber = 5;

function getNumber(a, b) {
  const num1 = a;
  const num2 = b;
  if (num1 < num2) return -1;
  if (num1 > num2) return 1;
  if (num1 === num2) return 0;
}
getNumber(firstNumber, secondNumber);
