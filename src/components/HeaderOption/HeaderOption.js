import { Avatar } from '@mui/material';
import React from 'react';
import './HeaderOption.css';

function HeaderOption(props) {
    return (
        <div className='headerOption'>
            {props.icon && <props.icon className='headerOption-icon' />}
            {props.avatar && <Avatar className='headerOption-icon' src={props.avatar} />}
            <h4 className='headerOption-title'>{props.title}</h4>
        </div>
    )
}

export default HeaderOption