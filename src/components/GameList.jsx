import React from 'react';
import {Row, Col} from "antd";
import "../style/App.css"
import GameCard from "./UI/GameCard";

const GameList = () => {
    return (
        <Row className={"gameList"}>
            <GameCard
                key={1}
                imgSrc={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F526%2F395%2Fpng-transparent-number-graphy-1-miscellaneous-computer-network-angle.png&tbnid=FfE11OhpPtv3lM&vet=12ahUKEwjSs66w-P2AAxXlMRAIHTvcDzwQMygAegQIARA0..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fru%2Fsearch%3Fq%3D1&docid=DCdjT_Wt1PxPOM&w=920&h=920&q=1&ved=2ahUKEwjSs66w-P2AAxXlMRAIHTvcDzwQMygAegQIARA0"}
                name={"Name"}
                publisher={"publisher"}
                genres={["g1", "g2"]}
                date={"11.11.1111"}
            />
        </Row>
    );
};

export default GameList;