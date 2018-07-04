import React, { Component } from 'react';


const Card = ({ characters }) => {
    return (
        <div>
            <img alt="character" src={characters}/>
        <div>
        <h2>Rick Sanchez</h2>
        <p>ricksanchex@gmail.com</p>
        </div>
        </div>
    )
}

export default Card;