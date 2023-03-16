
import { Card, Container, Typography } from "@mui/material";
import PlayerControls from "./PlayerControls";
import * as React from 'react';
import { Box } from "@mui/system";





function Player() {
    


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
                <Typography>Track läuft</Typography>

                <Card>
                
                </Card>
            </Box>
            


       


        </Container>
    )
}

export default Player;