import React, {useState} from 'react';
import GameList from "../components/GameList";

function HomePage(props) {
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
        <>
            <GameList games={games}></GameList>
        </>
    );
}

export default HomePage;