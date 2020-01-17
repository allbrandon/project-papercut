import React from 'react'; 
import ReceiptListComponent from './ReceiptListComponent'
import './MainScreen.scss'
import HeaderComponent from './HeaderComponent';




const MainScreen = (props:any) => {
    return(
    <div className="wrapper">
        <HeaderComponent />
        <div className="list__container">
            <ReceiptListComponent />
        </div>

        
    </div>

    );

}

export default MainScreen;