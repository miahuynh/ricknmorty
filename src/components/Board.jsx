import React, { Component } from 'react';
import CardsDisplay from './CardsDisplay.jsx'
import axios from 'axios';
import SearchBox from './SearchBox.jsx';
import './Board.css'
import Scroll from './Scroll.jsx';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterLists: [],
            searchField: ''
        }
        this.getCharacters = this.getCharacters.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        this.setState({searchField: event.target.value})
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
        for (let i = 0; i < 12; i++) {
            arr.push(Math.floor(Math.random() * 320))
        }
        this.getCharacters(arr);
    }
    

    render() {
        const filteredCharacters = this.state.characterLists.filter(character => {
            let name = character.name.toLowerCase();
            return name.includes(this.state.searchField.toLowerCase())
        });
        return (
                <div className="board">
                <h1 className="title">Get Schwifty</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardsDisplay characterLists={filteredCharacters} />
                </Scroll>
                </div>
            )
    }
}

export default Board;