import React from "react";
import './Transactions.css';

interface Store_details {
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