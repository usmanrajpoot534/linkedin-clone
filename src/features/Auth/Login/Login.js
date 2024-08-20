import React, { useState } from 'react';
import AppButton from '../../../components/AppButton/AppButton';
import AppFormField from '../../../components/AppFormField/AppFormField';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _login = (e) => {
        e.preventDefault();
        // Call your backend API with the email and password
        // console.log(email);
        // // Redirect to the home page or dashboard
        // window.location.href = '/';
    };

    return (
        <div className='signup'>
            <form>
                <AppFormField
                    placeholder='Email (required)'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <AppFormField
                    placeholder='Password (required)'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <AppButton label='Login' type='submit' onClick={_login} />
            </form>
        </div>
    );
}

export default Login