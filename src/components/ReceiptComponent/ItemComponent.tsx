import React from "react";
import './Item.css';

export interface itemInfo {
    quantity: number;
    item: string;
    price: number;
    discount: string;
    discountamount: number;
    description: string;
}

function ItemComponentfunc (quantity: number, item: string, price: number, discount: string, discountamount: number, description: string) {
    return (
        <div>
            <div className="general-item-info">
                <span className="circle">{quantity}</span>
                <span className="name">{item}</span>
                <span className="price">{price.toFixed(2)}</span>
            </div>
            <div className="discount-info">
                <span className="discount">{discount}</span>
                <span className="discount-amount">{discountamount.toFixed(2)}</span>
            </div>
            <div className="description-info">{description}</div>
        </div>
        
    );
};

class ItemComponent extends React.Component<itemInfo> {
    state = { loading: true };

    componentDidMount(){
        this.setState({
            loading: false
        });
    }

    render(){
        if (this.state.loading) {
            return <h1>loading ...</h1>;
        }

        return ItemComponentfunc(this.props.quantity, this.props.item, this.props.price, this.props.discount, this.props.discountamount, this.props.description);
    }
}

export default ItemComponent;