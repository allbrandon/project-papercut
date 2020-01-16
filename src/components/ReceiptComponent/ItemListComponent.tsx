import React from "react";
import ItemComponent from './ItemComponent';
import './Item.css';

export interface ReceiptComponent {
    quantity: number;
    item: string;
    price: number;
    discount: string;
    discountamount: number;
    description: string;
}

const ItemListComponent = ({items}:{items:Array<ReceiptComponent>}) => {

    return (
        <div>
            {
                items.map( info => (
                    <div>
                        <ItemComponent quantity={info.quantity} item={info.item} price={info.price} discount={info.discount} discountamount={info.discountamount} description={info.description} />
                        <br />
                    </div>
                ))
            }
        </div>
    );
}

export default ItemListComponent;