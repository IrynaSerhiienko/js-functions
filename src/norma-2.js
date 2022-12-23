console.log("**********Norma-2***********");
/* Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/

let min = 5;
let max = 28;
//let number = 6;


function searchPerfectNumber(a, b) {
    let numMax = a;
    let numMin = b;
    
    for (numMin; numMin <= numMax; numMin++) {
        perfectNumber(numMin);
    }
}
searchPerfectNumber(max, min);


function perfectNumber(a) {
  let num = a;
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
      //console.log(i);
    }
  }
  if (sum === num) {
    console.log(`Number ${num} is perfect!`);
  } else {
    //console.log(`Number ${num} is't perfect!`);
  }
}
