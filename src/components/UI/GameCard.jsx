import React, {useState} from 'react';
import classes from './GameCard.module.css';
import {Col, Row} from "antd";
import { Typography } from 'antd';
const { Text } = Typography;

const GameCard = ({imgSrc, name, date, publisher, genres}) => {
    return (
        <Col className={classes.gameCard}
            xs={{span: 22, offset: 1}}
            sm={{span: 22, offset: 1}}
            md={{span: 16, offset: 4}}
        >
            <Row gutter={16}>
                <Col md={{span: 4}}>
                    <img src={imgSrc} alt={"img"}></img>
                </Col>

                <Col md={{span: 6}}>
                    <Row justify={"space-between"}>
                        <Col>
                            <h3>{name}</h3>
                        </Col>
                    </Row>

                    <Row justify={"space-between"} className={classes.secondary}>
                        <Col>
                            <text>{publisher}</text>
                        </Col>
                        <Col>
                            <text>{date}</text>
                        </Col>
                    </Row>
                </Col>

                <Col
                    md={{span: 14}}
                    className={classes.genreContainer}
                >
                    {genres.map((genre) =>
                        <Text code>{genre}</Text>
                    )}
                </Col>
            </Row>
        </Col>
    );
};

export default GameCard;