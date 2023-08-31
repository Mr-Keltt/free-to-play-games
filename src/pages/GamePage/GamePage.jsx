import React, {Suspense} from 'react';
import {Await, defer, useLoaderData} from "react-router";
import GameInfo from '../../components/UI/GameInfo/GameInfo'
import Loader from "../../components/UI/Loader/loader";
import {checkFetch} from "../../helper";
import classes from "./GamePage.module.css";
import GoHome from "../../components/UI/GoHome/GoHome";
import {Col, Row} from "antd";

function GamePage() {
    const {game} = useLoaderData();

    const goHomeStyles = {
        marginLeft: '10px',
    }

    const arrowStyles = {
        fontSize: '20px',
    }

    const textStyles = {
        fontSize: '20px',
        paddingLeft: '10px',
    }

    return (
        <Row
            className={classes.gamePages}
            justify={"center"}
        >
            <Col span={22}>
                <Row>
                    <Col span={24}>
                        <GoHome
                            goHomeStyles={goHomeStyles}
                            arrowStyles={arrowStyles}
                            textStyles={textStyles}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <Suspense fallback={<Loader />}>
                            <Await resolve={game}>
                                <GameInfo></GameInfo>
                            </Await>
                        </Suspense>
                    </Col>
                </Row>
            </Col>
        </Row>
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

export {GamePage, gameLoader};