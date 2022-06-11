import React from 'react';
import s from './Card.module.scss';
import GlobalStyle from "../../../../styles/GlobalStyle.module.scss";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";


export const Card = ({data}) => {
    return (
        <div
            className={s.card}
        >
            <GlobalSvgSelector id={data?.icon} />
            <div className={GlobalStyle.CustomFontLite + ' ' + s.value} >
                {data?.value}
            </div>
        </div>
    );
};
