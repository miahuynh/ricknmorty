import React, { Component } from 'react';
import Card from './Card.jsx'

const CardsDisplay = ({ characterLists }) => {
    const characterArray = characterLists.map((data, i) => {
        return <Card data={data} key={i} />
    });
    return (
    <div className="cards-container">
            <h1 className="characterList">CHARACTER LIST</h1>
        <div className="cardsDisplay">
            {characterArray}
        </div>
    </div>
);
}



export default CardsDisplay;