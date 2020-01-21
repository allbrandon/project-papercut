import React from 'react'; 
import './HeaderComponent.scss';
// import HamburgerMenuComponent from './HamburgerMenuComponent';
import ProfileIcon from './Profile.svg'
import Burger from './Burger.svg'




const HeaderComponent = (props:any) => { 
    return (
    <div className="header__container">
        <div className="nav">
        {/* <HamburgerMenuComponent /> */}
        <img src={Burger} alt=""></img>
        <img src={ProfileIcon} alt=""></img>
        </div>
        <h1 className="greeting__a">Hi {props.name}</h1> 
        <h2 className="greeting__b">Enjoy your digital receipts</h2>

    </div>

    );



} 

export default HeaderComponent;