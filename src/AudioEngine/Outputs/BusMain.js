class BusMain {

  //tone ref and main bus input (which gets passed to the players)
  constructor(tone, mainBusInput){

    //adjust vol if needed
    const amp = new tone.Volume(0);
        
    //meter the signal 
    
    // this.meter = new tone.Meter();
    // setInterval(() => {
    //   const level = this.meter.getValue().toFixed(0);
    //   if (level > -60) {
    //     console.log("METER ", level);
    //   }
    // }, 2400);

    //main bus signal chain with meter
    // mainBusInput.connect(amp);
    // amp.connect(this.meter);
    // this.meter.toDestination();

    //without meter
    mainBusInput.connect(amp);
    amp.toDestination();
      
  }
}

export default BusMain;