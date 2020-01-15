import React from "react";
import './Item.css';

const ItemComponent = ({quantity, item, price, discount, discountamount, description}:{quantity:number, item: string,price: number,discount: string,discountamount: any,description: string}) => {
    if(discountamount){
        discountamount=(discountamount as number).toFixed(2);
    }
    return(
        <div>
            <div className="general-item-info">
                <span className="circle">{quantity}</span>
                <span className="name">{item}</span>
                <span className="price">{price.toFixed(2)}</span>
            </div>

            <div className="discount-info">
                <span className="discount">{discount}</span>
                <span className="discount-amount">{discountamount}</span>
            </div>

            <div className="description-info">{description}</div>
        </div>
    );
};

export default ItemComponent;