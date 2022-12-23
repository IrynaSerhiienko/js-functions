console.log("**********Norma-1***********");
/* Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників. */

let number = 6;
//let number = 28;

function perfectNumber(a) {
  let num = a;
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
      console.log(i);
    }
  }
  if (sum === num) {
    console.log(`Number ${num} is perfect!`);
  } else {
    console.log(`Number ${num} is't perfect!`);
  }
}
perfectNumber(number);
