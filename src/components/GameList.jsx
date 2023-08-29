import React, { useState } from 'react';
import {Row, Col} from "antd";
import "../style/App.css"
import GameCard from "./UI/GameCard/GameCard";

const GameList = ({games}) => {
    return (
        <Row className={"gameList"}>
            {games.map((game) => 
                <GameCard game={game} key={game.id}/>
            )}
        </Row>
    );
};

export default GameList;