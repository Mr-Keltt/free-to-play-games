import React, {Suspense} from 'react';
import GameList from "../components/GameList";
import Loader from "../components/UI/Loader/loader";
import {Await, defer, useLoaderData} from "react-router";
import {checkFetch} from "../helper";
import {Col, Row} from "antd";
import FilteringRow from "../components/UI/FilteringRow/FilteringRow";
import {getFilterObject} from "../helper";


const HomePage = () => {
    const {games} = useLoaderData();

    return (
        <>
            <Row>
                <Col span={24}>
                    <FilteringRow />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Suspense fallback={<Loader />}>
                        <Await resolve={games}>
                            <GameList />
                        </Await>
                    </Suspense>
                </Col>
            </Row>
        </>
    );
}

const getGames = async (params) => {
    const filterObject = getFilterObject(params)

    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '906bbbe9d9msh5d6266dfc08d989p1f9678jsn2f4f721153fd',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    checkFetch(response);

    return await response.json()
}

const gamesLoader = async ({params}) => {
    return defer({
        games: getGames(params)
    })
}

export {HomePage, gamesLoader};