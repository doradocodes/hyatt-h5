import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import React, {useEffect, useRef, useState} from "react";
import BackButton from "../../components/BackButton/BackButton.jsx";
import styles from "./MoodSelectionPage.module.css";
import {gsap} from "gsap";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";


export function MoodSelectionPage() {
    const navigate = useNavigate();
    const language = useLanguageStore(state => state.language);
    const setLanguage = useLanguageStore(state => state.setLanguage);
    const [progress, setProgress] = useState(0);

    const [mood, setMood] = useState(null);

    const screen1Ref = useRef(null);
    const screen2Ref = useRef(null);
    const progressBarRef = useRef(null);

    const timeline = gsap.timeline({
        delay: 1,
    });

    useEffect(() => {
    }, []);

    const onMoodSelection = (m) => {
        setMood(m);
        timeline.to(screen1Ref.current, {
           opacity: 0,
        });
        timeline.fromTo(screen2Ref.current, {
            opacity: 0,
        }, {
            opacity: 1,
        });
        timeline.to(progressBarRef.current,{
            width: '100%',
            duration: 5,
            onComplete: () => {
                navigate('/mind-selection');
            }
        })
    }

    return <div className={"page"}>
        <div className="header">
            <BackButton url={"/"}/>
            <div className="logo"></div>
        </div>
        <div className="screen" ref={screen1Ref}>
            <div>
                <h2>{copy[language].moodSelectionPage.intro.title}</h2>
                <p>{copy[language].moodSelectionPage.intro.body}</p>
            </div>
            <div className={styles.Grid}>
                <div className={styles.Tile} onClick={() => onMoodSelection('happy')}>{copy[language].moodSelectionPage.moods.happy}</div>
                <div className={styles.Tile} onClick={() => onMoodSelection('sad')}>{copy[language].moodSelectionPage.moods.sad}</div>
                <div className={styles.Tile} onClick={() => onMoodSelection('excited')}>{copy[language].moodSelectionPage.moods.excited}</div>
                <div className={styles.Tile} onClick={() => onMoodSelection('relaxed')}>{copy[language].moodSelectionPage.moods.relaxed}</div>
                <div className={styles.Tile} onClick={() => onMoodSelection('anxious')}>{copy[language].moodSelectionPage.moods.anxious}</div>
                <div className={styles.Tile} onClick={() => onMoodSelection('stressed')}>{copy[language].moodSelectionPage.moods.stressed}</div>
            </div>
        </div>

        <div className={classNames('screen', !mood && styles.Mood)} ref={screen2Ref}>
            <div className={styles.Tile}>{copy[language].moodSelectionPage.moods[mood]}</div>
            <div className={styles.ProgressBar}>
                <div className={styles.Progress} ref={progressBarRef}></div>
            </div>
        </div>
    </div>
}
