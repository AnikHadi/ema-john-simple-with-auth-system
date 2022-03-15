import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart;
    // console.log(cart);
    let totalQuantity = 0;
    // let total = 0;
    // for (const product of cart){
    //     if(!product.quantity) {
    //         product.quantity = 1;
    //     }
    //     total = total + product.price * product.quantity;
    //     totalQuantity = totalQuantity + product.quantity;
    // }
    const itemPrice = props.cart.reduce((total, itempr) => {
        if (!itempr.quantity) {
            itempr.quantity = 1;
        }
        total = total + itempr.price * itempr.quantity;
        totalQuantity = totalQuantity + itempr.quantity;
        return total;
    }, 0)

    let shippingCost = 0;
    if (itemPrice < 35 && itemPrice > 15) {
        shippingCost = 4.99;
    }
    else if (itemPrice < 15 && itemPrice > 0) {
        shippingCost = 12.99;
    }
    else {
        shippingCost = 0;
    }

    const beforeTax = itemPrice + shippingCost;
    const tax = beforeTax * 0.1;
    const grandTotal = beforeTax + tax;

    const fixNumber = (number) => number.toFixed(2);
    // setGrandTotalQuantity(totalQuantity)

    



    return (
        <div className='cart-container'>
            <h5>Order Summary</h5>
            <p><small>Items ordered: {totalQuantity}</small></p>


            <div className='cart-details'>
                <tr>
                    <td>Item Price:</td>
                    <td>$ {fixNumber(itemPrice)}</td>

                </tr>
                <tr>
                    <td>Shipping & Handling:</td>
                    <td>$ {fixNumber(shippingCost)}</td>

                </tr>
                <tr>
                    <td>Total before Tax:</td>
                    <td>$ {fixNumber(beforeTax)}</td>

                </tr>
                <tr>
                    <td>Estimated Tax:</td>
                    <td>$ {fixNumber(tax)}</td>

                </tr>
                <tr>
                    <td>Order Total:</td>
                    <td>$ {fixNumber(grandTotal)}</td>

                </tr>
                {/* <p><small>Item:</small></p>
                <p><small>Shipping & Handling:</small></p>
                <p><small>Total before tax:</small></p>
                <p><small>Estimated Tax:</small></p>
                <p>Order Total: </p> */}
            </div>

        </div>
    );
};

export default Cart;