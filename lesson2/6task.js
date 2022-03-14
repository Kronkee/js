"use strict";

/**
 *  * Функция выполняет подстановку окончаний к слову "рублей", в зависимости от введенной суммы
 */


function confirm() {
    switch (lastNumber) {
        case "1":
            alert(`Ваша сумма в ${amount} рубль успешно зачислена.`);
            break;
        case "2":
        case "3":
        case "4":
            alert(`Ваша сумма ${amount} рубля успешно зачислена.`);
            break;
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            alert(`Ваша сумма ${amount} рублей успешно зачислена.`);
            break;
    }
}
let amount = prompt("Введите сумму, которую вы хотите положить на счет");
let lastNumber = String(amount).slice(-1);

confirm();