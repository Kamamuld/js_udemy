"use strict";

// https://learn.javascript.ru/ifelse

// let userName = prompt("Как Тебя зовут", "");
// alert ("Привет " + userName + ". Рады Тебя видеть");


// let officialNameOfJavascript = prompt("Какое «официальное» название JavaScript?", "");
// if (officialNameOfJavascript == "ECMAScript") {
//     alert("Верно");
// } else {
//     alert("Не знаете? ECMAScript!");
// }


// let userNumber = +prompt("Введите число" , "");
// if (userNumber > 0) {
//     alert(1);
// } else if (userNumber < 0) {
//     alert(-1);
// } else {
//     alert (0);
// }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let result;

// let a = +prompt('введите число а', '18'), 
//     b = +prompt('введите число б', '12');

// (a + b < 4) ? result = "Мало" : result = "Много";

// alert(result);


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message;

// let login = prompt('Введите свой логин', );
// (login == 'Сотрудник') ? message = 'Привет' : (login == 'Директор') ? message = 'Здравствуйте' : (login == '') ? message = 'Нет логина' : message = 'Неверный логин';

// alert(message);


// https://learn.javascript.ru/logical-operators

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// let age = +prompt ('Vvedite chislo', '0');

// if (age >= 14 && age <=90) {
//     alert('Vash vozrast v nuzhnom diapazone');
// } else {
//     alert('Vash vozrast ne popapdaet v dopustimui diapazon');
// }


// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// let age = +prompt ('Vvedite chislo', '0');

// if (age < 14 && age >90) {
//     alert('Vash vozrast v nuzhnom diapazone');
// } else {
//     alert('Vash vozrast ne popapdaet v dopustimui diapazon');
// }

let age = +prompt ('Vvedite chislo', '0');

if (!(age >= 14 && age <=90)) {
    alert('Vash vozrast ne popapdaet v dopustimui diapazon');
} else {
    alert('Vash vozrast v nuzhnom diapazone');
}