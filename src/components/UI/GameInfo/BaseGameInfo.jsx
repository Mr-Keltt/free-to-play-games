import React from 'react';
import {Col, Row} from "antd";
import InformationRow from "./InformationRow";
import classes from "./GameInfo.module.css";

const BaseGameInfo = (props) => {
    const { game } = props;

    return (
        <Row
            className={classes.baseGameInfo}
            gutter={[40, 0]}
        >
            <Col>
                <img src={game.thumbnail} alt={"thumbnail"}></img>
            </Col>
            <Col
                className={classes.baseGameInfoText}
            >
                <Row className={classes.gameTitle}>
                    <Col>
                        <h1>{game.title}</h1>
                    </Col>
                </Row>

                <div>
                    <InformationRow title={"Издатель:"} body={game.publisher} />
                    <InformationRow title={"Разрамотчик:"} body={game.developer} />
                    <InformationRow title={"Дата релеиза:"} body={game.release_date} />
                    <InformationRow title={"Жанр:"} body={game.genre} />
                </div>
            </Col>
        </Row>
    );
};

export default BaseGameInfo;