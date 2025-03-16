import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import React from "react";
import BackButton from "../../components/BackButton/BackButton.jsx";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import {OnboardingSlide} from "../../components/OnboardingSlide/OnboardingSlide.jsx";

export function OnboardingPage() {
    const language = useLanguageStore(state => state.language);
    const setLanguage = useLanguageStore(state => state.setLanguage);

    return <div className={"page"}>
        <div className="header">
            <BackButton url={"/"}/>
            <div className="logo"></div>
        </div>
        <div className="screen">
            <Slideshow
                items={copy[language].onboardingPage.intro.slideshow}
                slideComponent={OnboardingSlide}
                isTopIndicator={true}
            />
        </div>
    </div>
}
