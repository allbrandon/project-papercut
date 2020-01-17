import React from 'react'; 
import './ReceiptCardComponent.scss'
import Grocery from '../../grocery.svg'
import { Link } from 'react-router-dom'



const ReceiptCardComponent = (props:any) => { 
// title, description, price, date 
    return (
    <Link to={"/" + props.id}>
        <div className="card__container">
            <div><img src={Grocery} alt=""></img></div>
            <div className="a"><small>{props.store}</small></div>
            {/* <div className="a"><Link to="" style={{textDecoration: 'none'}}><small>{props.store}</small></Link></div> */}
            <div className="c"><small>${props.total}</small></div>
            <div> </div>
            <div className="b"><small>{props.items}</small></div>
            <div className="d"><small>{props.date}</small></div>
        </div>
    </Link>

    );



} 

export default ReceiptCardComponent;