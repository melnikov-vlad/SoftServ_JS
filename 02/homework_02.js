// alert('Починаємо')
// //1) За допомогою prompt отримати дані від користувача(кількість років).
// // Якщо менше 18 то вивести інформацію  що він ще дуже юний.
// // Якщо від 18 до 60 то він може проходити дані(повідомлення якогось такого плану).
// // Якщо більше 60 то вивести що юзер застарий для нашого додатку.
// let yearOld = prompt("Привіт, Друже! Як справи? Давай більше познайомимося, скажи скільки тобі років?")
// if (yearOld <= 17) {
//         alert('Та ти ж неповнолітній! Сподіваюсь ти хоч без пива? Тобі сюди не можна')
// }
// else if (yearOld >= 18 && yearOld <= 59) {
//     alert("Ми з тоботою майже одного віку! Сподіваюсь ти пьєшь пиво, бо мені, ну дуже хочеться! Ходімо")
// }
// else if (yearOld >= 60 && yearOld <= 99) {
//     alert("Оу, старенькі які ви тут! В вас мабудь велика кількість байок є? Ну,гаразд, по дорозі розкажете")
// }
// else {
//     alert('Щось ти не те ввів, спрбуєш наступного разу')
// }

// alert('Починаємо №2')
/*2) Розробити гру "Вгадай число". За допомогою promp вводимо число (перед цим в коді пишемо в змінну любе число). 
Потім порівнюємо введене число із числом яке у змінній, і виводимо за допомогою alert користувачу відповідну відповідь (за велике число, замале число, вгадали).
Дати можливість користувачу 5 разів спробувати вгадувати число.
Якщо на протязі 5 разів користувач не вгадав число,  то вивести повідомлення що він програв (користувач).
Кожне із введених користувачем чисел занести в масив та відсортувати по зростанню.*/


// let anyNomber = prompt('Привіт! Пограємо в гру "Вгадай число", я загадую - ти вгадуєш. Почнемо! Я вже загадав!')
// let myNomber = 13;
// let lim = 5;
// for (i = 0; i < 5; i++) {
//     if (myNomber < anyNomber) {
//         alert('за велике число')
//     }
//     else if (myNomber > anyNomber) {
//         alert('число за мале')
//     }
//     else if (myNomber === anyNomber) {
//         alert('вгадав')
//     }
//     else {
//         alert("Щось ти не те ввів, спрбуєш ще раз")
//         // return prompt(anyNomber)
//     }
// }


alert('Привіт! Пограємо в гру "Вгадай число", я загадую - ти вгадуєш. Почнемо! Я вже загадав!')
let myNomber = 13;
let lim = 5;
let anyNomber = [];


for (i = 0; i < 5; i++) {
    anyNomber = prompt("Ваше число")
    if (myNomber < anyNomber) {
        alert('за велике число')  // треба поставити BREAK (брейк)
        
    }
    else if (myNomber > anyNomber) {
        alert('число за мале')
        
    }
    else if (myNomber == anyNomber) {
        alert('вгадав')
        // anyNomber.sort((a, b) => a - b);
        break
    }
    else {
        alert("Щось ти не те ввів, спрбуєш ще раз")
        
    }
    console.log();
}