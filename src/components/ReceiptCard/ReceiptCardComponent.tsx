import React from 'react'; 
import './ReceiptCardComponent.scss'
import Grocery from '../../grocery.svg'
import { Link } from 'react-router-dom'


export type ReceiptCardProps = {
    store: string, 
    total: number, 
    items: Array<string>,
    date: string, 
    id: number

}


const ReceiptCardComponent = ({
    store, 
    total, 
    items, 
    date, 
    id}:ReceiptCardProps) => { 
        let itemString = "";
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
                <div><img src={Grocery} alt=""></img></div>
                <div className="store"><small>{store}</small></div>
                <div className="total"><small>${total}</small></div>
                <div> </div>
                <div className="items"><small>{itemString}</small></div>
                <div className="date"><small>{date}</small></div>
            </div>
        </Link>

        );



} 

export default ReceiptCardComponent;