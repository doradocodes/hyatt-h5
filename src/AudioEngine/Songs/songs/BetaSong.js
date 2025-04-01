import Song from "../Song";
import Instrument from "../Instrument";

export default class BetaSong extends Song {

    constructor(tone, id) {

        super(tone, id, Song.NAME_BETA);

        //16m x 6 sets
        const betaBeats = new Instrument(
            "betaBeats", 
            {
                "C0": "beta/b_beat_1.mp3",
                "C1": "beta/b_beat_2.mp3",
                "C2": "beta/b_beat_3.mp3",
                "C3": "beta/b_beat_4.mp3",
                "C4": "beta/b_beat_5.mp3",
                "C5": "beta/b_beat_6.mp3"
            }, 
            Instrument.TYPE_BG_LOOP
        );
        betaBeats.notes = [
            { time: "0:0:0", pitch: "C0" },
            { time: "16m", pitch: "C1" },
            { time: "32m", pitch: "C2" },
            { time: "48m", pitch: "C3" },
            { time: "64m", pitch: "C4" },
            { time: "80m", pitch: "C5" },
        ];
        betaBeats.loopLength = "96m";
        betaBeats.loopTotal = -1; 
        betaBeats.noteChance = 0.99; //order is always mixed 
        betaBeats.db = -2;
        this.instruments.push(betaBeats);

        //33s
        const betaAtm = new Instrument("betaAtm", {"C3": "beta/b_bg_loop.mp3"}, Instrument.TYPE_STANDARD );
        betaAtm.notes = [
            { time: "0", pitch: "C3"}
        ];
        betaAtm.loopLength = 22;
        betaAtm.loopTotal = -1;
        betaAtm.db = -16;
        this.instruments.push(betaAtm);

        const betaHarpNote = new Instrument("betaHarpNote", {"C3": "beta/b_harp_note.mp3"}, Instrument.TYPE_STANDARD );
        betaHarpNote.notes = [
            { time: "0:3:0",  pitch: ["C2", "G1"], velocity: 0.8},
            { time: "3:3:0",  pitch: ["G2", "C2"], velocity: 0.8},
            { time: "6:1:0",  pitch: ["C3", "G2"], velocity: 0.8},
            { time: "8:3:0",  pitch: ["C2", "G1"], velocity: 0.8},
            { time: "10:3:0", pitch: ["E2", "C3"], velocity: 0.8},
        ];
        betaHarpNote.loopLength = "12m";
        betaHarpNote.loopTotal = 1;
        betaHarpNote.timingRange = 0.4;
        betaHarpNote.velocityRange = 0.3;
        betaHarpNote.skipChance = 0.4; 
        betaHarpNote.noteChance = 0.75;
        betaHarpNote.db = -22;
        this.instruments.push(betaHarpNote);

        //6m
        const betaHarpBg = new Instrument("betaHarpBg", {"C3": "beta/b_harp_bg.mp3"}, Instrument.TYPE_STANDARD );
        betaHarpBg.notes = [
            { time: "0", pitch: "C3"}
        ];
        betaHarpBg.loopLength = "6m";
        betaHarpBg.loopTotal = 1;
        betaHarpBg.db = -20;
        this.instruments.push(betaHarpBg);

        
        //11m
        const betaBellsBg = new Instrument("betaBellsBg", {"C3": "beta/b_bells_bg.mp3"}, Instrument.TYPE_STANDARD );
        betaBellsBg.notes = [
            { time: "0", pitch: "C3"},
        ];
        betaBellsBg.loopLength = "11m";
        betaBellsBg.loopTotal = 1;
        betaBellsBg.db = -29;
        this.instruments.push(betaBellsBg);

        

        //7m
        const betaDriftBg = new Instrument("betaDriftBg", {"C3": "beta/b_drift_bg.mp3"}, Instrument.TYPE_STANDARD );
        betaDriftBg.notes = [
            { time: "0", pitch: "C2", velocity: 0.75},
            { time: "4m", pitch: "C4", velocity: 0.15},
            { time: "9m", pitch: "C3", velocity: 0.5}
        ];
        betaDriftBg.timingRange = 0.6;
        betaDriftBg.loopLength = "17m";
        betaDriftBg.loopTotal = 1;
        betaDriftBg.velocityRange = 0.15;
        betaDriftBg.skipChance = 0.5;
        betaDriftBg.db = -20;
        this.instruments.push(betaDriftBg);

        //8m
        const betaDreamBg = new Instrument("betaDreamBg", {"C3": "beta/b_dream_bg.mp3"}, Instrument.TYPE_STANDARD );
        betaDreamBg.notes = [
            { time: "0", pitch: "C4", velocity: 0.2},
            { time: "3m", pitch: "C3", velocity: 0.6},
        ];
        betaDreamBg.loopLength = "9m";
        betaDreamBg.loopTotal = 1;
        betaDreamBg.skipChance = 0.5;
        betaDreamBg.db = -9;
        this.instruments.push(betaDreamBg);

        

    }
}