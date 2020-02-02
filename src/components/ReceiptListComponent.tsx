import React from 'react'; 
import './ReceiptListComponent.scss'
import ReceiptCardComponent, {ReceiptCardProps} from './ReceiptCard/ReceiptCardComponent'

type ReceiptListComponentProps = {
    items: Array<ReceiptCardProps>
}

export const ReceiptListComponent = ({items}:ReceiptListComponentProps) => { 

    return (
        <>
        <div className="list__container">
            {/* <div className="list__header">
                <div>Receipts</div>
                <div>Most recent</div>
            </div> */}
            {items.map(receipt => (
                <ReceiptCardComponent items={receipt.items} category={receipt.category} total={receipt.total} date={receipt.date} store={receipt.store} id={receipt.id} />
            ))}
        </div>
        </>

    );



} 

export default ReceiptListComponent;