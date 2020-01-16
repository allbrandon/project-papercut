import React from "react";
import ItemComponent from './ItemComponent';
import './Item.css';

// variables that are common to every single item in receipts
interface ReceiptComponent {
    color: boolean;
    quantity: number;
    item: string;
    price: number;
    discount: string;
    discountamount: number;
    description: string;
}

// returns all the items in 1 single transaction
// take in a list/array of items and make it a list
const ItemListComponent = ({items}:{items:Array<ReceiptComponent>}) => {

    return (
        <div>
            {
                items.map( info => (
                    <div>
                        <ItemComponent color={info.color} quantity={info.quantity} item={info.item} price={info.price} discount={info.discount} discountamount={info.discountamount} description={info.description} />
                        <br />
                    </div>
                ))
            }
        </div>
    );
}

export default ItemListComponent;