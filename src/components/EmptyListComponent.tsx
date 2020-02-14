import React from 'react'; 
import './EmptyListComponent.scss'

export const EmptyListComponent = (props:any) => { 

    return (
        <>
        <div className="empty__wrapper">
            <div>
                <div>Looks like you don't have any receipts yet!</div> 
                <div>Head out to a participating retailer to get started on your paperless journey.</div> 
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + "assets/empty.svg"} alt="" />
            </div>
        </div> 
        </>

    );



} 

export default EmptyListComponent;