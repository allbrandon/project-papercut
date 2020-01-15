import React from "react";
import './Transactions.css';

interface Store_details {
    name: string,
    shopping_centre: string,
    address: string,
    number: string,
    abn: string
};

const StoreDetail = ({detail}:{detail: Store_details}) => {
    return (
        <div>
            <p>{detail.name}</p>
            <p>{detail.shopping_centre}</p>
            <p>{detail.address}</p>
            <p>{detail.number}</p>
            <p>{detail.abn}</p>
        </div>
    );
}

export default StoreDetail;