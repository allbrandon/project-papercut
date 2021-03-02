import React, { useContext } from "react";
import ReceiptListComponent from "../components/ReceiptListComponent";
import "./MainScreen.scss";
import HeaderComponent from "../components/HeaderComponent";
import EmptyListComponent from "../components/EmptyListComponent";
import { receiptList } from "../components/ReceiptPull";
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
