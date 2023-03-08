/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    // Напишите код здесь
    const result = [];
    let isPrime = false;

    for(let number = 2; number <= num; number++) {
      isPrime = true;
      for(let i = 2; i < number; i++) {
        if(number % i === 0) {
          isPrime = false;
          break;
        };
      }
      if(isPrime) result.push(number);
    }

    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]