import Visualizer from "../../AudioEngine/Visualizer/Visualizer.jsx";
import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";

export default function BrainwaveVisualizer({ audioEngine, songId }) {
    const visualizerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(visualizerRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 2,
        })
    }, []);

    return <div ref={visualizerRef}>
        <Visualizer
            getLevels={() => audioEngine?.mainBus?.getLevels()}
            brainwaveID={songId}
        />
    </div>
}
