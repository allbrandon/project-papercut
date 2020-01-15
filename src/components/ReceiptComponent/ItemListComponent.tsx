import React from "react";
import ItemComponent from './ItemComponent';
import './Item.css';

const ItemListComponent = ({items}:{items:Array<any>}) => {

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