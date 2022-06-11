import React from 'react';
import s from './Footer.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import GlobalStyle from "../../styles/GlobalStyle.module.scss";


export const Footer = () => {
    return (
        <div className={GlobalStyle.root + ' ' + s.root}>
            <div className={GlobalStyle.box}>
                <div className={s.main}>
                    <div className={GlobalStyle.CustomFontLite + ' ' + s.label}>
                        © &nbsp;Koleznev Aleksey &nbsp;&nbsp;  |  &nbsp;&nbsp; 2022
                    </div>
                </div>
            </div>
        </div>
    );
};
