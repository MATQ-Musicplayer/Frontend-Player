
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import Player from './pages/Player';
import Favourites from './pages/Favourites';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>

            <Route path='/' element={<Layout />}>

              <Route index element={<Home/> }></Route>

              <Route path='/player' element={<Player />}></Route>

              <Route path='/favs' element={<Favourites />} ></Route>

              <Route path="*" element={<NotFoundPage />}></Route>

            </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
