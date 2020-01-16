import React from "react";
import './Transactions.css';

// Parameter: An object that contains Store_details
// Restrictions: number should be in format of xx xxxx xxxx OR xxxx xxx xxx
//               abn must be in format of xx xxx xxx xxx
export interface Store_details {
    id: number, 
    name: string,
    shopping_centre: string,
    address: string,
    number: string,
    abn: string
};

const StoreDetail = ({details}:{details: Store_details}) => {
    return (
        <div className="store-detail">
            <div className="store-detail-name">{details.name}</div>
            <div>{details.shopping_centre}</div>
            <div>{details.address}</div>
            <div>TEL {details.number}</div>
            <div>ABN {details.abn}</div>
        </div>
    );
}

export default StoreDetail;