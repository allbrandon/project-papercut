import React from 'react'; 
import './HeaderComponent.scss';
// import HamburgerMenuComponent from './HamburgerMenuComponent';
// import ProfileIcon from './Profile.svg'
// import Burger from './Burger.svg'
import { Link } from 'react-router-dom';
import IconComponent from './IconComponent';

export type HeaderComponentProps = {
    name: string,  
    empty: boolean,

}


const HeaderComponent = ({name, empty}:HeaderComponentProps) => { 
    return (
    <div className="header__container">
        <div className="nav">
        {/* <HamburgerMenuComponent /> */}
        {/* <img src={Burger} alt=""></img> */}
        <IconComponent type="Burger" size="small" shade={false} />
        <Link to='/profile'>
            {/* <img src={ProfileIcon} alt=""></img> */}
            <IconComponent type="settings"  size="small" shade={false} />
        </Link>
        </div> 
        <div className="greeting">
            <h1 className="greeting a">Hi {name}!</h1> 
            <h2 className="greeting b">{empty ? "Welcome to Papercut Receipts" : "Enjoy your digital receipts"}</h2>
        </div>

    </div>

    );



} 

export default HeaderComponent;