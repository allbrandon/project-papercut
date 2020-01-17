import React from 'react'; 
import './HeaderComponent.scss';
import HamburgerMenuComponent from './HamburgerMenuComponent';
import ProfileIcon from './Profile.svg'




const HeaderComponent = (props:any) => { 
    const name = "Austin"
    return (
    <div className="header__container">
        <div className="nav">
        <HamburgerMenuComponent />
        <img src={ProfileIcon} alt=""></img>
        </div>
        <h1 className="greeting__a">Hi {name}</h1> 
        <h1 className="greeting__b">Enjoy your digital receipts</h1>

    </div>

    );



} 

export default HeaderComponent;