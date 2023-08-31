import React from 'react';
import classes from './Loadel.module.css';
import {LoadingOutlined} from '@ant-design/icons';
import {Col, Row} from "antd";

const Loader = () => {
    return (
        <Row
            className={classes.loader}
            justify={"center"}
        >
            <Col span={1}>
                <LoadingOutlined />
            </Col>
        </Row>
    );
};

export default Loader;