import React, {Suspense} from 'react';
import {Await, defer, useLoaderData} from "react-router";
import Game from "../components/Game";
import {checkFetch} from "../helper";
import Loader from "../components/UI/Loader/loader";

function GamePages() {
    const {game} = useLoaderData();

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Await resolve={game}>
                    <Game></Game>
                </Await>
            </Suspense>
        </>
    );
}

const getGame = async (id) => {
    if (localStorage.getItem(`${id}`) !== null) {
        const gameCash = JSON.parse(localStorage.getItem(`${id}`))

        return gameCash.game
    }

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '906bbbe9d9msh5d6266dfc08d989p1f9678jsn2f4f721153fd',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    checkFetch(response);

    const game = await response.json()

    localStorage.setItem(`${id}`, JSON.stringify({game, dateCash: Date.now()}))

    return game;
}

const gameLoader = async ({params}) => {
    const id = params.id;

    return defer({
        game: getGame(id)
    })
}

export {GamePages, gameLoader};