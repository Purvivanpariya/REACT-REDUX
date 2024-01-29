import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import View from './Pages/View'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<View/>}/>
          <Route path='/add' element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
