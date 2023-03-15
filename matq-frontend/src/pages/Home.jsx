import Button from '@mui/material/Button';
import BearCounter from '../components/bearCounter';
import Box from '@mui/material/Box';
import TrackList from '../components/TrackList';
import { Container } from '@mui/material';

function Home() {
    
    
    return (
        <Container
        sx={{
            mt: "1rem"
        }}
        >
            <h1>Hello Username</h1>
            <TrackList/>
        </Container>
    )
}


export default Home;