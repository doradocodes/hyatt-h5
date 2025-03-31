import classNames from "classnames";
import React, {useState} from "react";
import BackButton from "../../components/BackButton/BackButton.jsx";
import styles from './SharePage.module.css';
import {PlayButtonIcon} from "../../components/PlayButtonIcon/PlayButtonIcon.jsx";
import BottomSheet from "../../components/BottomSheet/BottomSheet.jsx";
import copy from "../../locale/copy.js";
import {useLanguageStore} from "../../state/languageStore.js";
import {useNavigate} from "react-router-dom";

export function SharePage() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // equivalent to window.history.back()
    };

    const language = useLanguageStore(state => state.language);
    const pageCopy = copy[language].sharePage;
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    return <div className={classNames('page')}>
        <div className="header">
            <div className="BackButton" onClick={goBack}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12L5 12M5 12L12 19M5 12L12 5" stroke={"#161F6E"} stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="logo"></div>
        </div>
        <div className={classNames('screen', styles.Screen)}>
            <div>
                <h2>{pageCopy.title}</h2>
                <p>{pageCopy.body}</p>
            </div>
            <div className={styles.Video}>
                Video
                <span className={styles.PlayIcon}>
                    <PlayButtonIcon color={"#0072CE"} play={true}/>
                </span>
            </div>
            <div className={styles.ButtonWrapper}>
                <button
                    onClick={() => setIsBottomSheetOpen(true)}
                >{pageCopy.shareCTA}</button>
                <button className={"alt"}>{pageCopy.hyattCTA}</button>
            </div>
        </div>
        <BottomSheet
            isClosed={!isBottomSheetOpen}
            showHandle={true}
            onClose={() => setIsBottomSheetOpen(false)}
        >
            <div>
                <div className={styles.BottomSheetContent}>
                    <h4>{pageCopy.socialMedia.title}</h4>
                    <p className={styles.Copy}>{pageCopy.socialMedia.body}</p>
                </div>
                <div className={styles.SocialMediaWrapper}>
                    {
                        pageCopy.socialMedia.types.map((type) => {
                            return <button className={styles.SocialMediaButton} key={type.id}>
                                <img src={`/icons/social_media/${type.id}.svg`} alt={type.title}/>
                            </button>
                        })
                    }
                </div>
                <div className={styles.BottomSheetContent}>
                    <input
                        type="text"
                        name="share_url"
                        placeholder="URL"
                        className={styles.SocialMediaInput}
                        value={pageCopy.socialMedia.shareURL}
                    />
                    <button className={styles.SocialMediaInputButton}>
                        <img src="/icons/send.svg" alt="Send"/>
                    </button>
                </div>
            </div>
        </BottomSheet>
    </div>
}
