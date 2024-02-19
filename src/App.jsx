import React from 'react';
import Navbar from './Comonents/Navbar';
import Navbar2 from './Comonents/Navbar2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Navbar/Home';
import { About } from './Navbar/About';
import Courses from './Navbar/Courses';
import Activities from './Navbar/Activities';
import Admision from './Navbar/Admision';
import Art from './Navbar/Art';
import Franchise from './Navbar/Franchise';
import Videos from './Navbar/Videos';
import PayFee from './Navbar/PayFee';
import Contect from './Navbar/Contect';

const App = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/activities' element={<Activities/>} />
          <Route path='/admission' element={<Admision/>} />
          <Route path='/art' element={<Art/>} />
          <Route path='/franchise' element={<Franchise/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/payFee' element={<PayFee/>} />
          <Route path='/contect' element={<Contect/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
