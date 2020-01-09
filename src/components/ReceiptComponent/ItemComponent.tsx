import React from "react";
import './Item.css';
import { readdirSync } from "fs";
import { instanceOf } from "prop-types";

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

class ItemComponent extends React.Component {
    state = { loading: true };

    // assume the api has class receipt with id and info
    componentDidMount() {
        receipt.info(this.props.id).then(({ info }) => {
            this.setState({
                quantity: info.quantity,
                item: info.item,
                price: info.price,
                discount: info.discount,
                discountamount: info.discountamount,
                description: info.description,
                loading: false
            });
        }, console.error);
    }

    render() {
        if (this.state.loading) {
          return <h1>loading ...</h1>;
        }
    
        const { quantity, item, price, discount, discountamount, description } = this.state;
    
        return ItemComponentfunc(quantity, item, price, discount, discountamount, description);
      }

}

export default ItemComponent;