import Song from "../Song";
import Instrument from "../Instrument";

export default class IntroSong extends Song {

    constructor(tone, id) {

        super(tone, id, Song.NAME_INTRO);

        //BACKGROUND LOOP
        //26s
        const introBgLoop = new Instrument("introBgLoop", {"C3": "intro/i_reverb_bed.mp3"}, Instrument.TYPE_BG_LOOP );
        introBgLoop.notes = [
            { time: "0", pitch: "C3"},
        ];
        introBgLoop.loopLength = 12; //seconds
        introBgLoop.loopTotal = -1;
        introBgLoop.db = -17; 
        this.instruments.push(introBgLoop);

        //NOTES
        const introGuzheng = new Instrument("introGuzheng", {"C3": "intro/i_guzheng_note.mp3"}, Instrument.TYPE_STANDARD );
        introGuzheng.notes = [
            { time: "0", pitch: "C2", velocity: 0.6},
            { time: "6m", pitch: "C3", velocity: 0.35},
          
        ];
        introGuzheng.loopLength = "12m";
        introGuzheng.loopTotal = 1;
        introGuzheng.timingRange = 0.6;
        introGuzheng.velocityRange = 0.4;
        introGuzheng.skipChance = 0.45;
        introGuzheng.noteChance = 0.0;
        introGuzheng.db = -2;
        this.instruments.push(introGuzheng);

        //9m
        const thetaBass = new Instrument("thetaBass", {"C3": "theta/t_bass_atm.mp3"}, Instrument.TYPE_STANDARD );
        thetaBass.notes = [
            { time: "0", pitch: "C3", velocity: 1.0}
        ];
        thetaBass.loopLength = "12m";
        thetaBass.loopTotal = 1;
        thetaBass.velocityRange = 0.4;
        thetaBass.skipChance = 0.1;
        thetaBass.db = -4;
        this.instruments.push(thetaBass);

        
        //BG
        //6m
        const introShimmerBg = new Instrument("introShimmerBg", {"C3": "intro/i_shimmer_bg.mp3"}, Instrument.TYPE_STANDARD );
        introShimmerBg.notes = [
            { time: "1m", pitch: "C3", velocity: 0.5},
        ];
        introShimmerBg.loopLength = "9m";
        introShimmerBg.loopTotal = 1;
        introShimmerBg.velocityRange = 0.5;
        thetaBass.skipChance = 0.5;
        introShimmerBg.db = -21;
        this.instruments.push(introShimmerBg);
    }
}