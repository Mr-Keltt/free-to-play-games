import React, {} from 'react';
import {Row} from "antd";
import "../style/App.css"
import GameCard from "./UI/GameCard/GameCard";

const GameList = ({games}) => {
    return (
        <Row className={"gameList"}>
            {games.map((game) =>
                <GameCard game={game} key={game.id.toString()}/>
            )}
        </Row>
    );
};

export default GameList;