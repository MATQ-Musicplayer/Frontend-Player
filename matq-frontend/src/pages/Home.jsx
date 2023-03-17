import Button from '@mui/material/Button';
import BearCounter from '../components/bearCounter';
import Box from '@mui/material/Box';

function Home() {
    
    
    return (
        <>
        <Box align="center">
            <BearCounter sx={{ display: 'flex', fontFamily: 'roboto' }}/>
            <Box sx={{fontFamily: 'roboto' }}>
                <h2>Bla bla</h2>
            </Box>
            </Box>
        </>
    )
}


export default Home;