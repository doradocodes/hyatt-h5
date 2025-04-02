import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import React, {useRef, useState} from "react";
import BackButton from "../../components/BackButton/BackButton.jsx";
import styles from "./MoodSelectionPage.module.css";
import {gsap} from "gsap";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
import CircularProgress from "../../components/CircularProgress/CircularProgress.jsx";

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function MoodSelectionPage() {
    const navigate = useNavigate();
    const language = useLanguageStore(state => state.language);
    const pageCopy = copy[language].moodSelectionPage;


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
            <BackButton url={"/onboarding"}/>
            <div className="logo"></div>
        </div>
        <div className="screen" ref={screen1Ref}>
            <div className={styles.screenHeader}>
                <h2>{pageCopy.intro.title}</h2>
                <p>{pageCopy.intro.body}</p>
            </div>
            <div className={styles.Grid}>
                {Object.keys(pageCopy.moods).map((mood) => (
                    <div className={styles.Tile} data-type={mood} onClick={() => onMoodSelection(mood)}>
                        <div className={styles.TileContentWrapper}>
                            <img src={pageCopy.moods[mood].icon} alt={pageCopy.moods[mood].name} className={styles.icon} />
                            {pageCopy.moods[mood].name}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className={classNames('screen', !mood && styles.Mood)} ref={screen2Ref}>
            <div className={styles.screenHeader}>
                <h2>{pageCopy.intro.title}</h2>
                <p>{pageCopy.intro.body}</p>
            </div>
            <div className={styles.MoodSelectionWrapper}>
                <div className={styles.SelectedMood} data-type={mood}>
                    <img src={pageCopy.moods[mood]?.icon} alt={pageCopy.moods[mood]?.name} className={styles.icon} />
                    {pageCopy.moods[mood]?.name}
                </div>
                <CircularProgress
                    size={290}
                    strokeWidth={10}
                    duration={5}
                    start={progressStart}
                    onAnimationComplete={() => {
                        const meditationId = getRandomElement(pageCopy.moods[mood].recommendedMeditations);
                        navigate(`/mind-selection/${meditationId}`);
                    }}
                />
            </div>
            <p>
                {pageCopy.moodSelectionProgress}
            </p>
        </div>
    </div>
}
