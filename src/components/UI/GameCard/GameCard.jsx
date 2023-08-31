import React, {} from 'react';
import '../../../style/ContentContainer.css';
import classes from './GameCard.module.css';
import {Col, Row, Tag} from "antd";
import {Link} from "react-router-dom";
import Publication from "./Publication";

const GameCard = (props) => {
    const { game } = props

    return (
        <Col className={`${classes.gameCard}`}
             md={{span: 16}}
             sm={{span: 22}}
             xs={{span: 22}}
        >
            <Link to={`/game/${game.id}`} className={`${classes.toGame}`}>

                <Row
                    justify={"space-between"}
                    className={`${classes.content} contentContainer`}
                    gutter={[20, 20]}
                >
                    <Col
                        className={classes.gameCardImageContainer}
                        md={{span: 8}}
                        sm={{span: 24}}
                        xs={{span: 24}}
                    >
                        <img
                            className={classes.gameCardImage}
                            src={game.thumbnail}
                            alt={"img"}
                        ></img>
                    </Col>


                    <Col
                        md={{span: 16}}
                    >
                        <div className={classes.gameCardTextBlock}>
                            <Row
                                justify={"space-between"}
                            >
                                <Col>
                                    <h2>{game.title}</h2>
                                </Col>

                                <Col>
                                    <Publication
                                        publisher={game.publisher}
                                        releaseDate={game.release_date}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col
                                    className={classes.gameCardDescription}
                                    span={24}
                                >
                                    <h3>
                                        {game.short_description}
                                    </h3>
                                </Col>
                            </Row>

                            <Row justify={"end"}>
                                <Col>
                                    <Tag color={'#7f8793'}>{game.genre}</Tag>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Link>
        </Col>
    );
};

export default GameCard;