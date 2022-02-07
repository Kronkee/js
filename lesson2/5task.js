"use strict";


/**
 * Функция выполняет одну из арифметических операций
 * @param arg1 {number} первое число
 * @param arg2 {number} второе число
 * @param operation {string} операция
 * @return {number} результат операции
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "addition":
            sum(arg1, arg2);
            break;
        case "substraction":
            subtract(arg1, arg2);
            break;
        case "multiplication":
            multiply(arg1, arg2);
            break;
        case "division":
            divide(arg1, arg2);
            break;
    }
}

function sum(arg1, arg2) {
    return arg1 + arg2;
}

function subtract(arg1, arg2) {
    return arg1 - arg2;
}

function multiply(arg1, arg2) {
    return arg1 * arg2;
}

function divide(arg1, arg2) {
    return arg1 / arg2;
}

mathOperation (12, 6, "division");