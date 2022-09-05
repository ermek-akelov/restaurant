import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Catering, Restaurant, Tavern, About} from './pages'
import {Layout } from './components';
import './App.css';

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Tavern />} />
              <Route path='restaurant' element={<Restaurant />}/>
              <Route path='catering' element={<Catering />} />
              <Route path='about' element={<About/>}/>
              {/* <Route path='*' element={<NotFound />} /> */}
            </Route>
        </Routes>
    </>
  )
}

export default App;