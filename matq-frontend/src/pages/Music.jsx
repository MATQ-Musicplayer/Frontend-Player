
import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import MusicPlayerSlider from "../components/MusicPlayer";
import Player from "../components/Player";
import useTrackStore from "../hooks/TrackStore";



function Music() {
    
    const fetchTracks = useTrackStore(state => state.fetchAllTracks);
    const tracks = useTrackStore(state => state.tracks);

    useEffect(() => {
        fetchTracks();
    })

    return (
        <Container
        sx={{
            height: '90vh',
            display: "flex",
            alignItems: 'center',
        }}
        >

            <MusicPlayerSlider tracks={tracks}/>

        </Container>
    )
}

export default Music;