import BackButton from "../../components/BackButton/BackButton.jsx";
import React from "react";
import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import {MindSelectionSlide} from "../../components/MindSelectionSlide/MindSelectionSlide.jsx";
import styles from "./MindSelectionPage.module.css";

export function MindSelectionPage() {
    const language = useLanguageStore(state => state.language);

    return <div className={"page"}>
        <div className="header">
            <BackButton url={"/mood-selection"}/>
            <div className="logo"></div>
        </div>
        <div className="screen">
            <div className={styles.TitleWrapper}>
                <h2 className={styles.Title}>{copy[language].mindSelectionPage.intro.title}</h2>
                <p className={styles.Body}>{copy[language].mindSelectionPage.intro.body}</p>
            </div>
            <Slideshow
                items={copy[language].mindSelectionPage.intro.slideshow}
                slideComponent={MindSelectionSlide}
                showIndicator={false}
                alignBottom={true}
            />
        </div>
    </div>
}
