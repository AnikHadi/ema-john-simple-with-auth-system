import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {

    const { name, price, stock, seller, img, star } = props.product;

    const cartBtnHandle = props.cartBtnHandle;


    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>Price: $ {price}</p>
                <div className='icon-color'>
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                    />
                </div>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => cartBtnHandle(props.product)}  ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>

    );
};

export default Product;