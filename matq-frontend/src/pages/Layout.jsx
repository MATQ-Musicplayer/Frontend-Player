import { Outlet, Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
/* ----------Material UI--------- */
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import HeadphonesIcon from "@mui/icons-material/Headphones";
/* ------------------------ */
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Home from "./Home";
import Player from "./Player";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Layout() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        fontFamily: "Roboto",
        height: "100",
      }}
    >
      <Outlet />

      <Box
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          padding: "1em",
        }}
        variant="rounded"
      >
        <BottomNavigation
          sx={{}}
          variant="rounded"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
          component={Link}
          to="/"
            label="Home"
            icon={<HomeIcon fontSize="large" />}
          />
          <BottomNavigationAction
          component={Link}
          to="/player"
            label="Music"
            icon={<HeadphonesIcon fontSize="large" />}
          />
          <BottomNavigationAction
          component={Link}
          to="/favorites"
            label="Favorites"
            icon={<FavoriteIcon fontSize="large" />}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}

export default Layout;
