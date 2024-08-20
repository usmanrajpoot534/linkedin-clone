import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AppButton from '../../../components/AppButton/AppButton';
import AppFormField from '../../../components/AppFormField/AppFormField';
import { auth } from '../../../firebase/firebase';
import { login } from '../../user/userSlice';
import './Signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const _signup = () => {
        if (!name) {
            return alert('please enter your full name');
        }

        console.log(email);
        createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
            updateProfile(userAuth.user, {
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch(
                    login({
                        email: email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                    })
                );
            });
        }).catch((error) => alert(error.message));
    };

    return (
        <div className='signup'>
            <form>
                <AppFormField
                    placeholder='Full Name (required if registering)'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <AppFormField
                    placeholder='Profile pic URL (optional)'
                    type='text'
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                />
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
                <AppButton label='Signup' type='submit' onClick={_signup} />
            </form>
        </div>
    )
}

export default Signup