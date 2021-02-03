import React from 'react';
const NumberComponent = (props) => {

    return (
        <div>
                   { isNaN(props.id) ? <p> the word is {props.id} </p> : <p> the number is {props.id} </p> }

        </div>
    )
}

export default NumberComponent;