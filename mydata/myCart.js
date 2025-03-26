

export const myCart = [];



//=======This function is reponsible for adding a product to cart
export function addProductToCart(productId){
    let matchingProductItem;
        myCart.forEach( (item) => {
            if( productId === item.productId ){
                matchingProductItem = item;
            };
        });

        
        if( matchingProductItem ){
            matchingProductItem.quantity += 1;
        }
        else{
            myCart.push({
                productId: productId,
                quantity: 1
            });
        }
};