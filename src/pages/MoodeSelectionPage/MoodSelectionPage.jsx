import {useLanguageStore} from "../../state/languageStore.js";
import copy from "../../locale/copy.js";
import Carousel from "../../components/Carousel/Carousel.jsx";

export function MoodSelectionPage() {
    const language = useLanguageStore(state => state.language);
    const setLanguage = useLanguageStore(state => state.setLanguage);

    return <div className={"page"}>
        <div className="popup">
            <div>
                <Carousel
                    slides={[
                        <>
                            <img src="/images/mood-selection-1.jpg" alt="Mood Selection 1"/>
                            <h2>{copy[language].moodSelectionPage.intro.slide1.title}</h2>
                            <p>{copy[language].moodSelectionPage.intro.slide1.body}</p>
                        </>,
                        <>
                            <img src="/images/mood-selection-1.jpg" alt="Mood Selection 1"/>
                            <h2>{copy[language].moodSelectionPage.intro.slide1.title}</h2>
                            <p>{copy[language].moodSelectionPage.intro.slide1.body}</p>
                        </>
                    ]}
                />
                <button>{copy[language].moodSelectionPage.intro.CTA}</button>
            </div>
        </div>
    </div>
}
