import React, {useEffect, useRef} from 'react';
import styles from './SplashPage.module.css';
import classNames from "classnames";
import {gsap} from "gsap";
import SingleSelect from "../../components/SingleSelect/SingleSelect.jsx";
import copy from "../../locale/copy.js";
import {useLanguageStore} from "../../state/languageStore.js";
import {Link} from "react-router-dom";


export function SplashPage() {
    const language = useLanguageStore(state => state.language);
    const setLanguage = useLanguageStore(state => state.setLanguage);

    const pageRef = useRef(null);
    const introRef = useRef(null);
    const popupRef = useRef(null);
    const logoRef = useRef(null);
    const popupContentRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            delay: 1,
        });
        timeline.fromTo("#root", {
            opacity: 0,
            duration: 1,
        }, {
            opacity: 1,
            duration: 1,
        });
        timeline.to(pageRef, {
            backdropFilter: 'blur(8px)',
            duration: 0.3,
        }, '<')
        timeline.to(introRef.current, {
            delay: 1,
            clipPath: 'circle(100% at 50% 50%)',
            duration: 2,
        });
        timeline.to(logoRef.current, {
            opacity: 0,
            duration: 0.3,
        });
        timeline.fromTo(popupRef.current, {
            opacity: 0,
            duration: 1,
        }, {
            delay: 1,
            opacity: 1,
            duration: 1,
        });
        timeline.fromTo(popupContentRef.current, {
            opacity: 0,
        }, {
            backdropFilter: 'blur(8px)',
            opacity: 1,
            duration: 1,
        })

    }, []);

    return <div key={1} className={classNames('page', styles.page)} ref={pageRef}>
        <div className={styles.intro} ref={introRef}>
            <div className="logo" ref={logoRef}></div>
        </div>

        <div className="popup" ref={popupRef}>
            <div ref={popupContentRef}>
                <div className="logo"></div>
                <p>{copy[language].splashPage.intro}</p>
                <SingleSelect
                    options={[
                        {label: 'English', value: 'en'},
                        {label: '中文', value: 'zh'},
                    ]}
                    onChange={value => {
                        setLanguage(value);
                    }}
                />
                <div className={styles.buttonWrapper}>
                    <Link to={'/mood-selection'}>
                        <button>{copy[language].splashPage.CTA}</button>
                    </Link>

                </div>
            </div>
        </div>
    </div>
}
