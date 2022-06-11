import React, {useState} from 'react';
import s from './Header.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import GlobalStyle from "../../styles/GlobalStyle.module.scss";


const menu = [
    "Главная",
    "Портфолио",
    "Компании",
    "страницы ⤓",
    "Контакты",
];

const href_list = [
    "#section1",
    "#section3",
    "#section4",
    "#section2",
    "#section5",
];

const icons_social_networks = [
    {
        icon: "vk",
        url: "https://vk.com/koleznev96",
    },
    {
        icon: "telegram",
        url: "https://t.me/koleznev96",
    },
    {
        icon: "instagram",
        url: "https://www.instagram.com/koleznev96?igshid=YmMyMTA2M2Y=",
    },
];

export const Header = () => {
    const [statusMenu, setStatusMenu] = useState(false);

    const socialNetworkHandler = (data) => {
        switch (data) {
            case 'vk':
                return null;
            case 'telegram':
                return null;
            case 'instagram':
                return null;
            default:
                return null;
        }
    }

    return (
        <>
        <div className={s.desctop}>
            <div className={GlobalStyle.root + ' ' + s.root}>
                <div className={GlobalStyle.box_}>
                    <div className={s.main}>
                        <GlobalSvgSelector id={"icon"} />
                        <div className={s.menu}>
                            {menu?.map((item, index) => (
                                <a
                                    href={href_list[index]}
                                    key={index}
                                    className={GlobalStyle.CustomFontBold + ' ' + s.menu_item}
                                >
                                    {item}
                                </a>
                            ))}

                            <div className={s.hr} />
                            <div className={s.list_icons}>
                                {icons_social_networks?.map((item, index) => (
                                    <a
                                        href={item?.url}
                                        target="_blank"
                                        key={index}
                                        className={s.icon_item}
                                    >
                                        <GlobalSvgSelector id={item.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.phone}>
            <div className={GlobalStyle.root + ' ' + s.root}>
                <div className={GlobalStyle.box_}>
                    <div className={!statusMenu ? s.main_mini : s.main_mini_active}>
                        <div className={s.header}>
                            <GlobalSvgSelector id={"icon"} />
                            <div
                                className={s.exit}
                                onClick={() => setStatusMenu(!statusMenu)}
                            >
                                <GlobalSvgSelector id={statusMenu ? "exit": "gamburg"} />
                            </div>
                        </div>
                        <div className={!statusMenu ? s.menu_mini : s.menu_mini_active}>
                            {menu?.map((item, index) => (
                                <a
                                    onClick={() => setStatusMenu(false)}
                                    href={href_list[index]}
                                    key={index}
                                    className={GlobalStyle.CustomFontRegular + ' ' + s.menu_item_mini}
                                >
                                    {item}
                                </a>
                            ))}

                            <div className={s.hr_mini} />
                            <div className={s.list_icons}>
                                {icons_social_networks?.map((item, index) => (
                                    <a
                                        href={item?.url}
                                        target="_blank"
                                        key={index}
                                        className={s.icon_item_mini}
                                    >
                                        <GlobalSvgSelector id={item} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
