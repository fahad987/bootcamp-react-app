import React from 'react';

function Dinner (props){
    return(
        <div>

        <h1>Today We Are Serving {props.dishName} </h1>
        <h1>Today We Are Serving SweetDish {props.sweetDish}</h1>
        
        </div>
    );
}

export default Dinner;

