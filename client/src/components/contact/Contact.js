import React from 'react';
import s from './Contact.module.scss';
import GlobalStyle from "../../styles/GlobalStyle.module.scss";
import {Card} from "./components/card/Card";
import {company_data, contact_data} from "../../constants/infoData";


export const Contact = () => {
    return (
        <div className={GlobalStyle.root + ' ' + s.root}>
            <div className={GlobalStyle.box}>
                <div className={s.main}>
                    <div className={s.header}>
                        <div className={GlobalStyle.CustomFontBold + ' ' + s.title} >
                            CONTACTS
                        </div>
                        <div className={GlobalStyle.CustomFontBold + ' ' + s.label} >
                            Мои Контакты
                        </div>
                        <div className={GlobalStyle.CustomFontLite + ' ' + s.text} >
                            По любым вопросам и условиям сотрудничества<br/>можете связатся со мной по данным котактам,<br/>моя часовой пояс UTC +7 (GMT +7).
                        </div>
                    </div>
                    <div className={s.slider}>
                        {contact_data?.map((item, index) => (
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
