'use strict';
const pathToImages = 'images';
const pathToProductImages = `${pathToImages}/featured`;
const featuredItems = document.querySelector('.featuredItems');

function getProductMarkup(product) {
    return `
<div class="featuredElement">
<div class="featuredItem">
    <div class="featuredImgWrap">
                    <img src=${pathToProductImages}/${product.image} alt=${product.name}>
                    <div class="featuredImgDark">
                        <button data-productID="${product.id}">
                            <img src="${pathToImages}/cart.svg" alt="">
                            Add to Cart
                        </button>
                    </div>
                </div>
</div>
<div class="featuredData">
                    <div class="featuredName">
                        ${product.name}
                    </div>
                    <div class="featuredText">
                       ${product.description}
                    </div>
                    <div class="featuredPrice">
                        ${product.price}
                    </div>
                </div>

            </div>
</div>
    `
}

function insertProducts(products, featuredItems) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItems.insertAdjacentHTML("afterbegin", productsMarkup);
}


// Функция обрабатывает кнопки добавления товара
function checkButtons() {
    const btns = document.querySelectorAll('button[data-productID]')
    btns.forEach(function(button){
        button.addEventListener('click', findProductID)
    })
}

// Функция получает id выбранного товара
function findProductID(event) {
    let selectedProductID = event.currentTarget.getAttribute('data-productID');
    addToCart(selectedProductID);
}

insertProducts(products, featuredItems);
checkButtons()