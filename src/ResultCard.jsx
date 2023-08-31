
import React from 'react';

export default function ResultCard(props){

    return(
        <div className='ResultHeading-Container'>
            <h3 className = 'time-Style'>{props.value}</h3>
            <h3 >{props.time}</h3>
        </div>

    );
};