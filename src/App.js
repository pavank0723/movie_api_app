import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='movie/:id' element = {<SingleMovie />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App