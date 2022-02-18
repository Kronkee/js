"use strict";
//ЗАДАНИЕ 1
let num = prompt('Введите число.');

function distribute(num) {
    if (num < 0) {
        alert('Введенное число меньше 0! Попробуйте еще раз.');
        return {};
    } else if (num > 999) {
        alert('Введенное число больше 999! Попробуйте еще раз.');
        return {};
    } else if (isNaN(num)) {
        alert('Это не число! Попробуйте еще раз.');
        return {};
    } else if (num % 1 !== 0) {
        alert('Это не целое число! Попробуйте еще раз.');
        return {};
    }
    let arr = num.split('');
    if (arr.length === 3) {
        let distributedNum = {
            units: arr[2],
            tens: arr[1],
            hundreds: arr[0],
        }
        return distributedNum;
    } else if (arr.length === 2) {
        let distributedNum = {
            units: arr[1],
            tens: arr[0],
            hundreds: "0",
        }
        return distributedNum;
    } else if (arr.length === 1) {
        let distributedNum = {
            units: arr[0],
            tens: "0",
            hundreds: "0",
        }
        return distributedNum;
    }
}

distribute(num);