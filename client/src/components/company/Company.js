import React from 'react';
import s from './Company.module.scss';
import GlobalStyle from "../../styles/GlobalStyle.module.scss";
import {Card} from "./components/card/Card";
import {company_data, info_card} from "../../constants/infoData";
import {Scrollbars} from "react-custom-scrollbars-2";


export const Company = () => {
    return (
        <div className={GlobalStyle.root + ' ' + s.root}>
            <div className={GlobalStyle.box}>
                <div className={s.main}>
                    <div className={s.header}>
                        <div className={GlobalStyle.CustomFontBold + ' ' + s.title} >
                            COMPANY
                        </div>
                        <div className={GlobalStyle.CustomFontBold + ' ' + s.label} >
                            Сотрудничество
                        </div>
                        <div className={GlobalStyle.CustomFontLite + ' ' + s.text} >
                            Плодотворное сотрудничество с копаниями<br/>приводт к появлению новых, эффективных<br/>решений на рынке.
                        </div>
                    </div>
                    <div className={s.slider}>
                        {company_data?.map((item, index) => (
                            <Card data={item} key={index}/>
                        ))}
                    </div>
                    <div className={s.slider_mini}>
                        <Scrollbars style={{width: '100%', height: '100%'}}>
                            <div className={s.fil}>
                                {company_data?.map((item, index) => (
                                    <Card data={item} key={index}/>
                                ))}
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </div>
    );
};
