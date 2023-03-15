import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";


function TrackItem(props) {
    


    return (
        <Grid item xs={6} md={2}  >
            <Card
            sx={{
                height: "100"
            }}
            >
                <CardMedia 
                sx={{ height: 140 }}
                image="https://picsum.photos/seed/picsum/536/354"
                alt="..."
                />
                <CardContent>
                    <Typography
                    variant="h6"
                    component={"h3"}
                    >
                        Weekend - Starboy
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button 
                    variant="outlined"
                    onClick={() => {

                    }}

                    >
                        Play
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    )
}

export default TrackItem;