import React from 'react';
import {Carousel} from "antd";
import classes from "./GameInfo.module.css";

const ScreenshotsGame = (props) => {
    const { screenshots } = props;

    return (
        <Carousel
            autoplay
            className={classes.screenshotsGame}
        >
            {screenshots.map((screenshot) =>
                    <img src={screenshot.image} key={screenshot.id}></img>
            )}
        </Carousel>
    );
};

export default ScreenshotsGame;