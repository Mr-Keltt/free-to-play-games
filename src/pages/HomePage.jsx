import React, {Suspense} from 'react';
import GameList from "../components/GameList";
import {Await, defer, useLoaderData} from "react-router";


const HomePage = () => {
    const {games} = useLoaderData();

    return (
        <>
            <Suspense fallback={<h1>Загрузка...</h1>}>
                <Await resolve={games}>
                    <GameList></GameList>
                </Await>
            </Suspense>
        </>
    );
}

const getGames = async () => {
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

const gamesLoader = async () => {
    return defer({
        games: getGames()
    })
}

export {HomePage, gamesLoader};