import React, { } from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {HomePage, gamesLoader} from "./pages/HomePage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {gameLoader, GamePage} from "./pages/GamePage/GamePage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {gameLoader, GamePage} from "./pages/GamePage/GamePage";
import {Layout} from "./components/Layout/Layout";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";
import {cleadGamesCash} from "./helper"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout /> } >
        <Route index element={<HomePage />} loader={gamesLoader} errorElement={<ErrorPage/>} />
        <Route path="/game/:id" element={<GamePage />} loader={gameLoader} errorElement={<ErrorPage/>} />
        <Route path="*" element={<NotFoundPage />} />
    </Route>
))

function App() {
    setInterval(cleadGamesCash, 60000);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
