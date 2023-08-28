import React, { useState } from 'react';
import GameList from "./components/GameList";

function App() {
    const [games, setGames] = useState([
        {
            id: 1,
            name: 'Name',
            imgSrc: '',
            publisher: 'publisher',
            genres: ['g1', 'g2'],
            date: '11.11.1111',
        },
        {
            id: 2,
            name: 'Name',
            imgSrc: '',
            publisher: 'publisher',
            genres: ['g1', 'g2'],
            date: '11.11.1111',
        },
        {
            id: 3,
            name: 'Name',
            imgSrc: '',
            publisher: 'publisher',
            genres: ['g1', 'g2'],
            date: '11.11.1111',
        },
    ])

    return (
        <div className="App">
            <GameList games={games}></GameList>
        </div>
    );
}

export default App;
