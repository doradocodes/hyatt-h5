import Song from "../Song";
import Instrument from "../Instrument";

export default class GammaSong extends Song {

    constructor(tone, id) {

        super(tone, id, Song.NAME_GAMMA);

        //BACKGROUND LOOP
        //30s
        const gammaBgLoop = new Instrument("gammaBgLoop", {"C3": "gamma/g_reverb_bed.mp3"}, Instrument.TYPE_BG_LOOP );
        gammaBgLoop.notes = [
            { time: "0", pitch: "C3"},
        ];
        gammaBgLoop.loopLength = 19; //seconds
        gammaBgLoop.loopTotal = -1;
        gammaBgLoop.db = -17; 
        this.instruments.push(gammaBgLoop);

        //12m
        const gammaChakraArp = new Instrument("gammaChakraArp", {"C3": "gamma/g_chakra_arp.mp3"}, Instrument.TYPE_STANDARD );
        gammaChakraArp.notes = [
            
            { time: "0",  pitch: "C3", velocity: 1.0},
            { time: "9m",  pitch: "G3", velocity: 0.85},
            { time: "15m",  pitch: "C4", velocity: 0.325},
            { time: "18m",  pitch: "C2", velocity: 0.8},
           
        ];
        gammaChakraArp.loopLength = "32m";
        gammaChakraArp.loopTotal = 1;
        gammaChakraArp.timingRange = 0.0;
        gammaChakraArp.velocityRange = 0.2;
        gammaChakraArp.skipChance = 0.4; 
        gammaChakraArp.db = -10;
        this.instruments.push(gammaChakraArp);
       
        // 13m
        //spinning wheel
        const gammaSpinningWheel = new Instrument("gammaSpinningWheel", {"C3": "gamma/g_spinning_wheel.mp3"}, Instrument.TYPE_STANDARD );
        gammaSpinningWheel.notes = [
            { time: "0", pitch: "C3", velocity: 1.0},
            { time: "10m", pitch: "C4", velocity: 0.25},
        ];
        gammaSpinningWheel.loopLength = "12m";
        gammaSpinningWheel.loopTotal = 1;
        gammaSpinningWheel.velocityRange = 0.125;
        gammaSpinningWheel.skipChance = 0.4;
        gammaSpinningWheel.db = -3;
        this.instruments.push(gammaSpinningWheel);

    
        //bell
        const gammaBell = new Instrument("gammaBell", {"C3": "gamma/g_bell_note.mp3"}, Instrument.TYPE_STANDARD );
        gammaBell.notes = [
            { time: "0:0:0",  pitch: "C0", velocity: 0.8},
            { time: "0:1:0",  pitch: "F0", velocity: 0.8},
            { time: "0:2:0",  pitch: "G0", velocity: 0.8},

            { time: "2:0:0",  pitch: "C1", velocity: 0.8},
            { time: "2:1:0",  pitch: "F1", velocity: 0.8},
            { time: "2:2:0",  pitch: "G1", velocity: 0.7},

            { time: "4:0:0",  pitch: "C2", velocity: 0.6},
            { time: "4:1:0",  pitch: "F2", velocity: 0.5},
            { time: "4:2:0",  pitch: "G2", velocity: 0.35},
        ];
        gammaBell.loopLength = "6m";
        gammaBell.loopTotal = 1;
        gammaBell.velocityRange = 0.15;
        gammaBell.skipChance = 0.45;
        gammaBell.db = -10;
        this.instruments.push(gammaBell);

        //sparkle
        const gammaCrystalSparkle = new Instrument("gammaCrystalSparkle", {"C3": "gamma/g_crystal_sparkle.mp3"}, Instrument.TYPE_STANDARD );
        gammaCrystalSparkle.notes = [
            { time: "0", pitch: "C1", velocity: 0.9},
            { time: "2m", pitch: "G1", velocity: 0.7},
            { time: "4m", pitch: "C2", velocity: 0.3},
            { time: "6m", pitch: "G1", velocity: 0.6},
        ];
        gammaCrystalSparkle.loopLength = "8m";
        gammaCrystalSparkle.loopTotal = 1;
        gammaCrystalSparkle.velocityRange = 0.2;
        gammaCrystalSparkle.skipChance = 0.4;
        gammaCrystalSparkle.db = -10;
        this.instruments.push(gammaCrystalSparkle);


        //PAD SOUNDS
        //5m
        //soft pad
        const gammaCrystalPad = new Instrument("gammaCrystalPad", {"C3": "gamma/g_crystal_bg.mp3"}, Instrument.TYPE_STANDARD );
        gammaCrystalPad.notes = [
            { time: "0", pitch: "C3", velocity: 1.0},
            { time: "4m", pitch: "G3", velocity: 0.45},
            { time: "8m", pitch: "F2", velocity: 0.6},
        ];
        gammaCrystalPad.loopLength = "12m";
        gammaCrystalPad.loopTotal = 1;
        gammaCrystalPad.velocityRange = 0.15;
        gammaCrystalPad.skipChance = 0.5;
        gammaCrystalPad.db = -15;
        this.instruments.push(gammaCrystalPad);

        const gammaChoirPad = new Instrument("gammaChoirPad", {"C3": "gamma/g_jv_warm_choir_pad.mp3"}, Instrument.TYPE_STANDARD );
        gammaChoirPad.notes = [
            
            { time: "0",  pitch: "G3", velocity: 0.9},

        ];
        gammaChoirPad.loopLength = "4m";
        gammaChoirPad.loopTotal = 1;
        gammaChoirPad.velocityRange = 0.2;
        gammaChoirPad.skipChance = 0.3; 
   
        gammaChoirPad.db = -9;
        this.instruments.push(gammaChoirPad);

        
        //too sharp
        // const gammaShimmer1 = new Instrument("gammaShimmer1", {"C3": "gamma/g_shimmer_1.mp3"}, Instrument.TYPE_STANDARD );
        // gammaShimmer1.notes = [
        //     { time: "0", pitch: "C4", velocity: 1.0},
        // ];
        // gammaShimmer1.loopLength = "5m";
        // gammaShimmer1.loopTotal = 1;
        // gammaShimmer1.velocityRange = 0.15;
        // gammaShimmer1.skipChance = 0//.5;
        // gammaShimmer1.db = -5;
        // this.instruments.push(gammaShimmer1);

        //9m 
        //very high spakrles
        //too sharp
        // const gammaChakraBg = new Instrument("gammaChakraBg", {"C3": "gamma/g_chakra_bg.mp3"}, Instrument.TYPE_STANDARD );
        // gammaChakraBg.notes = [
        //     { time: "0", pitch: "C2"}
        // ];
        // gammaChakraBg.loopLength = "8m";
        // gammaChakraBg.loopTotal = 1;
        // gammaChakraBg.velocityRange = 0.15;
        // gammaChakraBg.skipChance = 0;//.5;
        // gammaChakraBg.db = -27;
        // this.instruments.push(gammaChakraBg);

    }
}