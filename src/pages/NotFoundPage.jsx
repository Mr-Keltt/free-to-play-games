import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <h1>Упс, что-то пошло не так! Вернуться <Link to="/"> на главную</Link></h1>
        </>
    );
}

export default NotFoundPage;