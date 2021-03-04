import React from "react";
import "./EmptyListComponent.scss";

export const EmptyListComponent = (props: any) => {
  return (
    <>
      <div className="empty__wrapper">
        <p className="empty-text">
          <div>Looks like you don't have any receipts yet!</div>
          <br></br>
          <div>
            Scan your first receipt with the QR Code from your participating
            retailer.
          </div>
        </p>
        <div>
          {/* <img src={process.env.PUBLIC_URL + "assets/empty.svg"} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default EmptyListComponent;
