import React, {useState} from 'react';
import s from './Portfolio.module.scss';
import GlobalStyle from "../../styles/GlobalStyle.module.scss";
import {Card} from "./components/card/Card";
import {info_card, portfolio_data} from "../../constants/infoData";
import {Scrollbars} from "react-custom-scrollbars-2";


export const Portfolio = () => {
    const [indexActive, setIndexActive] = useState(0);
    const [active, setActive] = useState(true);

    const sliderHandler = (index) => {
        setActive(false);
        setTimeout(() => {
            setActive(true);
            setIndexActive(index);
        }, 400);
    }

    return (
        <div className={GlobalStyle.root + ' ' + s.root}>
            <div className={GlobalStyle.box}>
                <div className={s.main}>
                    <div className={s.header}>
                        <div className={GlobalStyle.CustomFontBold + ' ' + s.title} >
                            PORTFOLIO
                        </div>
                        <div className={GlobalStyle.CustomFontBold + ' ' + s.label} >
                            Ряд Моих Работ
                        </div>
                        <div className={GlobalStyle.CustomFontLite + ' ' + s.text} >
                            Тут отображены серии мои работ,<br/>для получения актуального протфолио<br/>свяжитесь со мной через указаные ниже контакты.
                        </div>
                    </div>
                    <div className={s.menu_full}>
                        {info_card?.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => sliderHandler(index)}
                                className={GlobalStyle.CustomFontRegular + ' ' + (indexActive === index ? s.menu_item_active : s.menu_item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className={s.menu}>
                        <Scrollbars style={{width: '100%', height: '100%'}}>
                            <div className={s.fil}>
                            {info_card?.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => sliderHandler(index)}
                                    className={GlobalStyle.CustomFontRegular + ' ' + (indexActive === index ? s.menu_item_active : s.menu_item)}
                                >
                                    {item}
                                </div>
                            ))}
                            </div>
                        </Scrollbars>
                    </div>
                    <div className={active ? s.slider : s.slider_null}>
                        {portfolio_data[indexActive]?.map((item, index) => (
                            <Card data={item} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
