import React from 'react';
import {Col, Row, Select} from "antd";

const FilterSelect = (props) => {
    const {text, defaultValue, onChange, options} = props

    return (
        <Col span={8}>
            <Row
                justify={"center"}
                gutter={20}
            >
                <Col>
                    <p>{text}</p>
                </Col>
                <Col>
                    <Select
                        defaultValue={defaultValue}
                        style={{ width: 130 }}
                        onChange={onChange}
                        options={options}
                    />
                </Col>
            </Row>
        </Col>
    );
};

export default FilterSelect;