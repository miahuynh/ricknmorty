import React from 'react';


const Card = ({ characters }) => {
    return (
        <div className='card'>
            <img alt="character" src={characters}/>
        <div>
        <h2>{characters}</h2>
        <p>ricksanchex@gmail.com</p>
        </div>
        </div>
    )
}

export default Card;