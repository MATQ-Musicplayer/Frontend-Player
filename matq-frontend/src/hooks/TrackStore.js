import axios from "axios";
import { create } from "zustand";


const API_URL_TRACKS = 'http://localhost:8080/tracks';


const useTrackStore = create((set, get) => ({
    tracks: [],
    currentTrack: null,
    isPlaying: false,
    isLoading: false,
    errors: [] ,
    volume: 1,
    fetchAllTracks: async () => {
        set({isLoading: true});
        const result = await axios.get(API_URL_TRACKS);
        set({isLoading: false});
        set({tracks: result.data})
    },
    nextTrack: async () => {

    },
    prevTrack: async () => {

    },
    setVolume: (vol) => set(state => ({volume: vol / 100})),
    setIsPlaying: () => set(state => ({isPlaying: !state.isPlaying}))
}));


export default useTrackStore;