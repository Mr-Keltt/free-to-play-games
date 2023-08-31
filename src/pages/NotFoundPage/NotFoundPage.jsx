import React from 'react';
import {Col, Row} from "antd";
import classes from "./NotFoundPage.module.css";
import GoHome from "../../components/UI/GoHome/GoHome";

const NotFoundPage = () => {
    const goHomeTextStyles = {
        'font-size': '20px',
        'padding-left': '10px',
    }

    const goHomeArrowStyles = {
        'fontSize': '20px',
    }

    return (
        <Row
            justify={"center"}
            className={classes.notFoundPage}
        >
            <Col>
                <Row
                    justify={"center"}
                    className={classes.notFoundPageMessage}
                >
                    <Col>
                        <h1>Стрница не найдена!</h1>
                    </Col>
                </Row>

                <Row
                    justify={"center"}
                    className={classes.goHome}
                >
                    <Col>
                        <GoHome arrowStyles={goHomeArrowStyles} textStyles={goHomeTextStyles}/>
                    </Col>
                </Row>
            </Col>


        </Row>
    );
}

export {NotFoundPage};