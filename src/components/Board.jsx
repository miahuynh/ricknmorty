import React, { Component } from 'react';
import CardsDisplay from './CardsDisplay.jsx'
import axios from 'axios';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: "",
        }

    }
    componentDidMount() {
        axios('https://rickandmortyapi.com/api/character/2')
        .then((characters) => {
            this.setState({ 
                characters : characters.data.image
                })
        })
        .catch((err) => console.error(err));
    }
    render() {
        return (
            <div className="board">
            <h1 className="title">RICK AND MORTY (BOARD)</h1>
            <CardsDisplay characters = { this.state.characters } />
            </div>
        )
    }
}

export default Board;