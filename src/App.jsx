import { Routes, Route, Link, useLocation } from 'react-router-dom'; // Import necessary components from React Router
import { motion } from 'framer-motion'; // Import Framer Motion
import './App.css';
import {SplashPage} from "./pages/SplashPage/SplashPage.jsx";
import {MoodSelectionPage} from "./pages/MoodSelectionPage/MoodSelectionPage.jsx";
import {MindSelectionPage} from "./pages/MindSelectionPage/MindSelectionPage.jsx";
import {MeditationSessionPage} from "./pages/MeditationSessionPage/MeditationSessionPage.jsx";
import {SharePage} from "./pages/SharePage.jsx";
import {OnboardingPage} from "./pages/OnboardingPage/OnboardingPage.jsx";
import {useEffect} from "react";

function App() {
    const location = useLocation(); // Get the current route location

    useEffect(() => {
        /* Get the documentElement (<html>) to display the page in fullscreen */
        const elem = document.documentElement;

        /* View in fullscreen */
        function openFullscreen() {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        }

        /* Close fullscreen */
        function closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }

        openFullscreen();
    }, []);



    return (
        <>
            {/*<h1>My React App with Framer Motion</h1>*/}
            {/*<nav>*/}
            {/*    <Link to="/">Home</Link>*/}
            {/*    <Link to="/mood-selection">Mood Selection</Link>*/}
            {/*    <Link to="/mind-selection">Mind Selection</Link>*/}
            {/*    <Link to="/meditation-session">Meditation Session</Link>*/}
            {/*    <Link to="/share">Share</Link>*/}
            {/*</nav>*/}

            <motion.div
                key={location.pathname} // Ensure fresh animations on route change
                initial={{ opacity: 0 }} // Fade in from opacity 0
                animate={{ opacity: 1 }} // Fade to opacity 1
                exit={{ opacity: 0 }} // Fade out when exiting the component
                transition={{ duration: 0.5 }} // Transition duration (in seconds)
            >
                <Routes location={location}>
                    <Route path="/" element={<SplashPage />} />
                    <Route path="/onboarding" element={<OnboardingPage />} />
                    <Route path="/mood-selection" element={<MoodSelectionPage/>} />
                    <Route path="/mind-selection" element={<MindSelectionPage/>} />
                    <Route path="/meditation-session/:id" element={<MeditationSessionPage/>} />
                    <Route path="/share" element={<SharePage/>} />
                </Routes>
            </motion.div>
        </>
    );
}

export default App;
