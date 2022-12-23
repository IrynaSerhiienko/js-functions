console.log("**********Minimum-4***********");
/* Напиши функцію, яка обчислює факторіал переданого їй числа. */

let number = 3;

function calkFactorial(n) {
  let num = n;
  let result = 1;
  while (num) {
    result *= num;
    num--;
  }
  return result;
}
calkFactorial(number);
