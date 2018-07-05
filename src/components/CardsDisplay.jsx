import React, { Component } from 'react';
import Card from './Card.jsx'

const CardsDisplay = ({ characterLists }) => {
    const characterArray = characterLists.map((data, i) => {
        return <Card data={data} key={i} />
    });
    return (
    <div className="cardsDisplay">
    <h1 className="characterList">CHARACTER LIST</h1>
        {characterArray}
    </div>
);
}



export default CardsDisplay;