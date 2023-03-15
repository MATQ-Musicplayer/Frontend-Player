import * as React from 'react';
import { Search } from "@mui/icons-material";
import { AppBar, TextField, Toolbar, Typography} from "@mui/material";
import { Box } from "@mui/system";
import VolumeControls from './VolumeControls';



function Header() {

    return (
        <AppBar 
        position="static"
        >
                <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
                >
                    <Typography
                        variant="h6"
                        component={"span"}
                    >
                        MATQ Music
                    </Typography>
                        

                    <VolumeControls />

                    <Box
                    sx={{
                        display: "flex"
                    }}
                    >
                        <TextField
                            type={"search"}
                            label="Search"
                            variant="standard"
                        >

                        </TextField>
                    </Box>

                </Toolbar>
        </AppBar>
    )
}

export default Header;