/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
  // Напишите код здесь
  let totalCount = 0;
  let countInNumber = 0;
  let str = '';
  let index = 0;

  for(let number = 1; number <= n; number++) {
    countInNumber = 0;
    str = number.toString();
    for(let offset = 0; offset < number;) {
      index = str.indexOf('0', offset);
      if(index >= 0) {
        countInNumber++;
        offset = index + 1;
      } else {
        break;
      }
    }
    totalCount += countInNumber;
  }
  return totalCount;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
