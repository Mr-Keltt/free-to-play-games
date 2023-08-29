import React, { useState } from 'react';
import {Route, Link, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import GamePages from "./pages/GamePages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePages />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
