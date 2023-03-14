import useBearStore from "../hooks/bears";
import Button from '@mui/material/Button';

function BearCounter() {
    const bears = useBearStore((state) => state.bears)
    const bearsInc = useBearStore(state => state.increasePopulation)


    return (
        <>
        <h1>{bears} around here ...</h1>

        <Button variant="contained" onClick={bearsInc}>Bears increase</Button>
        </>
    )
}

export default BearCounter;