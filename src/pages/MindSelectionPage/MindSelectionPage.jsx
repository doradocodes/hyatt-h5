import BackButton from "../../components/BackButton/BackButton.jsx";
import React from "react";
import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";

export function MindSelectionPage() {
    const language = useLanguageStore(state => state.language);

    return <div className={"page"}>
        <div className="header">
            <BackButton url={"/mood-selection"}/>
            <div className="logo"></div>
        </div>
        <div className="screen">
            <div>
                <h2>{copy[language].mindSelectionPage.intro.title}</h2>
                <p>{copy[language].mindSelectionPage.intro.body}</p>
            </div>
            <Slideshow
                items={copy[language].mindSelectionPage.intro.slideshow}
            />
        </div>
    </div>
}
