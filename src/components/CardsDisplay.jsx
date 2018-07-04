import React, { Component } from 'react';
import Card from './Card.jsx'

const CardsDisplay = ({ characters }) => (
    <div className="cardsDisplay">
    <h1>Character List (Cards Display)</h1>
    <Card characters = {characters} />
    <Card characters = {characters} />
    <Card characters = {characters} />
    </div>
);

export default CardsDisplay;