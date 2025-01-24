import React, { useState } from 'react';
import { Screen } from "../components/Screen/Screen.jsx";
import { motion } from 'framer-motion'; // Import Framer Motion



export function SplashPage() {
    const [activeScreen, setActiveScreen] = useState(0);

    const handleNext = () => {
        if (activeScreen === screens.length - 1) {
            return;
        }
        setActiveScreen(activeScreen + 1);
    }

    const screens = [
        <>
            Hyatt Logo
            <button onClick={handleNext}>Next</button>
        </>,
        <>
            Test
            <button onClick={handleNext}>Next</button>
        </>,
    ];

    return (
        <div className="page">
            <motion.div
                key={activeScreen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Screen>
                    {screens[activeScreen]}

                </Screen>
            </motion.div>
        </div>
    );
}
