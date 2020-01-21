import React from 'react'; 
import './ReceiptListComponent.scss'
import ReceiptCardComponent, {ReceiptCardProps} from './ReceiptCard/ReceiptCardComponent'

type ReceiptListComponentProps = {
    items: Array<ReceiptCardProps>
}

export const ReceiptListComponent = ({items}:ReceiptListComponentProps) => { 
    // const items = [{
    //     store: "Woolworths",
    //     items: "Bok Choy, Maple Syrup", 
    //     date: "11/02/19",
    //     total: 35,
    //     id: 1,
    // }, 
    // {
    //     store: "Woolworths",
    //     items: "Bok Choy, Maple Syrup", 
    //     date: "11/02/19",
    //     total: 35,
    //     id: 2,

    // }]
    return (
        <>
        {/* <div className="list__header">
            <h2>Receipts</h2>
            <h2>Most Recent</h2>
        </div> */}
        <div className="list__container">
            {items.map(receipt => (
                <ReceiptCardComponent items={receipt.items} total={receipt.total} date={receipt.date} store={receipt.store} id={receipt.id} />
            ))}
        </div>
        </>

    );



} 

export default ReceiptListComponent;