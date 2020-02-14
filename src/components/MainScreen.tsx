import React from 'react'; 
import ReceiptListComponent from './ReceiptListComponent'
import './MainScreen.scss'
import HeaderComponent from './HeaderComponent'; 
import EmptyListComponent from './EmptyListComponent';




const MainScreen = (props:any) => { 
    const items = [
    //{
    //     store: "",
    //     category: "", 
    //     items: [], 
    //     date: "", 
    //     total: 0,  
    //     id: 0,
    // }
    {
        store: "Woolworths",
        category: "grocery",
        items: ["Bok Choy", "Maple Syrup"], 
        date: "11/02/19",
        total: 35,
        id: 1,
    }, 
    {
        store: "Woolworths",
        category: "grocery",
        items: ["Tim Tams", "Yoghurt", "Frozen Pizza"], 
        date: "11/02/19",
        total: 35,
        id: 2,

    },
    {
        store: "Woolworths",
        category: "grocery",
        items: ["Tim Tams", "Yoghurt", "Frozen Pizza"], 
        date: "11/02/19",
        total: 35,
        id: 3,

    },
    {
        store: "Woolworths",
        category: "grocery",
        items: ["Tim Tams", "Yoghurt", "Frozen Pizza"], 
        date: "11/02/19",
        total: 35,
        id: 4,

    },
    {
        store: "Woolworths",
        category: "grocery",
        items: ["Tim Tams", "Yoghurt", "Frozen Pizza"], 
        date: "11/02/19",
        total: 35,
        id: 5,

    }, 
    {
        store: "Woolworths",
        category: "grocery",
        items: ["Tim Tams", "Yoghurt", "Frozen Pizza"], 
        date: "11/02/19",
        total: 35,
        id: 6,

    }
    ]
    const name = "Austin"; 
    const empty = false;

    return(
    <div className="wrapper"> 
        <HeaderComponent name={name} empty={empty}/>
        <div className="list__container">
            {!empty ? <ReceiptListComponent items={items} /> : <EmptyListComponent /> }
            
        </div>

        
    </div>

    );

}

export default MainScreen;