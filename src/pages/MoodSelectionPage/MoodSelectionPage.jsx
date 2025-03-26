import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import React, {useRef, useState} from "react";
import BackButton from "../../components/BackButton/BackButton.jsx";
import styles from "./MoodSelectionPage.module.css";
import {gsap} from "gsap";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
import CircularProgress from "../../components/CircularProgress/CircularProgress.jsx";

const MOOD_ICONS = {
    excited: "icons/excited-icon.svg",
    relaxed: "icons/relaxed-icon.svg",
    stressed: "icons/stressed-icon.svg",
    tired: "icons/tired-icon.svg",
}

export function MoodSelectionPage() {
    const navigate = useNavigate();
    const language = useLanguageStore(state => state.language);
    const setLanguage = useLanguageStore(state => state.setLanguage);
    const [progressStart, setProgressStart] = useState(false);

    const [mood, setMood] = useState(null);

    const screen1Ref = useRef(null);
    const screen2Ref = useRef(null);

    const timeline = gsap.timeline({
        delay: 1,
    });

    const onMoodSelection = (m) => {
        setMood(m);
        timeline.to(screen1Ref.current, {
           opacity: 0,
        });
        timeline.fromTo(screen2Ref.current, {
            opacity: 0,
        }, {
            opacity: 1,
            onComplete: () => {
                setProgressStart(true);
            }
        });
    }

    return <div className={"page"}>
        <div className="header">
            <BackButton url={"/"}/>
            <div className="logo"></div>
        </div>
        <div className="screen" ref={screen1Ref}>
            <div className={styles.screenHeader}>
                <h2>{copy[language].moodSelectionPage.intro.title}</h2>
                <p>{copy[language].moodSelectionPage.intro.body}</p>
            </div>
            <div className={styles.Grid}>
                <div className={styles.Tile} data-type="excited" onClick={() => onMoodSelection('excited')}>
                    <div className={styles.TileContentWrapper}>
                        <img src={MOOD_ICONS.excited} alt={copy[language].moodSelectionPage.moods.excited} className={styles.icon} />
                        {copy[language].moodSelectionPage.moods.excited}
                    </div>
                </div>
                <div className={styles.Tile} data-type="relaxed" onClick={() => onMoodSelection('relaxed')}>
                    <div className={styles.TileContentWrapper}>
                        <img src={MOOD_ICONS.relaxed} alt={copy[language].moodSelectionPage.moods.relaxed} className={styles.icon} />
                        {copy[language].moodSelectionPage.moods.relaxed}
                    </div>
                </div>
                <div className={styles.Tile} data-type="stressed" onClick={() => onMoodSelection('stressed')}>
                    <div className={styles.TileContentWrapper}>
                        <img src={MOOD_ICONS.stressed} alt={copy[language].moodSelectionPage.moods.stressed} className={styles.icon} />
                        {copy[language].moodSelectionPage.moods.stressed}
                    </div>
                </div>
                <div className={styles.Tile} data-type="tired" onClick={() => onMoodSelection('tired')}>
                    <div className={styles.TileContentWrapper}>
                        <img src={MOOD_ICONS.tired} alt={copy[language].moodSelectionPage.moods.tired} className={styles.icon} />
                        {copy[language].moodSelectionPage.moods.tired}
                    </div>
                </div>
            </div>
        </div>

        <div className={classNames('screen', !mood && styles.Mood)} ref={screen2Ref}>
            <div className={styles.screenHeader}>
                <h2>{copy[language].moodSelectionPage.intro.title}</h2>
                <p>{copy[language].moodSelectionPage.intro.body}</p>
            </div>
            <div className={styles.MoodSelectionWrapper}>
                <div className={styles.SelectedMood} data-type={mood}>
                    <img src={MOOD_ICONS[mood]} alt={copy[language].moodSelectionPage.moods[mood]} className={styles.icon} />
                    {copy[language].moodSelectionPage.moods[mood]}
                </div>
                <CircularProgress
                    size={290}
                    strokeWidth={10}
                    duration={5}
                    start={progressStart}
                    onAnimationComplete={() => {
                        navigate('/mind-selection');
                    }}
                />
            </div>
            <p>
                {copy[language].moodSelectionPage.moodSelectionProgress}
            </p>
        </div>
    </div>
}
