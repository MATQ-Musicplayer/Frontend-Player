import { useState, useEffect } from "react";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import { CardMedia } from "@mui/material";
import useTrackStore from "../hooks/TrackStore";
import useSound from "use-sound";

const defaultImage =
  "https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg";



const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider({tracks}) {
    const vol = useTrackStore(state => state.volume);
    const setPlayer = useTrackStore(state => state.setPlayer);

    const isPlaying = useTrackStore(state => state.isPlaying);
    const setIsPlaying = useTrackStore(state => state.setIsPlaying);

    const startPlay = useTrackStore(state => state.startPlay);
    const pausePlay = useTrackStore(state => state.pausePlay);
    const stopPlay = useTrackStore(state => state.stopPlay);

    const currentTrack = useTrackStore(state => state.currentTrack);
    const setCurrentTrack = useTrackStore(state => state.setCurrentTrack);

    const addToQueue = useTrackStore(state => state.addToQueue);
    const queue = useTrackStore(state => state.queue);

    const theme = useTheme();
    const [dur, setDur] = useState(200); // seconds
    const [position, setPosition] = useState(32);
    const [paused, setPaused] = useState(false);

    const trackIndex = useTrackStore(state => state.trackIndex);
    const increaseTrackIndex = useTrackStore(state => state.increaseTrackIndex);
    const decreaseTrackIndex = useTrackStore(state => state.decreaseTrackIndex);
    const setTrackIndex = useTrackStore(state => state.setTrackIndex);
    
    const [track, setTrack] = useState({});

    const [play, {pause, stop, duration}] = useSound(track.src, {
        volume: vol,
        onend: () => {
            console.log('song ended');
            setIsPlaying(false);
        }
    });

    useEffect(() => {
        tracks.forEach(track => {
            addToQueue(track._id);
        });
        console.log(queue);
        setCurrentTrack(tracks[trackIndex]);
        setDur(duration);


    }, [tracks]); 
       
    useEffect(() => {
        if (currentTrack) {
            setTrack(currentTrack);   
            setDur(duration);

        }
    }, [currentTrack]);

   
  
    function handlePlay() {
        console.log(track);

        if (!isPlaying) {
            play();
            setIsPlaying(true);
            console.log('PLAY!!!!!!!!!!!')

        } else {
            pause();
            setIsPlaying(false);
            console.log('PAUSE');
        }
    }

    function nextTrackHandler() {
        console.log('Next track');
        stop();
   
        if (queue?.length > trackIndex) {
            increaseTrackIndex()
        } else {
            setTrackIndex(0)
        }
  
        console.log(trackIndex);

        setIsPlaying(false);
        setPlayer({
            play, pause, stop
        });
        
        setTrack(queue[trackIndex]);
        // setDur(formatDuration(duration));
        // setDur(duration);
        setDur(duration);

    }
   
    function prevTrackHandler() {
        stop()

        setPlayer({
            play, pause, stop
        });
        setIsPlaying(false);
        console.log('Prev track');

        if (trackIndex > 1) {
            decreaseTrackIndex();
        } else {
            setTrackIndex(tracks.length);
        }
        console.log(trackIndex);

        setTrack(queue[trackIndex]);

        setDur(duration);

    } 
 

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
    const lightIconColor =
        theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"; 

    return (  
        <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Widget>
            <Box sx={{ display: "flex", alignItems: "center" }}>
            <CoverImage>
                <img alt={track.title} src={track.image} />
            </CoverImage>

            <Box sx={{ ml: 1.5, minWidth: 0 }}>
                <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={500}
                >
                {track.year}
                </Typography>
                <Typography noWrap>
                <b>{track.title}</b>
                </Typography>
                <Typography noWrap letterSpacing={-0.25}>
                {track.artist}
                </Typography>
            </Box>
            </Box>
            <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={dur}
            onChange={(_, value) => setPosition(value)}
            sx={{
                color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                height: 4,
                "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                    boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                        ? "rgb(255 255 255 / 16%)"
                        : "rgb(0 0 0 / 16%)"
                    }`,
                },
                "&.Mui-active": {
                    width: 20,
                },
                },
                "& .MuiSlider-rail": {
                opacity: 0.28,
                },
            }}
            />
            <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: -2,
            }}
            >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(dur - position)}</TinyText>
            </Box>
            <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: -1,
            }}
            >
            <IconButton 
            aria-label="previous song"
            onClick={prevTrackHandler}
            >
                <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
                aria-label={!isPlaying ? "play" : "pause"}
                onClick={() => {
                    handlePlay()
                    // setPaused(!isPlaying);
                    // if (!paused) {
                    //     // play()
                    //     console.log('PLAY!!!!!!!!!!!')
                    // } else {
                    //     // pause()
                    //     console.log('PAUSE');
                    // }
                }} 
            > 
                {!isPlaying ? (
                <PlayArrowRounded
                    sx={{ fontSize: "3rem" }}

                />
                ) : (
                <PauseRounded
                    sx={{ fontSize: "3rem" }}
                    htmlColor={mainIconColor}
                />
                )}
            </IconButton>
            <IconButton 
            aria-label="next song"
            onClick={nextTrackHandler}
            >
                <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            </Box>
            <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1, px: 1 }}
            alignItems="center"
            >
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
                aria-label="Volume"
                defaultValue={30}
                sx={{
                color:
                    theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                "& .MuiSlider-track": {
                    border: "none",
                },
                "& .MuiSlider-thumb": {
                    width: 24,
                    height: 24,
                    backgroundColor: "#fff",
                    "&:before": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                    },
                },
                }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
            </Stack>
        </Widget>
        </Box>
    );
}
