import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Category from './components/page/Category';
import Log from './components/page/Log';
import Login from './components/page/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}  >
            <Route index element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/log' element={<Log />} />
            <Route path='/login' element={<Login />} />
            <Route path='/category' element={<Category />} />
            
              
          



          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
