import React from "react";
import {useAsyncValue} from "react-router";

const Game = () => {
    const game = useAsyncValue();

    return (
        <>
            <h1>{game.title}</h1>
            <img src={game.thumbnail} alt={"thumbnail"}></img>
        </>
    );
};

export default Game;