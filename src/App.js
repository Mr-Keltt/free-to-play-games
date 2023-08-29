import React, { } from 'react';
import {Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import GamePages from "./pages/GamePages";
import {Layout} from "./components/Layout/Layout";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout /> } >
        <Route index element={<HomePage />} />
        <Route path="/game/:id" element={<GamePages />} />
        <Route path="*" element={<NotFoundPage />} />
    </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
