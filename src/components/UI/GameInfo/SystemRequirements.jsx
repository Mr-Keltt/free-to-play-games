import React from 'react';
import {Col, Row} from "antd";
import InformationRow from "./InformationRow";
import '../../../style/ContentContainer.css';
import classes from "./GameInfo.module.css";

const SystemRequirements = (props) => {
    const { systemRequirements } = props

    return (
        <Row className={classes.systemRequirements}>
            <Col>
                <Row>
                    <Col className={classes.systemRequirementsTitle}>
                        <h2>Системные требования</h2>
                    </Col>
                </Row>

                <InformationRow title={"ОС:"} body={systemRequirements.os}></InformationRow>
                <InformationRow title={"Процессор:"} body={systemRequirements.processor}></InformationRow>
                <InformationRow title={"Память:"} body={systemRequirements.memory}></InformationRow>
                <InformationRow title={"Графика:"} body={systemRequirements.graphics}></InformationRow>
                <InformationRow title={"Место на диске:"} body={systemRequirements.storage}></InformationRow>
            </Col>
        </Row>
    );
};

export default SystemRequirements;