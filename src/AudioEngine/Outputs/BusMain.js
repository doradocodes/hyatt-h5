class BusMain {
  constructor(tone, mainBusInput) {
    this.fft = new tone.FFT(16); // Small FFT = fast + still useful
    this.volume = new tone.Volume(0); // You can still adjust this if needed

    // Connect signal chain
    mainBusInput.connect(this.volume);
    this.volume.connect(this.fft);

    // Optionally connect to output
    this.volume.toDestination();
  }

  // Returns array of 32 values in dB (range: ~[-100, 0])
  getLevels() {
    return this.fft.getValue(); // Float32Array of dB values
  }
}

export default BusMain;

