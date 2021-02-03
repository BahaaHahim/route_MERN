import React from 'react';
const WordComponent = props => {
    const styles ={
        backgroundColor : props.bc,
        color : props.c
    }
    return (
        <p style={styles}>the word is : {props.w}</p>
    )
}

export default WordComponent;