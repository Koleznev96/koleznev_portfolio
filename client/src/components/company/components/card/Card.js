import React from 'react';
import s from './Card.module.scss';
import GlobalStyle from "../../../../styles/GlobalStyle.module.scss";
import {info_slider} from "../../../../constants/infoData";


export const Card = ({data}) => {
    if (data?.status_full)
    return (
        <div
            className={s.main_full}
        >
            <div className={s.card_full}>
                <img className={s.img_full} src={data?.img} />
                <div className={s.site_info_full}>
                    <div className={GlobalStyle.CustomFontMedium + ' ' + s.title_full}>{data?.label}</div>
                    <div className={GlobalStyle.CustomFontLite + ' ' + s.label_full}>
                        <div className="content" dangerouslySetInnerHTML={{__html: data?.value}}/>
                    </div>
                </div>
                {data?.dop_info ? (
                    <div className={GlobalStyle.CustomFontRegular + ' ' + s.dop_info}>{data?.dop_info}</div>
                ): null}
            </div>
        </div>
    );
    else
    return (
        <div className={s.main}>
            <div className={s.card}>
                <img className={s.img} src={data?.img} />
                <div className={s.site_info}>
                    <div className={GlobalStyle.CustomFontMedium + ' ' + s.title}>{data?.label}</div>
                    <div className={GlobalStyle.CustomFontLite + ' ' + s.label}>{data?.value}</div>
                </div>
                {data?.dop_info ? (
                    <div className={GlobalStyle.CustomFontRegular + ' ' + s.dop_info}>{data?.dop_info}</div>
                ): null}
            </div>
        </div>
    );
};
