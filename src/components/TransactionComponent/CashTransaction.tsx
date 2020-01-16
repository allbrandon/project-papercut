import React from "react";
import './Transactions.css';
import {ReceiptComponent} from "../ReceiptComponent/ItemListComponent";
import ItemListComponent from "../ReceiptComponent/ItemListComponent";
import {Store_details} from "./StoreDetail";
import StoreDetail from "./StoreDetail";

// Parameter: Object that contains transaction details
interface Transaction_details {
    id: number,
    trans_time: string,
    store_category: string,
    item_list: Array<ReceiptComponent>,
    cash: number,
    store_id: number,
    store_details: Store_details
};

const CashTransaction = ({details}:{details:Transaction_details}) => {
    let sub_total = 0;
    var i: number;
    for (i = 0; i < details.item_list.length; i++){
        if(details.item_list[i].discountamount) {
            sub_total = sub_total + (details.item_list[i].price + details.item_list[i].discountamount) * details.item_list[i].quantity;
            console.log(sub_total);
        } else {
            sub_total = sub_total + details.item_list[i].price * details.item_list[i].quantity;
            console.log(sub_total);
        }
    }

    // not sure the difference just assumed it's the same to sub-total
    let total = sub_total;
    let change = "";

    // some logic
    if(details.cash < total){
        return (
            <div className="background">
                Data not valid
            </div>
        );
    } else {
        change = (details.cash - total).toFixed(2);   
    }

    return (
        <div className="background">
            <div>{details.store_details.name}</div>
            <div>{details.trans_time}</div>

            <div>
                <div>
                    <span>Items</span>
                    <span>{details.store_category}</span>
                </div>
                <div><ItemListComponent items={details.item_list} /></div>

                <hr />
                <div>
                    <span className="small-titles">Subtotal: </span>
                    {/* need to modify to calculate */}
                    <span>{sub_total.toFixed(2)}</span>
                </div>
                <div>
                    <span>Total: </span>
                    <span>{total.toFixed(2)}</span>
                </div>
                <div>
                    <span className="small-titles">Cash: </span>
                    <span>{details.cash.toFixed(2)}</span>
                </div>
                <div>
                    <span className="small-titles">Change: </span>
                    <span>{change}</span>
                </div>

                <hr />
                <div className="small-titles">Store Details</div>
                <div><StoreDetail details={details.store_details}/></div>
            </div>
        </div>
    );
}

export default CashTransaction;