import React, {useState} from 'react';
import s from './CardSlider.module.scss';
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import GlobalStyle from "../../../../styles/GlobalStyle.module.scss";
import {info_slider} from "../../../../constants/infoData";


export const CardSlider = () => {
    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState(true);

    const sliderNextHandler = () => {
        setActive(false);
        setTimeout(() => {
            setActive(true);
            setCurrent(info_slider?.length <= current + 1 ? 0 : current + 1);
        }, 600);
    }

    const sliderPrevHandler = () => {
        setActive(false);
        setTimeout(() => {
            setActive(true);
            setCurrent(0 >= current ? info_slider?.length - 1 : current - 1);
        }, 600);
    }

    return (
        <div className={s.card_slider}>
            <div className={s.slider}>
                <div className={active ? s.transition : s.transition_null}>
                    <div className={GlobalStyle.CustomFontBold + ' ' + s.title} >
                        <div className="content" dangerouslySetInnerHTML={{__html: info_slider[current]?.title}}/>
                    </div>
                    <div className={GlobalStyle.CustomFontBold + ' ' + s.label} >
                        <div className="content" dangerouslySetInnerHTML={{__html: info_slider[current]?.label}}/>
                    </div>
                    <div className={GlobalStyle.CustomFontLite + ' ' + s.text} >
                        <div className="content" dangerouslySetInnerHTML={{__html: info_slider[current]?.text}}/>
                    </div>
                    <div className={GlobalStyle.wrapper_start}>
                        <a
                            className={GlobalStyle.CustomFontBold + ' ' + s.button_more}
                            href={"#section2"}
                        >
                            Подробнее ⤓
                        </a>
                    </div>
                </div>

                <div className={s.navigation_slider}>
                    <div className={s.navigation_min}>
                    <div
                        className={s.button_navigation}
                        onClick={() => sliderPrevHandler()}
                    >
                        <GlobalSvgSelector id={"prev"} />
                    </div>
                    <div className={GlobalStyle.CustomFontBold + ' ' + s.current_navigation} >
                        {current + 1}
                    </div>
                    <div
                        className={s.button_navigation}
                        onClick={() => sliderNextHandler()}
                    >
                        <GlobalSvgSelector id={"next"} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
