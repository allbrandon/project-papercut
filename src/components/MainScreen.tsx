import React from "react";
import ReceiptListComponent from "./ReceiptListComponent";
import "./MainScreen.scss";
import HeaderComponent from "./HeaderComponent";
import EmptyListComponent from "./EmptyListComponent";
import { receiptList } from "./ReceiptPull";

const MainScreen = (props: any) => {
  const name = "Austin";
  const empty = false;

  return (
    <div className="wrapper">
      <HeaderComponent name={name} empty={empty} />
      <div className="list__container">
        {!empty ? (
          <ReceiptListComponent receipts={receiptList} />
        ) : (
          <EmptyListComponent />
        )}
      </div>
    </div>
  );
};

export default MainScreen;
