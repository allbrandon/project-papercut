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
        <div>
            <p>{details.name}</p>
            <p>{details.shopping_centre}</p>
            <p>{details.address}</p>
            <p>{details.number}</p>
            <p>{details.abn}</p>
        </div>
    );
}

export default StoreDetail;