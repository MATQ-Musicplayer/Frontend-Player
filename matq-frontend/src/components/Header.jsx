import { Search } from "@mui/icons-material";
import { AppBar, Autocomplete, FormControl, TextField, Toolbar, Typography} from "@mui/material";



function Header() {
    
    const tracks = [
        {
            title: "Weekend - Starboy"
        },
        {
            title: "Scriptonite - Довод"
        }
    ]

    return (
        <AppBar 
        position="static"
        >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={"span"}
                        sx={{
                            flexGrow: 1
                        }}
                    >
                        MATQ Music
                    </Typography>

                    <Search
                    color="inherit"
                    >
                    </Search>
                    <TextField
                    type={"search"}
                    label="Search"
                    variant="standard"
                    >

                    </TextField>
                    


                </Toolbar>
        </AppBar>
    )
}

export default Header;