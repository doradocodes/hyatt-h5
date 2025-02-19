import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import Carousel from "../../components/Carousel/Carousel.jsx";
import React from "react";
import BackButton from "../../components/BackButton/BackButton.jsx";


export function OnboardingPage() {
    const language = useLanguageStore(state => state.language);
    const setLanguage = useLanguageStore(state => state.setLanguage);

    return <div className={"page"}>
        <div className="header">
            <BackButton url={"/"}/>
            <div className="logo"></div>
        </div>
        <div className="screen">
            <div className="popup">
                <div className="popup-content">
                    <Carousel
                        slides={copy[language].onboardingPage.intro.carousel}
                    />
                </div>
            </div>
        </div>
    </div>
}
