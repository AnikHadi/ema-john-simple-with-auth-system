import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react';
// import { getStoredCart } from '../../../utilities/fakedb';

const ReviewItemProduct = (props) => {

    const { removeHandler, reviewPd } = props;
    const reviewProduct = reviewPd;
    const { img, name, quantity, price, key, seller } = reviewProduct;
    // console.log(reviewPd);

    
    const quantityValueRef = useRef();
    
    const plusBtnHandler = () => {
        
    }



    return (
        <div className='review-section'>
            <div className='review-details'>
                <img src={img} alt="" />
                <button onClick={() => { removeHandler(key) }}>Remove</button>
            </div>
            <div className='review-name'>
                <h4>{name}</h4>
                <p>Price: <strong>{price * quantity}</strong></p>
                <p><small>Seller: {seller}</small></p>
                <p className='quantity-control'>Quantity: { "    " }
                    <button ref={quantityValueRef} onClick={plusBtnHandler} className='btn btn-plus'><FontAwesomeIcon icon={faPlus} /> </button> { "    " }
                    <span className='item-quantity'>{quantity}</span>
                    <button className='btn btn-minus'><FontAwesomeIcon icon={faMinus} /></button> 
                </p>

            </div>
        </div>
    );
};

export default ReviewItemProduct;