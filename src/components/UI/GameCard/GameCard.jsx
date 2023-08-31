import React, {} from 'react';
import '../../../style/ContentContainer.css';
import classes from './GameCard.module.css';
import {Col, Row} from "antd";
import { Typography } from 'antd';
import {Link} from "react-router-dom";
const { Text } = Typography;

const GameCard = (props) => {
    return (
        <Col className={`${classes.gameCard}`}
            xs={{span: 22}}
            sm={{span: 22}}
            md={{span: 16}}
        >
            <Link to={`/game/${props.game.id}`} className={`${classes.toGame} contentContainer`}>
                <Row gutter={16} className={classes.content}>
                    <Col md={{span: 4}}>
                        <img src={props.game.thumbnail} alt={"img"}></img>
                    </Col>

                    <Col md={{span: 6}}>
                        <Row justify={"space-between"}>
                            <Col>
                                <h3>{props.game.title}</h3>
                            </Col>
                        </Row>

                        <Row
                            justify={"space-between"}
                            className={`${classes.secondary}`}
                        >
                            <Col>
                                <h4>{props.game.publisher}</h4>
                            </Col>
                            <Col>
                                <h4>{props.game.release_date}</h4>
                            </Col>
                        </Row>
                    </Col>

                    <Col
                        md={{span: 14}}
                        className={classes.genreContainer}
                    >
                            <Text code>{props.game.genre}</Text>
                    </Col>
                </Row>
            </Link>
        </Col>
    );
};

export default GameCard;