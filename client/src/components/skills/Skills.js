import React from 'react';
import s from './Skills.module.scss';
import GlobalStyle from "../../styles/GlobalStyle.module.scss";
import {Card} from "./components/card/Card";
import {info_skills} from "../../constants/infoData";


export const Skills = () => {
    return (
        <div className={GlobalStyle.root + ' ' + s.root}>
            <div className={GlobalStyle.box}>
                <div className={s.main}>
                    <div className={s.header}>
                        <div className={GlobalStyle.CustomFontBold + ' ' + s.title} >
                            SERVICES
                        </div>
                        <div className={GlobalStyle.CustomFontBold + ' ' + s.label} >
                            Профессиональные Навыки
                        </div>
                        <div className={GlobalStyle.CustomFontLite + ' ' + s.text} >
                            Мною разработанно более 100 решений<br/>имеющие высокое качество как графических материалов,<br/> так и внутренних алгоритмов работы приложений.
                        </div>
                    </div>
                    <div className={s.list_card}>
                        {info_skills?.map((item, index) => (
                            <div className={s.border}>
                                <Card data={item} key={index}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
