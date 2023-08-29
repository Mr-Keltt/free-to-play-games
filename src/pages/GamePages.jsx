import React from 'react';
import {useLoaderData} from "react-router";

function GamePages() {
    const {game, id} = useLoaderData()

    return (
        <>
            <h1>{game.title}</h1>
            <img src={game.thumbnail} alt={"thumbnail"}></img>
        </>
    );
}

const gameLoader = async ({params}) => {
    const id = params.id;
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '906bbbe9d9msh5d6266dfc08d989p1f9678jsn2f4f721153fd',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const game = await response.json();

        return {game, id}
    } catch (error) {
        console.error(error);
    }
}

export {GamePages, gameLoader};