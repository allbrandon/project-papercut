import React from "react";
import './Item.css';

export const ItemComponent = ({ quantity, item, price, discount, discountamount, description }) => {
    return (
        <div>
            <div className="general-item-info">
                <span className="circle">{ quantity }</span>
                <span className="name">{ item }</span>
                <span className="price">{ price.toFixed(2) }</span>
            </div>
            <div className="discount-info">
                <span className="discount">{ discount }</span>
                <span className="discount-amount">{ discountamount.toFixed(2) }</span>
            </div>
            <div className="description-info">{ description }</div>
        </div>
        
    );
};
