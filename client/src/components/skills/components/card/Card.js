import React from 'react';
import s from './Card.module.scss';
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import GlobalStyle from "../../../../styles/GlobalStyle.module.scss";


export const Card = ({data}) => {
    return (
        <div className={s.card}>
            <div className={s.box}>
                <div className={s.center}>
                    <GlobalSvgSelector id={data?.icon} />
                    <div className={GlobalStyle.CustomFontMedium + ' ' + s.title} >
                        {data?.title}
                    </div>
                    <div className={GlobalStyle.CustomFontLite + ' ' + s.label} >
                        {data?.label}
                    </div>
                </div>
            </div>
            <div className={GlobalStyle.CustomFontLite + ' ' + s.counter} >
                {data?.counter}
            </div>
            <div className={GlobalStyle.CustomFontLite + ' ' + s.text} >
                {data?.text}
            </div>
        </div>
    );
};
