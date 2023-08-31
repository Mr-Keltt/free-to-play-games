import React from 'react';
import {Link} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";
import classes from "./GoHome.module.css";
import {Col, Row} from "antd";

const GoHome = (props) => {

    const {arrowStyles, textStyles, arrowSize} = props;

    return (
        <Link
            to="/"
            className={classes.goHome}
        >
            <Row>
                <Col fontSize={arrowSize} style={arrowStyles}><ArrowLeftOutlined /></Col>
                <Col style={textStyles}>На главную</Col>
            </Row>


        </Link>
    );
};

export default GoHome;