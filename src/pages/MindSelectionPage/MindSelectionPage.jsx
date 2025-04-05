import BackButton from "../../components/BackButton/BackButton.jsx";
import React from "react";
import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import {MindSelectionSlide} from "../../components/MindSelectionSlide/MindSelectionSlide.jsx";
import styles from "./MindSelectionPage.module.css";
import {useParams} from "react-router-dom";

export function MindSelectionPage() {
    const language = useLanguageStore(state => state.language);
    const pageCopy = copy[language].mindSelectionPage;
    const {meditationId} = useParams();
    const initialActiveItem = pageCopy.intro.slideshow.findIndex(item => item.id === meditationId);

    return <div className={"page"}>
        <div className="header">
            <BackButton url={"/mood-selection"}/>
            <div className="logo"></div>
        </div>
        <div className="screen">
            <div className={styles.TitleWrapper}>
                <h2 className={styles.Title}>{pageCopy.intro.title}</h2>
                <p className={styles.Body}>{pageCopy.intro.body}</p>
            </div>
            <Slideshow
                items={pageCopy.intro.slideshow}
                slideComponent={({data}) => <MindSelectionSlide data={data} isRecommended={data.id === meditationId}/>}
                showIndicator={false}
                alignBottom={true}
                initialActiveItem={initialActiveItem}
            />
        </div>
    </div>
}
