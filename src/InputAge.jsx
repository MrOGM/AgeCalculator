import React from 'react';
import { useState } from 'react';
import './App.css'

export default function InputAge(props){

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = async (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        
        await props.onAgeChange(newValue, props.Empty);

      };

    return(
        <div className='InputBox-style'>
            <h2 className=' InputHeading-Style'>
                {props.time}
            </h2>

            <input 
                type = "text"
                value = {inputValue}
                onChange={handleInputChange}
                placeholder={props.Empty}
                className=' InputPlaceholder-Style'
            />
        </div>
    );

}