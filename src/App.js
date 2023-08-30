import React, { } from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {HomePage, gamesLoader} from "./pages/HomePage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {gameLoader, GamePages} from "./pages/GamePages";
import {Layout} from "./components/Layout/Layout";
import {ErrorPage} from "./pages/ErrorPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout /> } >
        <Route index element={<HomePage />} loader={gamesLoader} errorElement={<ErrorPage/>} />
        <Route path="/game/:id" element={<GamePages />} loader={gameLoader} errorElement={<ErrorPage/>} />
        <Route path="*" element={<NotFoundPage />} />
    </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
