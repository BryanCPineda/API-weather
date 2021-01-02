import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import navscrip from './Nav.module.css'; 


function Nav({onSearch}) {
  return (
    
    <div className={navscrip.menubar}>
        <div className={navscrip.flex}>
    <div className={navscrip.tamano}> <img className={navscrip.logoHenry} src={Logo} alt= 'logo'></img> </div>
        
        <span className={navscrip.colorspan} >Henry - Weather App</span>
    <div className={navscrip.barrasearch}> <SearchBar onSearch={onSearch} /> </div>
        </div>
    </div>
  );
};

export default Nav;
