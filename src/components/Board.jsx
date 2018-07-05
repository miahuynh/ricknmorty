import React, { Component } from 'react';
import CardsDisplay from './CardsDisplay.jsx'
import axios from 'axios';
import SearchBox from './SearchBox.jsx';
import './Board.css'


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterLists: [],
            searchField: ''
        }
        this.getCharacters = this.getCharacters.bind(this);
    }

    onSearchChange(event) {
        console.log(event.target.value);
    }

    getCharacters(numbers) {
        axios(`https://rickandmortyapi.com/api/character/${numbers}`)
        .then((characters) => {
            this.setState({
                characterLists: characters.data.map(({image, name, status, species, gender, created}) => ({image, name, status, species, gender, created}))
            })
        })
        .catch((err) => console.error(err));
    }

    componentDidMount() {
        const arr = [];
        for (let i = 0; i < 8; i++) {
            arr.push(Math.floor(Math.random() * 320))
        }
        this.getCharacters(arr);
    }
    

    render() {
        return (
                <div className="board">
                <h1 className="title">Get Schwifty</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardsDisplay characterLists={this.state.characterLists} />
                </div>
            )
    }
}

export default Board;