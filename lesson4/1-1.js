"use strict";
//ЗАДАНИЕ 1.1

//ES5

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - 0.25 * this.price;
};


let product = new Product('dress', 100);
product.make25PercentDiscount();
console.log(product);

//ES6

class Product1 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - 0.25 * this.price;
    }
}

let product1 = new Product1('T-shirt', 50);
product1.make25PercentDiscount();
console.log(product1);



