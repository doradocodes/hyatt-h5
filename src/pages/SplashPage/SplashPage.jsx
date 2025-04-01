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
    const circleRef = useRef(null);
    const headerRef = useRef(null);
    const screen1Ref = useRef(null);
    const logoRef = useRef(null);
    const CTAref = useRef(null);

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

        // expand circle
        timeline.to(circleRef.current, {
            delay: 1,
            clipPath: 'circle(100% at 50% 50%)',
            duration: 1.5,
        });
        timeline.to(introRef.current, {
            opacity: 0,
            onComplete: () => {
                if (introRef.current) {
                    introRef.current.style.display = 'none';
                }
            }
        });
    }, []);

    return <div key={1} className={classNames('page')} ref={pageRef}>
        <div className={classNames(styles.intro)} ref={introRef}>
            <div className={styles.circle} ref={circleRef}>
                <div className="logo" ref={logoRef}></div>
            </div>
        </div>

        <div className="header" ref={headerRef}>
            <div className="logo"></div>
        </div>

        <div className="screen" ref={screen1Ref}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.contentTitle}>
                    {copy[language].splashPage.intro}
                </h1>
                <SingleSelect
                    options={[
                        {label: 'English', value: 'en'},
                        {label: '中文', value: 'zh'},
                    ]}
                    onChange={value => {
                        setLanguage(value);
                    }}
                />
                <div ref={CTAref}>
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
