'use strict';

let cartInfo = document.querySelector('.cartIcon');
let cart = document.querySelector('.cart');
let cartTotal = document.querySelector('.cartSum');
let cartSumTotal = document.querySelector('.cartSumTotal')
let productsIntoCart = {};

// Обработчик открывает и закрывает корзину
    cartInfo.addEventListener('click', function (event){
    cart.classList.toggle('hidden');
})


// функция добавляет количество товара
function productAdd(selectedProductID) {
        if (!(selectedProductID in productsIntoCart)) {
            productsIntoCart[selectedProductID] = 1;
        } else {
            productsIntoCart[selectedProductID]++;
        }
}

function addProductIntoCart(selectedProductID) {
    let addedProduct = document.querySelector(`.productCount[data-productID='${selectedProductID}']`)
    if (addedProduct){
        increaseCount(selectedProductID);
        sumPerProduct(selectedProductID);
    } else {
        addHtml(selectedProductID);
    }
}

function increaseCount(selectedProductID) {
        let quantity = document.querySelector(`.productCount[data-productID='${selectedProductID}']`);
        quantity.textContent++;
}

function sumPerProduct(selectedProductID) {
        let totalSumPerProduct = document.querySelector(`.totalSumPerProduct[data-productID='${selectedProductID}']`);
        let sum = Number(products[selectedProductID].price * productsIntoCart[selectedProductID]);
        totalSumPerProduct.textContent = sum;

}

function showTotalSum() {
        let finalSum = 0;
        for ( let selectedProductID in productsIntoCart) {
            finalSum += Number(productsIntoCart[selectedProductID] * products[selectedProductID].price);
        }
        cartSumTotal.textContent = finalSum;
}

function  addHtml(selectedProductID) {
        let productInfo =
          `<div class='cartProduct'>
              <div>${products[selectedProductID].name}</div>
              <div>
                  <span class='productCount' data-productID='${selectedProductID}'>1</span>
              </div>
              <div>${products[selectedProductID].price}</div>
              <div>
                  <span class='totalSumPerProduct' data-productID='${selectedProductID}'>${products[selectedProductID].price}</span>
              </div>
          </div>`
cartTotal.insertAdjacentHTML("beforebegin", productInfo);
}

// Функция увеличивает счет на иконке корзины
function addToCart(selectedProductID) {
let cartCount = document.querySelector('.cartCount');
cartCount.textContent++;
productAdd(selectedProductID);
addProductIntoCart(selectedProductID);
showTotalSum();
}




