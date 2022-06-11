import React from 'react';
import s from './CardMe.module.scss';
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import GlobalStyle from "../../../../styles/GlobalStyle.module.scss";


export const CardMe = () => {

    const contactHandler = () => {

    }

    return (
        <div className={s.card_me}>
            <div className={s.min_block}>
                <div className={s.min_label}>
                    <div className={GlobalStyle.CustomFontExtraBold + ' ' + s.label_one} >
                        Aleksey Koleznev
                    </div>
                    <div className={s.cr} />
                </div>
                <div className={s.full_label}>
                    <div className={GlobalStyle.CustomFontExtraBold + ' ' + s.label_one} >
                        Aleksey
                    </div>
                    <div className={s.wrapper}>
                        <div className={GlobalStyle.CustomFontExtraBold + ' ' + s.label_two} >
                            Koleznev
                        </div>
                        <div className={s.cr} />
                    </div>
                </div>
                <div className={s.hr} />
                <div className={s.min_wrapper}>
                    <div className={GlobalStyle.wrapper}>
                        <div className={GlobalStyle.CustomFontMedium + ' ' + s.list_contact} >
                            Instagram
                        </div>
                        <div className={s.hr_mini} />
                        <div className={GlobalStyle.CustomFontMedium + ' ' + s.list_contact} >
                            Linkedin
                        </div>
                    </div>
                    <div className={GlobalStyle.wrapper}>
                        <div className={GlobalStyle.CustomFontMedium + ' ' + s.list_contact} >
                            Behance
                        </div>
                        <div className={s.hr_mini} />
                        <div className={GlobalStyle.CustomFontMedium + ' ' + s.list_contact} >
                            Dribbble
                        </div>
                    </div>
                </div>
            </div>
            <div className={GlobalStyle.wrapper_start}>
                <div
                    className={GlobalStyle.CustomFontMedium + ' ' + s.button_contact}
                    onClick={() => contactHandler()}
                >
                    МОИ КОНТАКТЫ
                </div>
            </div>
        </div>
    );
};
