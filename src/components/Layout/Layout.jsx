import React, {useEffect, useRef, useState} from 'react';
import "./Layout.module.css";
import {Outlet} from "react-router";
import {Col, Row} from "antd";

const Layout = () => {
    return (
        <>
            <header>
                <Row>
                    <Col>
                        <h1>Free-To-Play Games</h1>
                    </Col>
                </Row>
            </header>

            <div
                className={"content"}
                style={
                    {minHeight: '95vh'}
                }
            >
                <Outlet />
            </div>

            <footer>
                <Row
                    justify={"space-between"}
                >
                    <Col>
                        <p>База данных игр взята с Free-To-Play Games Database API</p>
                    </Col>
                    <Col>
                        <p>Сайт сделат в качестве тестого проэкта для поступления на Стажировку в AvitoTech</p>
                    </Col>
                </Row>
            </footer>
        </>
    );
}

export {Layout};