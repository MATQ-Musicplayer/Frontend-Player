import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useState } from "react";
import useTrackStore from "../hooks/TrackStore";
import useSound from "use-sound";



function TrackItem({title, artist,  image, src, year}) {
    // Zustand states
    const vol = useTrackStore(state => state.volume);
    // useState
    const [playing, setPlaying] = useState(false);
    // useSound 
    const [play, {stop, pause}] = useSound(src, {
        volume: vol
    });



    function playPauseHandler() {
        setPlaying(!playing);
        !playing ? play() : pause();
    }

    return (
        <Grid item xs={6} md={2}  >
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
                <CardContent>
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
                    onClick={playPauseHandler}

                    >
                        {playing ? "Pause" : "Play"}
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    )
}

export default TrackItem;