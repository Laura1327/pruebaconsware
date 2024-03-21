import React from 'react';
import './App.css';
import logo from './img/logo1.png'
import img from './img/img1.png'
import img11 from './img/img11.png'
import img12 from './img/13.png'
import img13 from './img/12.png'
import img14 from './img/14.png'



function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="/pages/characters">Characters</a></li>
          <li><a href="/pages/episodes">Episodes</a></li>
          <li><span className= "logopr"><img src={logo} alt="Logo" className="logo" /></span></li> 
        </ul>
      </nav>
      <header className="App-header">
        <div className='container'>
          <img src={img} alt='Imagen principal' className='imgpr'/>
          <h1 className='text'>The Rick and Morty API</h1>
        </div>
        <div>
          <input className='input' type="text" placeholder="Search by" />
        </div>
        
        <div className='boxes'>
        <div className="box">
          <img  src={img11} alt="Imagen 1" className="imgbox"/>
          <p className='textboxes'>Communications Responsible Rick</p>
        </div>
        <div className="box">
          <img src={img12} alt="Imagen 2" className="imgbox"/>
          <p>Texto</p>
        </div>
        <div className="box">
          <img src={img13} alt="Imagen 2" className="imgbox"/>
          <p>Texto</p>
        </div>
        <div className="box">
          <img src={img14} alt="Imagen 2" className="imgbox"/>
          <p>Texto</p>
        </div>
      </div>
      </header>

      <footer>
        
      </footer>
    </div>

    
  );
}

export default App;
