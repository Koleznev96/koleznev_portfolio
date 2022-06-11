import React from 'react';
import s from './CardImage.module.scss';
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import GlobalStyle from "../../../../styles/GlobalStyle.module.scss";
import profile from '../../../../assets/image/profile.png';


export const CardImage = () => {
    return (
        <div className={s.card_image}>
            <img src={profile} className={s.profile} alt={"Koleznev Aleksey"}/>
        </div>
    );
};
