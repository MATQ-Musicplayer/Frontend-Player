import * as React from 'react';
import { useState } from 'react';
import { Box } from "@mui/system";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import useTrackStore from '../hooks/TrackStore';


function VolumeControls() {
    const [vol, setVol] = useState(100);
    const volume = useTrackStore(state => state.volume);
    const setVolume = useTrackStore(state => state.setVolume);

    const volumeHandleChange = (event, newValue) => {
        setVol(newValue);
        setVolume(newValue);
        console.log(volume);
    };

    return (
        <Box sx={{ width: 200, color: "white" }} >
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider sx={{color: "white"}} aria-label="Volume" value={vol} onChange={volumeHandleChange} />
                <VolumeUp />
            </Stack>

        </Box>
    )
}

export default VolumeControls;