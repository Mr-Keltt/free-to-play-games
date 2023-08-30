import { Col, Row } from "antd";
import React from "react";
import {useAsyncValue} from "react-router";

const Game = () => {
    const game = useAsyncValue();

    return (
        <>
            <Row>
                <Col>
                    <img src={game.thumbnail} alt={"thumbnail"}></img>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h1>{game.title}</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>Издатель: {game.publisher}</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>Разрамотчик: {game.developer}</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>Дата релеиза: {game.release_date}</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>Жанр: {game.genre}</h3>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>Системные требования</h2>
                </Col>
            </Row>
        </>
    );
};

export default Game;