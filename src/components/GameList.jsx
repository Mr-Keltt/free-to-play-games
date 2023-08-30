import React, {} from 'react';
import {Row} from "antd";
import "../style/App.css"
import GameCard from "./UI/GameCard/GameCard";
import {useAsyncValue} from "react-router";

const GameList = () => {
    const games = useAsyncValue();

    return (
        <Row className={"gameList"}>
            {games.map((game) =>
                <GameCard game={game} key={game.id.toString()}/>
            )}
        </Row>
    );
};

export default GameList;