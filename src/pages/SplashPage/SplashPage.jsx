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
    const headerRef = useRef(null);
    const screen1Ref = useRef(null);
    const logoRef = useRef(null);
    const popupContentRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            delay: 1,
        });
        // fade in app
        timeline.fromTo("#root", {
            opacity: 0,
            duration: 1,
        }, {
            opacity: 1,
            duration: 1,
        });

        // blur app background (with app fades in)
        timeline.to(pageRef, {
            backdropFilter: 'blur(8px)',
            duration: 0.3,
        }, '<')

        // expand circle
        timeline.to(introRef.current, {
            delay: 1,
            clipPath: 'circle(100% at 50% 50%)',
            duration: 2,
        });

        // fade out logo
        timeline.to(logoRef.current, {
            opacity: 0,
            duration: 0.3,
        });


        // fade in screen 1
        timeline.fromTo(screen1Ref.current, {
            opacity: 0,
            duration: 1,
        }, {
            delay: 1,
            opacity: 1,
            duration: 1,
        });
        timeline.fromTo(headerRef.current, {
            opacity: 0,
            duration: 1,
        }, {
            opacity: 1,
            duration: 1,
        }, '<');
        timeline.fromTo(popupContentRef.current, {
            backdropFilter: 'blur(0px)',
        }, {
            backdropFilter: 'blur(8px)',
            duration: 0.5,
        })

    }, []);

    return <div key={1} className={classNames('page', styles.page)} ref={pageRef}>
        <div className={styles.intro} ref={introRef}>
            <div className="logo" ref={logoRef}></div>
        </div>

        <div className="header" ref={headerRef}>
            <div className="logo"></div>
        </div>

        <div className="screen" ref={screen1Ref}>
            <div className="popup">
                <div className="popup-content" ref={popupContentRef}>
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
                        <Link to={'/onboarding'}>
                            <button>{copy[language].splashPage.CTA}</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    </div>
}
