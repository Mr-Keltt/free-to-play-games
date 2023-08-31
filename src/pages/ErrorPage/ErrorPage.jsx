import React from 'react';
import {useRouteError} from "react-router-dom";
import classes from "./ErrorPage.module.css";
import {Col, Row} from "antd";

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error)
    return (
        <Row
            className={classes.errorPage}
            justify={"center"}
        >
            <Col>
                <Row justify={"center"}>
                    <Col>
                        <h1 className={classes.errStatus}>{error.status}</h1>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col>
                        <h2 className={classes.errMessage}>{error.statusText|| "Что-то сломалось!"}</h2>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export {ErrorPage};