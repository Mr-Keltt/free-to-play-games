import React from 'react';
import {Col, Row} from "antd";

const Publication = (props) => {
    const {publisher, releaseDate} = props

    return (
        <div>
            <Row justify={"end"}>
                <Col>
                    <h4>{publisher}</h4>
                </Col>
            </Row>

            <Row justify={"end"}>
                <Col>
                    <h4>{releaseDate}</h4>
                </Col>
            </Row>
        </div>
    );
};

export default Publication;