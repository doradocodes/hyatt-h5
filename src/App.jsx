import { Routes, Route, Link, useLocation } from 'react-router-dom'; // Import necessary components from React Router
import { motion } from 'framer-motion'; // Import Framer Motion
import './App.css';
import {SplashPage} from "./pages/SplashPage/SplashPage.jsx";
import {MoodSelectionPage} from "./pages/MoodeSelectionPage/MoodSelectionPage.jsx";
import {MindSelectionPage} from "./pages/MindSelectionPage.jsx";
import {MeditationSessionPage} from "./pages/MeditationSessionPage.jsx";
import {SharePage} from "./pages/SharePage.jsx";

function App() {
    const location = useLocation(); // Get the current route location

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
                    <Route path="/mood-selection" element={<MoodSelectionPage/>} />
                    <Route path="/mind-selection" element={<MindSelectionPage/>} />
                    <Route path="/meditation-session" element={<MeditationSessionPage/>} />
                    <Route path="/share" element={<SharePage/>} />
                </Routes>
            </motion.div>
        </>
    );
}

export default App;
