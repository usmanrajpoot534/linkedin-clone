import React, { useState } from 'react';
import './Auth.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function Auth() {
    const [isLoginPage, setLoginPage] = useState(false);

    const _togglePage = () => {
        setLoginPage(!isLoginPage);
    }

    return (
        <div className='auth'>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MM3d3wXnnH-eA0UrWsYyXCfBLIPSOY-WAQ&s'
                alt=''
            >
            </img>
            {isLoginPage ? <Login /> : <Signup />}
            {isLoginPage
                ?
                <p> Not a member? <span className='already-member' onClick={_togglePage} >Register now</span></p>
                :
                <p>Already a member? <span className='not-member' onClick={_togglePage}>Login now</span></p>
            }

        </div>
    );
}

export default Auth