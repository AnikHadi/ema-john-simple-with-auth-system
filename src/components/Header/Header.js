import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png'
import './Header.css';
import logoutLogo from '../../images/sign Out.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const { user, logOut } = useFirebase();
    // console.log(user);

    const logOutHandle = () => {
        logOut();
    }

    return (
        <div className='header'>
            <div className='brand-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-link'>
                <nav>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/review'>Order Review</NavLink>
                    <NavLink to='/manage'>Manage Inventory here</NavLink>
                    {
                        user.email ? <span className='user-details'><img className='user-name' src={user.photoURL} alt="" /><button onClick={logOutHandle} className='log-out-btn'><img src={logoutLogo} alt="" /></button></span> :<NavLink to='/login'>Login</NavLink> 
                    }
                </nav>
                <h6 className='mx-auto'><FontAwesomeIcon icon={faShoppingCart} /> </h6>
            </div>

        </div>
    );
};

export default Header;