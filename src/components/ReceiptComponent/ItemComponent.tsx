import React, { FunctionComponent } from "react";
import './Item.css';

type ItemInfo = {
    quantity: number,
    item: string,
    price: number,
    discount?: string,
    discountamount?: number,
    description?: string
}

export const ItemComponent: FunctionComponent<ItemInfo> = ({quantity, item, price, discount, discountamount, description}) => <div>
    <div className="general-item-info">
        <span className="circle">{quantity}</span>
        <span className="name">{item}</span>
        <span className="price">{price.toFixed(2)}</span>
    </div>

    <div className="discount-info">
        <span className="discount">{discount}</span>
        <span className="discount-amount">{discountamount.toFixed(2)}</span>
    </div>

    <div className="description-info">{description}</div>
</div>