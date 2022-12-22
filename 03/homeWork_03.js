// 1. Напишіть JS-функцію для друку чисел від 1 до 100 в консоль.
// 2. Напишіть JS-функцію для друку парних чисел від 1 до 100 в консоль.
// 3. Напишіть JS-функцію для друку непарних чисел від 1 до 100 в консоль.
// 4. Напишіть функцію із таким же функціоналом як попередні, але числа потрібно брати із масиву.
// 5. Напишіть функцію яка  видаляє всі значення із масиву.
// 6. Реалізувати функцію яка рахує степінь числа за допомогою циклу.

// #1
// function getNumber() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
        
//     }
    
// }
// console.log(getNumber(i));  //цікаво, чому в кінці "undefined"

// #2

// function getNumber() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 == 0)
//             console.log(i);
//     }
// }
// console.log(getNumber());

// #3

// function getNumber() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 !== 0)
//             console.log(i);
//     }
// }
// console.log(getNumber());

// #4

let arr = [20, 32, 33, 44, 55, 66, 77];
let filterArr = arr.filter(function (item) {
    return item % 2 !== 0;
}) 
console.log(filterArr);