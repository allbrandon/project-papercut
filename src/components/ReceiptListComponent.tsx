import React from "react";
import "./ReceiptListComponent.scss";
import ReceiptCardComponent from "./ReceiptCard/ReceiptCardComponent";
import { ReceiptInfo } from "./ReceiptPull";

type ReceiptListComponentProps = {
  receipts: Array<ReceiptInfo>;
};

export const ReceiptListComponent = ({
  receipts
}: ReceiptListComponentProps) => {
  return (
    <>
      <div className="list__container">
        {/* <div className="list__header">
                <div>Receipts</div>
                <div>Most recent</div>
            </div> */}
        {receipts.map(receipt => (
          <ReceiptCardComponent receiptInfo={receipt} />
        ))}
      </div>
    </>
  );
};

export default ReceiptListComponent;
