import {Link, useParams} from "react-router-dom";
import styles from "./MeditationSessionPage.module.css";
import BackButton from "../../components/BackButton/BackButton.jsx";
import React, {useEffect, useRef, useState} from "react";
import BottomSheet from "../../components/BottomSheet/BottomSheet.jsx";
import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import gsap from "gsap";
import classNames from "classnames";
import {PlayButtonIcon} from "../../components/PlayButtonIcon/PlayButtonIcon.jsx";

export function MeditationSessionPage({ }) {
    const { id } = useParams();
    const language = useLanguageStore(state => state.language);

    const intervalRef = useRef(null);
    const durationRef = useRef(null);

    // const [sessionTime, setSessionTime] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [musicTheme, setMusicTheme] = useState('ambient');

    const [isBottomSheetClosed, setIsBottomSheetClosed] = useState(true);
    const [isMusicThemeBottomSheetClosed, setIsMusicThemeBottomSheetClosed] = useState(true);
    const [isSessionBottomSheetClosed, setIsSessionBottomSheetClosed] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsBottomSheetClosed(false);
        }, 1000);
        durationRef.current.setAttribute('data-time', 0);
    }, []);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                if (durationRef.current) {
                    const currentTime = durationRef.current.getAttribute('data-time');
                    const newTime = parseInt(currentTime) + 1;
                    durationRef.current.setAttribute('data-time', newTime);
                    durationRef.current.innerText = formatTime(newTime);
                }
            }, 1000);
        } else {
            intervalRef.current && clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [isPlaying]);

    const startSession = () => {
        setIsBottomSheetClosed(true);
        setShowControls(true);
        setIsPlaying(true);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        const formattedMins = String(mins).padStart(2, '0');
        const formattedSecs = String(secs).padStart(2, '0');

        return `${formattedMins}:${formattedSecs}`;
    }

    const playPauseSession = () => {
        setIsPlaying(prev => !prev);
    }

    return <div className={"page"}>
        <div className="header">
            <BackButton url={"/mood-selection"} isWhite={true}/>
            <div className="logo inverse"></div>
        </div>
        <div className={classNames('screen', styles.Screen)}>
            <div className={classNames(styles.SessionDuration)} data-show={showControls}>{copy[language].meditationSessionPage.sessionDurationLabel} | <span ref={durationRef}>00:00</span></div>
            <div className={classNames(styles.SessionControls)} data-show={showControls}>
                <div className={styles.SessionControlsWrapper}>
                    <div className={styles.Flex}>
                        <button className={styles.PlayButton} onClick={playPauseSession}>
                            {
                                isPlaying ?
                                    <PlayButtonIcon color="#0072CE"/>
                                    :
                                    <PlayButtonIcon color="#0072CE" play={true}/>
                            }

                        </button>
                        <div>
                            <h3>{copy[language].meditationSessionPage.states[id].subtitle}</h3>
                            <h2>{copy[language].meditationSessionPage.states[id].title}</h2>
                        </div>
                    </div>
                    <div className={styles.Flex}>
                        <button className={styles.IconButton} onClick={() => {
                            setIsMusicThemeBottomSheetClosed(!isMusicThemeBottomSheetClosed);
                        }}>
                            <img src="/icons/theme-icon.svg" alt="Change Theme"/>
                        </button>
                        <button className={styles.IconButton} onClick={() => {
                            setIsSessionBottomSheetClosed(!isSessionBottomSheetClosed);
                        }}>
                            <img src="/icons/session-icon.svg" alt="Change Session"/>
                        </button>
                    </div>

                </div>
                <Link to={"/share"}>
                    <button className={styles.OutlineButton}>{copy[language].meditationSessionPage.CTA}</button>
                </Link>
            </div>
            <div className={styles.Visualizer}></div>
        </div>
        <BottomSheet
            isClosed={isBottomSheetClosed}
            onClose={() => {
                setIsBottomSheetClosed(true);
            }}
        >
            <div className={styles.BottomSheetContent}>
                <div className={styles.BottomSheetTitleWrapper}>
                    <h3>{copy[language].meditationSessionPage.states[id].subtitle}</h3>
                    <h2>{copy[language].meditationSessionPage.states[id].title}</h2>
                </div>
                <p>{copy[language].meditationSessionPage.states[id].body}</p>
            </div>
            <div className={styles.BottomSheetContent}>
                <button
                    onClick={startSession}
                >
                    {copy[language].meditationSessionPage.states[id].CTA}
                    <PlayButtonIcon play={true}/>
                </button>
            </div>
        </BottomSheet>
        <BottomSheet
            isClosed={isMusicThemeBottomSheetClosed}
            showHandle={true}
            onClose={() => {
                setIsMusicThemeBottomSheetClosed(true);
            }}
        >
            <div>
                <div className={styles.BottomSheetContent}>
                    <h4>{copy[language].meditationSessionPage.musicThemeTitle}</h4>
                    <p>{copy[language].meditationSessionPage.musicThemeSubtitle}</p>
                </div>

                <ul className={styles.List}>
                    {copy[language].meditationSessionPage.musicThemes.map((theme, index) => (
                        <li key={index} data-active={theme.id === musicTheme}>
                            {theme.title}
                            {theme.id === musicTheme ?
                                <span className={styles.NowPlaying}>Now playing</span>
                                :
                                <span className={styles.PlayIcon}>
                                    <PlayButtonIcon color="#161F6E" play={true}/>
                                </span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </BottomSheet>
        <BottomSheet
            isClosed={isSessionBottomSheetClosed}
            showHandle={true}
            onClose={() => {
                setIsSessionBottomSheetClosed(true);
            }}
        >
            <div>
                <div className={styles.BottomSheetContent}>
                    <h4>{copy[language].meditationSessionPage.sessionTitle}</h4>
                    <p>{copy[language].meditationSessionPage.sessionSubtitle}</p>
                </div>

                <ul className={styles.List}>
                    {copy[language].meditationSessionPage.sessions.map((session, index) => (
                        <Link to={`/meditation-session/${session.id}`}>
                            <li key={index} data-active={session.id === id}>
                                {session.title}
                                { session.id === id ?
                                    <span className={styles.NowPlaying}>Now playing</span>
                                    :
                                    <span>
                                        <img src="/icons/chevron-right.svg" alt="Next"/>
                                    </span>
                                }
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </BottomSheet>
    </div>
}
