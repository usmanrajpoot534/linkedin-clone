import React from 'react';
import './HeaderOption.css';

function HeaderOption(props) {
    return (
        <div className='headerOption'>
            {props.icon && <props.icon className='headerOption-icon' />}
            <h3 className='headerOption-title'>{props.title}</h3>
        </div>
    )
}

export default HeaderOption