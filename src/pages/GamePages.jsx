import React, {Suspense} from 'react';
import {Await, defer, useLoaderData} from "react-router";
import Game from "../components/Game";

function GamePages() {
    const {game} = useLoaderData();

    return (
        <>
            <Suspense fallback={<h1>Загрузка...</h1>}>
                <Await resolve={game}>
                    <Game></Game>
                </Await>
            </Suspense>
        </>
    );
}

const getGame = async (id) => {
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
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

const gameLoader = async ({params}) => {
    const id = params.id;

    return defer({
        game: getGame(id)
    })
}

export {GamePages, gameLoader};