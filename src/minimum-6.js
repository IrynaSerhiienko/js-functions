console.log("**********Minimum-6***********");
/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */

let side1 = 7;
let side2 = 5;

function calkSquare(a, b) {
  if (calkSquare.length === 1) {
    let SquareArea = side1 * side1;
    return SquareArea;
  }

  const length = a;
  const width = b;
  let SquareRect = length * width;
  return SquareRect;
}
calkSquare(side1, side2);
