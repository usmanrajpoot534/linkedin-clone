import React from 'react';
import './AppButton.css';

function AppButton(props) {
    return (
        <button className='app-button'
            onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default AppButton