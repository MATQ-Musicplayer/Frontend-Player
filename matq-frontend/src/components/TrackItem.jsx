import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useTrackStore from "../hooks/TrackStore";
import useSound from "use-sound";



function TrackItem({title, artist,  image, src, year, trackId}) {
    // Zustand states
    const vol = useTrackStore(state => state.volume);
    const setPlayer = useTrackStore(state => state.setPlayer);
    const isPlaying = useTrackStore(state => state.isPlaying);
    const setIsPlaying = useTrackStore(state => state.setIsPlaying);
    const startPlay = useTrackStore(state => state.startPlay);
    const pausePlay = useTrackStore(state => state.pausePlay);
    const stopPlay = useTrackStore(state => state.stopPlay);
    const currentTrack = useTrackStore(state => state.currentTrack);
    const setCurrentTrack = useTrackStore(state => state.setCurrentTrack);
    

    const [play, {pause, stop}] = useSound(src, {
        volume: vol,
        onend: () => {
            console.log('song ended');
            setIsPlaying(false);
        }
    });
// ----------------------------------------------------



    function playPauseHandler(evt) {
        setCurrentTrack(trackId);

        setPlayer({
            play, pause, stop
        });

        if (evt.target.textContent === 'Stop' && isPlaying) {
            console.log('Stop!!!');
            pausePlay()
            setIsPlaying(false);
        } else {
            console.log('PLAAAAYY');
            startPlay();
            setIsPlaying(true);
        }

        console.log(isPlaying);

    }

    return (
        <Grid item xs={6} md={3}  >
            <Card
            sx={{
                height: "100"
            }}
            >
                <CardMedia 
                sx={{ height: 140 }}
                image={image}
                alt="Poster"
                />
                <CardContent
                sx={{
                    height: 100
                }}
                >
                    <Typography
                    variant="h6"
                    component={"h3"}
                    >
                        {title}
                    </Typography>

                    <Typography
                    variant="body1"
                    component={"h5"}
                    >
                        {artist}
                    </Typography>

                    <Typography
                    variant="body2"
                    component={"h6"}
                    fontWeight="bold"
                    >
                        {year}
                    </Typography>

                </CardContent>

                <CardActions>
                    <Button 
                    variant="outlined"
                    onClick={evt => playPauseHandler(evt)}

                    >
                        {isPlaying && (currentTrack === trackId) ? "Stop" : "Play"}
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    )
}

export default TrackItem;