import React, { useContext } from "react";
import ReceiptListComponent from "./ReceiptListComponent";
import "./MainScreen.scss";
import HeaderComponent from "./HeaderComponent";
import EmptyListComponent from "./EmptyListComponent";
import { receiptList } from "./ReceiptPull";
import UserContext from "../context/UserContext";

const MainScreen = (props: any) => {
  const empty = false;
  const [user] = useContext(UserContext);
  console.log(user);
  // console
  return (
    <div className="wrapper">
      <HeaderComponent name={user ? user.name : "No"} empty={empty} />
      {!empty ? (
        <ReceiptListComponent receipts={receiptList} />
      ) : (
        <EmptyListComponent />
      )}
    </div>
  );
};

export default MainScreen;
