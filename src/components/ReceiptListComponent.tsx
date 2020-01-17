import React from 'react'; 
import './ReceiptListComponent.scss'
import ReceiptCardComponent from './ReceiptCard/ReceiptCardComponent'





const ReceiptListComponent = (props:any) => { 
    const items = [{
        store: "Woolworths",
        items: "Bok Choy, Maple Syrup", 
        date: "11/02/19",
        total: 35,
    }, 
    {
        store: "Woolworths",
        items: "Bok Choy, Maple Syrup", 
        date: "11/02/19",
        total: 35,

    }]
    return (
        <>
        {/* <div className="list__header">
            <h2>Receipts</h2>
            <h2>Most Recent</h2>
        </div> */}
        <div className="list__container">
            {items.map(receipt => (
                <ReceiptCardComponent items={receipt.items} total={receipt.total} date={receipt.date} store={receipt.store} />
            ))}
        </div>
        </>

    );



} 

export default ReceiptListComponent;