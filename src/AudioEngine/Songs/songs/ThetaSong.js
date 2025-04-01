import Song from "../Song";
import Instrument from "../Instrument";

export default class ThetaSong extends Song {

    constructor(tone, id) {

        super(tone, id, Song.NAME_THETA);

        //BACKGROUND LOOP
        //14m
        const thetaBgLoop = new Instrument("thetaBgLoop", {"C3": "theta/t_bg_loop.mp3"}, Instrument.TYPE_BG_LOOP );
        thetaBgLoop.notes = [
            { time: "0", pitch: "C3"},
        ];
        thetaBgLoop.loopLength = "7m";
        thetaBgLoop.loopTotal = -1;
        thetaBgLoop.db = -10; 
        this.instruments.push(thetaBgLoop);

        //8m
        const thetaBass = new Instrument("thetaBass", {"C3": "theta/t_bass_atm.mp3"}, Instrument.TYPE_STANDARD );
        thetaBass.notes = [
            { time: "0", pitch: "G3", velocity: 0.75},
            { time: "5m", pitch: "C4", velocity: 0.65},
            { time: "10m", pitch: "C3", velocity: 0.9}
        ];
        thetaBass.loopLength = "18m";
        thetaBass.loopTotal = 1;
        thetaBass.velocityRange = 0.35;
        thetaBass.skipChance = 0.3;
        thetaBass.db = 0;
        this.instruments.push(thetaBass);

        //NOTES
        //6m
        const thetaBellNote = new Instrument("thetaBellNote", {"C3": "theta/t_bell_note.mp3"}, Instrument.TYPE_STANDARD );
        thetaBellNote.notes = [
            { time: "0", pitch: "C3"},
        ];
        thetaBellNote.loopLength = "8m";
        thetaBellNote.loopTotal = 1;
        thetaBellNote.timingRange = 0.6;
        thetaBellNote.velocityRange = 0.4;
        thetaBellNote.skipChance = 0.45;
        thetaBellNote.db = -6;
        this.instruments.push(thetaBellNote);

        //7m
        const thetaChimesNote = new Instrument("thetaChimesNote", {"C3": "theta/t_chimes_note.mp3"}, Instrument.TYPE_STANDARD );
        thetaChimesNote.notes = [
            { time: "0", pitch: "G3", velocity: 0.7},
            { time: "5m", pitch: "C4", velocity: 0.45},
            { time: "8m", pitch: "C3", velocity: 1.0},
          
        ];
        thetaChimesNote.loopLength = "29m";
        thetaChimesNote.loopTotal = 1;
        thetaChimesNote.timingRange = 0.6;
        thetaChimesNote.velocityRange = 0.4;
        thetaChimesNote.skipChance = 0.3;
        thetaChimesNote.db = -3;
        this.instruments.push(thetaChimesNote);

        

        
        //BG
        //12m
        const thetaChimesBg = new Instrument("thetaChimesBg", {"C3": "theta/t_chimes_bg.mp3"}, Instrument.TYPE_STANDARD );
        thetaChimesBg.notes = [
            { time: "0", pitch: "C4", velocity: 0.3},
            { time: "5m", pitch: "C3", velocity: 1.0},
        ];
        thetaChimesBg.loopLength = "14m";
        thetaChimesBg.loopTotal = 1;
        thetaChimesBg.velocityRange = 0.3;
        thetaChimesBg.skipChance = 0.3;
        thetaChimesBg.db = 0;
        this.instruments.push(thetaChimesBg);
    }
}