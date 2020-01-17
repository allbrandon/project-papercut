import React from 'react'; 
import './ReceiptCardComponent.scss'
import Grocery from '../../grocery.svg'



const ReceiptCardComponent = (props:any) => { 
// title, description, price, date 
    return (
    <div className="card__container">
        <div><img src={Grocery} alt=""></img></div>
        <div className="a"><small>{props.store}</small></div>
        <div className="c"><small>${props.total}</small></div>
        <div> </div>
        <div className="b"><small>{props.items}</small></div>
        <div className="d"><small>{props.date}</small></div>
    </div>

    );



} 

export default ReceiptCardComponent;