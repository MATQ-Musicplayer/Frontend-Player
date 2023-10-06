import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TrackList from '../components/TrackList';
import { Container } from '@mui/material';

function Home() {
    
    
    return (
        <>
            <h1>Hello Username</h1>
            <BearCounter sx={{ display: 'flex', fontFamily: 'roboto' }}/>
            <Box sx={{fontFamily: 'roboto' }}>
                <h2>Bla bla</h2>
            </Box>
        </>
    )
}


export default Home;