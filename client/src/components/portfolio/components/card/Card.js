import React from 'react';
import s from './Card.module.scss';
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import GlobalStyle from "../../../../styles/GlobalStyle.module.scss";


export const Card = ({data}) => {
    console.log('data-', data?.style)
    return (
        <>
        <div
            className={s.main}
            style={{
                width: data?.style?.width,
                height: data?.style?.height,
            }}
        >
            <div className={s.card}>
                <img
                    // style={{
                    //     width: data?.style?.width,
                    //     height: data?.style?.height,
                    // }}
                    className={s.img} src={data.img} />
                <div className={s.site_info}>
                    <div className={GlobalStyle.CustomFontMedium + ' ' + s.title}>{data.label}</div>
                    <div className={GlobalStyle.CustomFontLite + ' ' + s.label}>{data.value}</div>
                    {data?.url ? (
                        <a href={data?.url} target="_blank" className={s.center_button}>
                            <div className={GlobalStyle.CustomFontRegular + ' ' + s.button_site}>Открыть</div>
                        </a>
                    ): null}
                </div>
            </div>
        </div>
        <div
            className={s.main_min}
        >
            <div className={s.card}>
                <img className={s.img} src={data.img} />
                <div className={s.site_info}>
                    <div className={GlobalStyle.CustomFontMedium + ' ' + s.title}>{data.label}</div>
                    <div className={GlobalStyle.CustomFontLite + ' ' + s.label}>{data.value}</div>
                    {data?.url ? (
                        <a href={data?.url} target="_blank" className={s.center_button}>
                            <div className={GlobalStyle.CustomFontRegular + ' ' + s.button_site}>Открыть</div>
                        </a>
                    ): null}
                </div>
            </div>
        </div>
        </>
    );
};
