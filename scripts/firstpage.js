
////////GENERATING THE HTML CODES WITH JAVASCRIPT.

let myHtml = '';
products.forEach( (product) => {

     myHtml += `
           <div class="one-product-container">
                <!--*********IMAGE*********-->
                <div class="product-img-container">
                    <img src="${product.image}" alt="" class="img-one">
                </div>
                <!--********NAME********-->
                <div class="product-name">
                    ${product.name}
                </div>
                <!--********RATINGS*********-->
                <div class="ratings-container">
                    <div class="stars-img-container">
                        <img src="../images/ratings/rating-${product.rating.stars*10}.png" alt="">
                    </div>
                    <div class="rating-count-container">
                        ${product.rating.count}
                    </div>
                </div>
                <!--*******PRICE*******-->
                <div class="price-container">
                    $${(product.priceCents /100).toFixed(2)}
                </div>
                <!--********QUANTITY**********-->
                <div class="product-select-quantity">
                    <select id="selectQuantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <!--*********ADD TO CART BUTTON*********-->
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
    `;
});

document.querySelector('.js-grid-container').innerHTML = myHtml;
