import React from 'react';
import {Col, Row, Select} from "antd";
import classes from "./Filter.module.css";

const FilterSelect = (props) => {
    const {text, defaultValue, onChange, options} = props

    return (
        <Col
            className={classes.filterSelect}
            md={{span: 6}}
            sm={{span: 24}}
            xs={{span: 24}}
        >
            <Row
                justify={"center"}
            >
                <Col
                    className={classes.filterSelectTitle}
                >
                    <p>
                        {text}
                    </p>
                </Col>
            </Row>

            <Row
                justify={"center"}
            >
                <Col
                    className={classes.filterSelectSelect}
                >
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