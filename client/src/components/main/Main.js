import React from 'react';
import s from './Main.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import GlobalStyle from "../../styles/GlobalStyle.module.scss";
import {CardMe} from "./components/cardMe/CardMe";
import {CardImage} from "./components/cardImage/CardImage";
import {CardSlider} from "./components/cardSlider/CardSlider";


export const Main = () => {
    return (
        <div className={GlobalStyle.root + ' ' + s.root} id="section1">
            <div className={GlobalStyle.box}>
                <div className={s.main}>
                    <div className={s.max_block}>
                        <CardMe />
                    </div>
                    <CardImage />
                    <CardSlider />
                    <div className={s.min_block}>
                        <CardMe />
                    </div>
                </div>
            </div>
        </div>
    );
};
