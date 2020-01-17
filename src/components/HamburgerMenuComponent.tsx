import React from 'react'; 
import './HamburgerMenuComponent.scss';
import Burger from './Burger.svg';
import { slide as Menu } from 'react-burger-menu';




const HamburgerMenuComponent = (props:any) => { 
// title, description, price, date 
    return (
        <Menu className="bm-burger-button bm-menu" customBurgerIcon={<img src={Burger} alt="" />}>
            
        </Menu>

    );



} 

export default HamburgerMenuComponent;