import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useCart from '../../hooks/useCart';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
// import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItemProduct from './ReviewItemProduct/ReviewItemProduct';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ReviewOrder.css'
import { useNavigate } from 'react-router-dom';

const ReviewOrder = () => {

    // const { products } = useProducts();
    const { cart, setCart } = useCart();
    const navigate = useNavigate()
    // console.log(cart);
    const removeHandler = key => {
        const updateCart = cart.filter(pd => pd.key !== key);
        setCart(updateCart);
        deleteFromDb(key);
    }
    const completeOrderHandler = () => {
        navigate('/order-success');
        setCart('');
        clearTheCart();
    }
    return (
        <div>
            <div className='shop'>
                <div className='shop-details'>
                    <h1 className='total-product'>Total Cart products: {cart.length}</h1>
                    {
                        cart.map(pd => <ReviewItemProduct 
                            reviewPd={pd} 
                            removeHandler={removeHandler}
                            key={pd.key}></ReviewItemProduct>)
                    }
                </div>

                <div className='shop-order-summary'>
                    <Cart
                        cart={cart}
                    ></Cart>
                    <button onClick={completeOrderHandler}><FontAwesomeIcon icon={faShoppingCart}/> Complete your order</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;