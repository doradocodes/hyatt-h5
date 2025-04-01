import Song from "../Song";
import Instrument from "../Instrument";

export default class AlphaSong extends Song {

    constructor(tone, id) {

        super(tone, id, Song.NAME_ALPHA);

        //BACKGROUND LOOP
        //33s
        const alphaBgLoop = new Instrument("alphaBgLoop", {"C3": "alpha/a_reverb_bed.mp3"}, Instrument.TYPE_BG_LOOP );
        alphaBgLoop.notes = [
            { time: "0", pitch: "C3"},
        ];
        alphaBgLoop.loopLength = 22; //seconds
        alphaBgLoop.loopTotal = -1;
        alphaBgLoop.db = -14; 
        this.instruments.push(alphaBgLoop);

        //8m
        const alphaMindfullnessPad = new Instrument("alphaMindfullnessPad", {"C3": "alpha/a_mindfullness_padR.mp3"}, Instrument.TYPE_STANDARD );
        alphaMindfullnessPad.notes = [
            { time: "0:0:0", pitch: ["C3", "E3", "G3", "B2"], velocity: 0.7},
            { time: "6m",  pitch: ["D3", "F3", "A2", "C3"], velocity: 0.7 },
            { time: "12m", pitch: ["E2", "G2", "B2", "D3"], velocity: 0.7 },
            { time: "18m", pitch: ["F3", "A2", "C3", "E2"], velocity: 0.7 },
            { time: "24m", pitch: ["G2", "B2", "D3", "E2"], velocity: 0.7 },
            { time: "30m", pitch: ["A2", "C3", "E3", "G2"], velocity: 0.7 },
        ];
        alphaMindfullnessPad.loopLength = "36m";
        alphaMindfullnessPad.loopTotal = 1;
        alphaMindfullnessPad.timingRange = 0.3;
        alphaMindfullnessPad.velocityRange = 0.2;
        alphaMindfullnessPad.skipChance = 0.25; 
        alphaMindfullnessPad.noteChance = 0.95;
        alphaMindfullnessPad.db = -17;
        this.instruments.push(alphaMindfullnessPad);

        const alphaSoftKey = new Instrument("alphaSoftKey", {"C3": "alpha/a_soft_key.mp3"}, Instrument.TYPE_STANDARD );
        alphaSoftKey.notes = [
            { time: "0:0:0", pitch: "C2"},
            { time: "0:4:0", pitch: "D2"},
            { time: "2:0:0", pitch: "E2"},
            { time: "2:4:0", pitch: "G2"},
            { time: "4:0:0", pitch: "A2"},
            { time: "4:4:0", pitch: "C3"},
            { time: "6:0:0", pitch: "D3"},
          
        ];
        alphaSoftKey.loopLength = "6:3:0";
        alphaSoftKey.loopTotal = 1;
        alphaSoftKey.timingRange = 0.6;
        alphaSoftKey.velocityRange = 0.2;
        alphaSoftKey.skipChance = 0.75; 
        alphaSoftKey.noteChance = 0.9;
        alphaSoftKey.db = -30;
        this.instruments.push(alphaSoftKey);

        const alphaLoundBell = new Instrument("alphaLoundBell", {"C3": "alpha/a_lound_note.mp3"}, Instrument.TYPE_STANDARD );
        alphaLoundBell.notes = [
            { time: "0:3:0", pitch: "C2"},
            { time: "1:1:0", pitch: "D2"},
            { time: "3:2:0", pitch: "G2"},
            { time: "4:2:0", pitch: "A2"},
        ];
        alphaLoundBell.loopLength = "6m";
        alphaLoundBell.loopTotal = 1;
        alphaLoundBell.timingRange = 0.4;
        alphaLoundBell.velocityRange = 0.3;
        alphaLoundBell.skipChance = 0.35; 
        alphaLoundBell.noteChance = 0.9;
        alphaLoundBell.db = -30;
        this.instruments.push(alphaLoundBell);

        
        // //5m
        const alphaJvAnalogPad = new Instrument("alphaJvAnalogPad", {"C3": "alpha/a_JV_analog_padR.mp3"}, Instrument.TYPE_STANDARD );
        alphaJvAnalogPad.notes = [
            { time: "0",   pitch: ["C3", "E3", "G3", "B3"], velocity: 0.7},
            { time: "5m",  pitch: ["D3", "F3", "A3", "C4"], velocity: 0.7},
            { time: "10m", pitch: ["E3", "G3", "B3", "D4"], velocity: 0.7},
            { time: "15m", pitch: ["F3", "A3", "C4", "E4"], velocity: 0.7},
            { time: "20m", pitch: ["G3", "B3", "D4", "E4"], velocity: 0.7},
            { time: "25m", pitch: ["A3", "C4", "E4", "G4"], velocity: 0.7},
        ];
        alphaJvAnalogPad.loopLength = "30m";
        alphaJvAnalogPad.loopTotal = 1;
        alphaJvAnalogPad.timingRange = 0.3;
        alphaJvAnalogPad.velocityRange = 0.35;
        alphaJvAnalogPad.skipChance = 0.35;
        alphaJvAnalogPad.noteChance = 0.95;
        alphaJvAnalogPad.db = -24;
        this.instruments.push(alphaJvAnalogPad);

    
        // //6m
        const alphaDreamBg = new Instrument("alphaDreamBg", {"C3": "alpha/a_dream_bg.mp3"}, Instrument.TYPE_STANDARD );
        alphaDreamBg.notes = [
            { time: "0", pitch: "C3", velocity: 0.8},
        ];
        alphaDreamBg.loopLength = "7m";
        alphaDreamBg.loopTotal = 1;
        alphaDreamBg.velocityRange = 0.25;
        alphaDreamBg.db = -12;
        this.instruments.push(alphaDreamBg);

        //6m
        const alphaTangerineBg = new Instrument("alphaTangerineBg", {"C3": "alpha/a_tangerine_bg.mp3"}, Instrument.TYPE_STANDARD );
        alphaTangerineBg.notes = [
            { time: "0", pitch: "C3", velocity: 0.5},
            { time: "7m", pitch: "C2", velocity: 0.75}, 
        ];
        alphaTangerineBg.loopLength = "19m";
        alphaTangerineBg.loopTotal = 1;
        alphaTangerineBg.skipChance = 0.3;
        alphaTangerineBg.db = -5;
        this.instruments.push(alphaTangerineBg);

        //6m
        const betaHarpBg = new Instrument("betaHarpBg", {"C3": "beta/b_harp_bg.mp3"}, Instrument.TYPE_STANDARD );
        betaHarpBg.notes = [
            { time: "0", pitch: "C2"}, 
        ];
        betaHarpBg.loopLength = "12m";
        betaHarpBg.loopTotal = 1;
        betaHarpBg.db = -22;
        this.instruments.push(betaHarpBg);

        //9m
        //too low, already enough sounds
        // const thetaBass = new Instrument("thetaBass", {"C3": "theta/t_bass.mp3"}, Instrument.TYPE_STANDARD );
        // thetaBass.notes = [
        //     { time: "0",  pitch: "C3"},
        //     { time: "8m",  pitch: "D3"},
        //     { time: "16m", pitch: "E3"},
        //     { time: "24m", pitch: "F3"},
        //     { time: "32m", pitch: "G2"},
        //     { time: "40m", pitch: "A2"},        
        // ];
        // thetaBass.loopLength = "48m";
        // thetaBass.loopTotal = 1;
        // thetaBass.timingRange = 0.0;
        // thetaBass.velocityRange = 0.25;
        // thetaBass.skipChance = 0.4;
        // thetaBass.noteChance = 0.95;
        // thetaBass.db = -10;
        // this.instruments.push(thetaBass);

    }
}