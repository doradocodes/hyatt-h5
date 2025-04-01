import Song from "../Song";
import Instrument from "../Instrument";

export default class DeltaSong extends Song {

    constructor(tone, id) {

        super(tone, id, Song.NAME_DELTA);

        //BACKGROUND LOOP
        //29m
        const deltaBgLoop = new Instrument("deltaBgLoop", {"C3": "delta/d_reverb_bed.mp3"}, Instrument.TYPE_BG_LOOP );
        deltaBgLoop.notes = [
            { time: "0", pitch: "C3"},
        ];
        deltaBgLoop.loopLength = 21; //seconds
        deltaBgLoop.loopTotal = -1;
        deltaBgLoop.db = -10; 
        this.instruments.push(deltaBgLoop);

        //NOTES

        const deltaSubBassNote = new Instrument("deltaSubBassNote", {"C3": "delta/d_sub_bass_note.mp3"}, Instrument.TYPE_STANDARD );
        deltaSubBassNote.notes = [
            { time: "0", pitch: "C4", velocity: 0.4},
            { time: "6m", pitch: "A3", velocity: 0.4},
            { time: "11m", pitch: "C3", velocity: 0.4},
        ];
        deltaSubBassNote.loopLength = "16m";
        deltaSubBassNote.loopTotal = 1;
        deltaSubBassNote.timingRange = 0.6;
        deltaSubBassNote.velocityRange = 0.1;
        deltaSubBassNote.noteChance = 0.6;
        deltaSubBassNote.skipChance = 0.6;
        deltaSubBassNote.db = -10;
        this.instruments.push(deltaSubBassNote);

     
        const deltaAmbientTinesNote = new Instrument("deltaAmbientTinesNote", {"C3": "delta/d_ambient_tines_note.mp3"}, Instrument.TYPE_STANDARD );
        deltaAmbientTinesNote.notes = [
            { time: "0", pitch: "C3", velocity: 0.65},
            { time: "5m", pitch: "C2", velocity: 0.65},
          
        ];
        deltaAmbientTinesNote.loopLength = "14m";
        deltaAmbientTinesNote.loopTotal = 1;
        deltaAmbientTinesNote.timingRange = 0.6;
        deltaAmbientTinesNote.velocityRange = 0.2;
        deltaAmbientTinesNote.noteChance = 0.6;
        deltaAmbientTinesNote.skipChance = 0.7;
        deltaAmbientTinesNote.db = -6;
        this.instruments.push(deltaAmbientTinesNote);

    }
}