import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import useTrackStore from "../hooks/TrackStore";
import TrackItem from "./TrackItem";


const API_URL_TRACKS = 'http://localhost:8080/tracks';

function TrackList(props) {
    // const [tracks, setTracks] = useState([]);

    // async function fetchTracks() {
    //     try {
    //         let response = await axios.get(API_URL_TRACKS);
    //         console.log(response);
    //         return response.data;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect( () => {
    //     (async function () {
    //         let data = await fetchTracks();
    //         console.log(data);
    //         setTracks(data)
    //     })()
    // }, []);
    const fetchTracks = useTrackStore(state => state.fetchAllTracks);
    const tracks = useTrackStore(state => state.tracks);
    const isLoading = useTrackStore(state => state.isLoading);

    useEffect(() => {
        fetchTracks()
        console.log(tracks);
    },[])

    let renderTracks = tracks.map(track => {
        return <TrackItem key={track._id} title={track.title} artist={track.artist} image={track.image} src={track.src} year={track.year} />
    });
    
    return (
        <Grid container spacing={2}>
            {isLoading ? <Typography variant="h3" component="h6">Loading...</Typography>  : renderTracks}
            
        </Grid>
    )
}

export default TrackList;