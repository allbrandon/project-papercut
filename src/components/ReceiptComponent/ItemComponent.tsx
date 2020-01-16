import React from "react";
import './Item.css';

// returns 1 single item in the receipt
// takes color "to symbolise cash/card payment", quantity "how many you bought", item "name of the item you purchased", price "the default price of the item", 
// discount "what kind of discount you got for the item" (optional)
// discountamount "the amount of money you got off because of the discount, need to be negative" (optional)
// description "detailed description of item" (optional)
const ItemComponent = ({color, quantity, item, price, discount, discountamount, description}:{color: boolean, quantity:number, item: string,price: number,discount: string,discountamount: any,description: string}) => {
    if(discountamount){
        discountamount=(discountamount as number).toFixed(2);
    }
    if (color){
        // if color = true -> cash -> green
        return(    
            <div>
                <div className="general-item-info">
                    <span className="green-circle">{quantity}</span>
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
    }
    else {
        // if colot = false -> card -> red
        return(    
            <div>
                <div className="general-item-info">
                    <span className="red-circle">{quantity}</span>
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
    }
};

export default ItemComponent;