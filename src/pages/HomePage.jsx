import React, {} from 'react';
import GameList from "../components/GameList";
import {useLoaderData} from "react-router";


const HomePage = () => {
    const games = useLoaderData();

    return (
        <>
            <GameList games={games}></GameList>
        </>
    );
}

const gameLoader = async () => {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '906bbbe9d9msh5d6266dfc08d989p1f9678jsn2f4f721153fd',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        return await response.json()
    } catch (error) {
        console.error(error);
    }
}

export {HomePage, gameLoader};