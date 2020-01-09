import React from "react";
import ItemComponent from "./ItemComponent";

function ItemListComponentfunc(items: Array<any>) {
    return (
        <div>
            {
                items.map((info) => (
                    <ItemComponent quantity={info.quantity} item={info.item} price={info.price} discount={info.discount} discountamount={info.discountamount} description={info.description} />
                ))
            }
        </div>
    );
}

const ItemListComponent = ({items}) => {
    return ItemListComponentfunc(items);
};

export default ItemListComponent;