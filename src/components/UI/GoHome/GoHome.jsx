import React from 'react';
import {Link} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";
import classes from "./GoHome.module.css";
import {Col, Row} from "antd";

const GoHome = (props) => {

    const {arrowStyles, textStyles, arrowSize, goHomeStyles} = props;

    return (
        <Link
            to="/"
            className={classes.goHome}
        >
            <Row style={goHomeStyles}>
                <Col style={arrowStyles}><ArrowLeftOutlined /></Col>
                <Col style={textStyles}>На главную</Col>
            </Row>


        </Link>
    );
};

export default GoHome;