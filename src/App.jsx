import {Route, Routes, useLocation} from 'react-router-dom'; // Import necessary components from React Router
import {motion} from 'framer-motion'; // Import Framer Motion
import './App.css';
import {SplashPage} from "./pages/SplashPage/SplashPage.jsx";
import {MoodSelectionPage} from "./pages/MoodSelectionPage/MoodSelectionPage.jsx";
import {MindSelectionPage} from "./pages/MindSelectionPage/MindSelectionPage.jsx";
import {MeditationSessionPage} from "./pages/MeditationSessionPage/MeditationSessionPage.jsx";
import {SharePage} from "./pages/SharePage/SharePage.jsx";
import {OnboardingPage} from "./pages/OnboardingPage/OnboardingPage.jsx";

function App() {
    const location = useLocation(); // Get the current route location

    return (
        <>
            <motion.div
                key={location.pathname} // Ensure fresh animations on route change
                initial={{opacity: 0}} // Fade in from opacity 0
                animate={{opacity: 1}} // Fade to opacity 1
                exit={{opacity: 0}} // Fade out when exiting the component
                transition={{duration: 0.5}} // Transition duration (in seconds)
            >
                <Routes location={location}>
                    <Route path="/" element={<SplashPage/>}/>
                    <Route path="/onboarding" element={<OnboardingPage/>}/>
                    <Route path="/mood-selection" element={<MoodSelectionPage/>}/>
                    <Route path="/mind-selection/:meditationId" element={<MindSelectionPage/>}/>
                    <Route path="/meditation-session/:id" element={<MeditationSessionPage/>}/>
                    <Route path="/share" element={<SharePage/>}/>
                </Routes>
            </motion.div>
        </>
    );
}

export default App;
