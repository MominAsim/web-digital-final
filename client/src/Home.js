import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
return (
    <>
    <header>
      <h1 className='webdigital'>WEB DIGITAL</h1> 
      <div id="buttonsheader">
      <Link className="allbuttons" id="instagram" to="https://www.instagram.com/p/CwYLB8aIFOc/" target="_blank">INSTAGRAM</Link>
      <Link className="allbuttons" id="loginid" to="/Login">LOGIN</Link>
      <Link className="allbuttons" id="registerid" to="/Register">REGISTER</Link>
      </div>
    </header>    
</>
  );
};
export default Home;