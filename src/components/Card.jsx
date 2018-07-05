import React from 'react';


const Card = ({ data }) => { 
    return (
        <div className='card'>
            <img alt="character" src={data.image}/>
        <div>
        <h2>Name: {data.name}</h2>
        <p>Status: {data.status}</p>
        <p>Species: {data.species}</p>
        </div>
        </div>
    )
}

export default Card;