import React from 'react'; 
import './ReceiptCardComponent.scss'
// import Grocery from '../../grocery.svg'
import { Link } from 'react-router-dom'
import IconComponent from './../IconComponent'
// import { Icon } from '@material-ui/core';


export type ReceiptCardProps = {
    store: string, 
    category: string,
    total: number, 
    items: Array<string>,
    date: string, 
    id: number

}


const ReceiptCardComponent = ({
    store,
    category, 
    total, 
    items, 
    date, 
    id}:ReceiptCardProps) => { 
        let itemString = "";
        // let cateIcon = "./" + category + ".svg"
        for (var i = 0; i < items.length; i++) {
            if (i === 0) {
                itemString += items[i];
            } else {
                itemString += ", " + items[i]
            }
        }
        const maxChar = 21
        if (itemString.length > maxChar) {
            itemString = itemString.substring(0, maxChar);
            itemString = itemString.substring(0,
            Math.min(itemString.length, itemString.lastIndexOf(" "))) + " . . .";
        }
        return (
        <Link to={"/" + id}> 
            <div className="card__container">
                <div className="receipt__card__icon">
                    <IconComponent type={category} size={"small"} />
                </div>
                <div className="receipt__card__detail">
                    <div className="receipt__card__col">
                        <div className="store">{store}</div>
                        <div className="items">{itemString}</div>
                    </div>
                    <div className="receipt__card__col">
                        <div className="total">${total}</div>
                        <div className="date">{date}</div>
                    </div>
                </div>
            </div>
        </Link>

        );



} 

export default ReceiptCardComponent;