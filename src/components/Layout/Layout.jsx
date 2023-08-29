import React from 'react';
import "./Layout.module.css";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <header >
                <h1>Header</h1>
            </header>

            <div className={"content"} >
                <Outlet />
            </div>

            <footer>
                <h2>footer</h2>
            </footer>
        </>
    );
}

export {Layout};