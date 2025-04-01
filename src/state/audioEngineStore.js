import {create} from "zustand";

export const useAudioEngineStore = create((set) => ({
    audioEngine: null,
    setAudioEngine: (audioEngine) => set({audioEngine}),
}));
