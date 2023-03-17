import axios from "axios";
import { create } from "zustand";


const API_URL_TRACKS = 'http://localhost:8080/tracks';


const useTrackStore = create((set, get) => ({
    tracks: [],
    currentTrack: 0,
    setCurrentTrack: (trackId) => set(state => ({currentTrack: trackId})),
    isPlaying: false,
    isLoading: false,
    errors: [],
    volume: 1,
    fetchAllTracks: async () => {
        set({isLoading: true});
        const result = await axios.get(API_URL_TRACKS);
        set({isLoading: false});
        set({tracks: result.data});
    },
    nextTrack: async () => {

    },
    prevTrack: async () => {

    },
    setVolume: (vol) => set(state => ({volume: vol / 100})),
    setIsPlaying: (bool) => set(state => ({isPlaying: bool})),
    player: null,
    setPlayer: (newPlayer) => {
        get().player?.stop();
        set(state => ({player: newPlayer}));
    },
    startPlay: () => {
        get().player?.play();
    },
    pausePlay: () => {
        get().player?.pause();
    },
    stopPlay: () => {
        get().player?.stop();
        
    },
    queue: [],
    addToQueue: (trackId) => {
        const queue = get().queue;
        const track = get().tracks.find(track => track._id === trackId);
        queue.push(track);
        set({queue: queue});
    }
}));


export default useTrackStore;