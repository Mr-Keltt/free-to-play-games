import React from 'react';
import {Col, Row} from "antd";
import classes from "./GameInfo.module.css";

const InformationRow = (props) => {
    const { title, body } = props;

    return (
        <Row
            className={classes.informationRow}
            justify={"space-between"}
            gutter={[30, 0]}
        >
            <Col className={classes.title}>
                <h3 >{title}</h3>
            </Col>

            <Col className={classes.title}>
                <h3>{body}</h3>
            </Col>
        </Row>
    );
};

export default InformationRow;