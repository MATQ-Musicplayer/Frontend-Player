
import { Card, CardMedia, Container, Typography } from "@mui/material";
import PlayerControls from "./PlayerControls";
import * as React from 'react';
import { Box } from "@mui/system";
import useTrackStore from "../hooks/TrackStore";


const defaultImage = 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg';


function Player() {
    const currentTrack = useTrackStore(state => state.currentTrack);


    return (
        <Container
        
        sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            
            <Box>


                <Card>
                    <Typography>Track läuft</Typography>
                    <CardMedia
                        sx={{ height: 220, width: 220 }}
                        image={currentTrack ? currentTrack.image : defaultImage}
                        alt="Poster"
                    />
                        
                </Card>
            </Box> 
              


       


        </Container>
    )
}

export default Player;