import { Outlet, Link } from "react-router-dom";
import '@fontsource/roboto/300.css';
/* ----------Material UI--------- */
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import HeadphonesIcon from '@mui/icons-material/Headphones';
/* ------------------------ */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Home from "./Home";
import Player from "./Player";
import Header from "../components/Header";

let theme = createTheme();
theme = responsiveFontSizes(theme);



function Layout() {
    const [value, setValue] = React.useState(0);


    return (
        <Box 
            sx={{
                fontFamily: 'Roboto',
                minHeight: '100',
            }}
        >
            <Header></Header>


            <Outlet  />

            <Box 
            sx={{
                position: "fixed",
                left: 0,
                bottom: 0,
                width: '100%',
            }}
            >
                    <BottomNavigation
                        sx={{
                            padding: 1
                        }}
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction href="/"  label="Home" icon={<HomeIcon fontSize="large"/>} />
                        <BottomNavigationAction  href="/player" label="Music" icon={<HeadphonesIcon fontSize="large"/>} />
                        <BottomNavigationAction href="/favs" label="Favorites" icon={<FavoriteIcon fontSize="large"/>} />
                        
                    </BottomNavigation>
            </Box>
        </Box>
    );
}

export default Layout;
