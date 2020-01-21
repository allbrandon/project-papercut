import React from 'react'; 
import ReceiptListComponent from './ReceiptListComponent'
import './MainScreen.scss'
import HeaderComponent from './HeaderComponent';




const MainScreen = (props:any) => {
    const items = [{
        store: "Woolworths",
        items: ["Bok Choy", "Maple Syrup"], 
        date: "11/02/19",
        total: 35,
        id: 1,
    }, 
    {
        store: "Woolworths",
        items: ["Tim Tams", "Yoghurt", "Frozen Pizza"], 
        date: "11/02/19",
        total: 35,
        id: 2,

    }]
    const name = "Austin";
    return(
    <div className="wrapper">
        <HeaderComponent name={name}/>
        <div className="list__container">
            <ReceiptListComponent items={items} />
        </div>

        
    </div>

    );

}

export default MainScreen;