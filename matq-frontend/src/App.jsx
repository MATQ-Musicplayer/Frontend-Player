
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import Player from './pages/Player';
import Favourites from './pages/Favourites';
import '@fontsource/roboto/300.css';
import Music from './pages/Music';

function App() {


  return (
    <>

      <BrowserRouter>
          <Routes>

              <Route path='/' element={<Layout />}>

                          <Route index element={<Home/> }></Route>

                          <Route path='/music' element={<Music />}></Route>

                          <Route path='/favorites' element={<Favorites />} ></Route>

                          <Route path="*" element={<NotFoundPage />}></Route>

              </Route>

          </Routes>
        </BrowserRouter>

      
    </>
  )
}

export default App
