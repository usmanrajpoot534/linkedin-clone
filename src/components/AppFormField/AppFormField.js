import React from 'react';
import './AppFormField.css';

function AppFormField(props) {
    return (
        <input className='app-form-field'
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}>
        </input>
    )
}

export default AppFormField