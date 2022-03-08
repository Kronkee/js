"use strict";
//ЗАДАНИЕ 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
function discount (product) {
    product.price = product.price - (0.15 * product.price);
    return product.price;
}

products.forEach(discount);
console.log(products);