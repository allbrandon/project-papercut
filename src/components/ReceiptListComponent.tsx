import React from "react";
import "./ReceiptListComponent.scss";
import ReceiptCardComponent from "./ReceiptCard/ReceiptCardComponent";
import { ReceiptInfo } from "./ReceiptPull";
import { useEffect } from "@storybook/addons";

type ReceiptListComponentProps = {
  receipts: Array<ReceiptInfo>;
};

export const ReceiptListComponent = ({
  receipts
}: ReceiptListComponentProps) => {
  // async function getReceipts() {
  //   let email = firebase.getCurrentEmail();
  //   // console.log(email);
  //   try {
  //     if (email) {
  //       var docRef = firebase.firestore.collection("users").doc(email);
  //       const userDetails = (await docRef.get()).data();
  //       if (userDetails) {
  //         console.log(userDetails.receipts);
  //         setReceipts(userDetails.receipts);
  //       }
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // useEffect
  // getReceipts();

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
