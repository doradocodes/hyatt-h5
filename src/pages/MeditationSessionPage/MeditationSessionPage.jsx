import {useParams} from "react-router-dom";
import styles from "./MeditationSessionPage.module.css";
import BackButton from "../../components/BackButton/BackButton.jsx";
import React from "react";
import BottomSheet from "../../components/BottomSheet/BottomSheet.jsx";

export function MeditationSessionPage({ }) {
    const { id } = useParams();
    return <div className={"page"}>
        <div className="header">
            <BackButton url={"/mood-selection"}/>
            <div className="logo"></div>
        </div>
        <div className="screen">
            <div>Visualizer</div>
        </div>
        <BottomSheet />
        {/*<div className={styles.bottomWrapper}>*/}
        {/*    <div className={styles.playerWrapper}>*/}
        {/*        <button>Play</button>*/}
        {/*        <div>*/}
        {/*            <div>Brainwave | Delta</div>*/}
        {/*            <div>Deep Sleep</div>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*            <button className="icon">playlist</button>*/}
        {/*            <button className="icon">list</button>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <button>Finish this session</button>*/}
        {/*</div>*/}
    </div>
}
