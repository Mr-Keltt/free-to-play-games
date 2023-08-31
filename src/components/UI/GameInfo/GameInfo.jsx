import { Col, Row } from "antd";
import React from "react";
import {useAsyncValue} from "react-router";
import BaseGameInfo from "./BaseGameInfo";
import SystemRequirements from "./SystemRequirements";
import ScreenshotsGame from "./ScreenshotsGame";
import '../../../style/ContentContainer.css';

const GameInfo = () => {
    const game = useAsyncValue();

    return (
        <>
            <Row justify={"center"}>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <div  className={"contentContainer"}>
                                <BaseGameInfo game={game}/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <div  className={"contentContainer"}>
                                <Row
                                    gutter={[30,30]}
                                >
                                    <Col
                                        md={{span: 16}}
                                        sm={{span: 24}}
                                        xs={{span: 24}}
                                    >
                                        <SystemRequirements systemRequirements={game.minimum_system_requirements}/>
                                    </Col>
                                    <Col
                                        md={{span: 8}}
                                        sm={{span: 24}}
                                        xs={{span: 24}}
                                    >
                                        <ScreenshotsGame screenshots={game.screenshots} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default GameInfo;