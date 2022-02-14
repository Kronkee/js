"use strict";
//ЗАДАНИЕ 3


let a = parseInt(prompt("Введите первое число"));
let b = parseInt(prompt("Введите второе число"));
let result;
if (a >= 0 && b >= 0) {
    result = a - b;
} else if (a < 0 && b < 0) {
    result = a + b;
} else if (a >= 0 && b < 0) {
    result = a + b;
} else if (a < 0 && b >= 0) {
    result = a + b;
}
alert(result);