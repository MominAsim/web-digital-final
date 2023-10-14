import './App.css';
import React from "react";
import Login from "./Login";
import Register from './Register';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'

function App(){
  const [data, setData] = useState('');
useEffect(() => {
    fetch('/backend/src/main.rs') // Replace with the actual endpoint URL
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
}, []);
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='Login' element={<Login />} />
           <Route path='Register' element={<Register />} />
        </Routes>
      </BrowserRouter> 
</div>
  );
}
export default App;

