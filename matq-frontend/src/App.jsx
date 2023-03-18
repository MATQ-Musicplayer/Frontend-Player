
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import Player from './components/Player';
import Favourites from './pages/Favourites';
import '@fontsource/roboto/300.css';
import Music from './pages/Music';
import Contact from './pages/Contact';


function App() {


  return (
    <>

      <BrowserRouter>
          <Routes>

              <Route path='/' element={<Layout />}>

                          <Route index element={<Home/> }></Route>

                          <Route path='/music' element={<Music />}></Route>

                          <Route path='/favs' element={<Favourites />} ></Route>

                          <Route path="*" element={<NotFoundPage />}></Route>
                          
                          <Route path='/contact' element={<Contact />}></Route>
                          
              </Route>

          </Routes>
        </BrowserRouter>

      
    </>
  )
}

export default App
