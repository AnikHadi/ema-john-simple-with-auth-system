import React from 'react';
import googleLogo from '../../images/Google__G__Logo.svg.png';
import githubLogo from '../../images/github.png';
import './login.css';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, user } = useAuth();
    const googleHandler = () => {
        signInUsingGoogle();
    }
    const githubHandler = () => {
    }
    return (
        <div className='login-page'>
            {user.displayName && <h1>Login user: {user.displayName}</h1>}
            <h3>Login with</h3>
            
            <div className='brand-logo'>
                <btn onClick={googleHandler} className='google-logo'><img src={googleLogo} alt="" /></btn>
                <btn onClick={githubHandler} className='github-logo'><img src={githubLogo} alt="" /></btn>
            </div>
        </div>
    );
};

export default Login;