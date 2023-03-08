/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    // Напишите код здесь
    const chars1 = [];
    const chars2 = [];
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1 === str2) return false;

    for(let i = 0; i < str1.length; i++) {
      chars1[i] = str1[i];
    }
    for(let i = 0; i < str2.length; i++) {
      chars2[i] = str2[i];
    }

    chars1.sort((a, b) => a <= b ? -1 : 1);
    chars2.sort((a, b) => a <= b ? -1 : 1);

    return chars1.every((char, key) => char === chars2[key]);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('up','UP')); // true
console.log(anagram('hello', 'bye')); // false