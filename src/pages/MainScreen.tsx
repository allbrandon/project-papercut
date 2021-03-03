/** @jsx jsx */

import React, { useContext, useState } from "react";
import ReceiptListComponent from "../components/ReceiptListComponent";
import "./MainScreen.scss";
import HeaderComponent from "../components/HeaderComponent";
import EmptyListComponent from "../components/EmptyListComponent";
import { receiptList } from "../components/ReceiptPull";
import UserContext from "../context/UserContext";
import { navigate } from "@reach/router";
import firebase from "../firebase";
import QRButton from "../components/QRButton/QRButton";
import { css, jsx } from "@emotion/react";
import { spacing } from "../theme";
//@ts-ignore
import QrReader from "react-qr-reader";
import Modal from "react-modal";

const MainScreen = (props: any) => {
  const empty = false;
  const [user] = useContext(UserContext);
  const [QRModalOpen, setQRModal] = useState(false);
  const [QRData, setQRData] = useState();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
  // console.log(user);
  if (!firebase.getCurrentUsername()) {
    // not logged in!
    navigate("/");
    return null;
  }
  // Modal
  function openModal() {
    setQRModal(true);
  }
  function closeModal() {
    setQRModal(false);
  }
  // QR Mode
  const handleScan = (data: any) => {
    if (data) {
      setQRData(data);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
  };
  return (
    <div className="wrapper">
      {QRModalOpen ? (
        <Modal
          isOpen={QRModalOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2
            css={css`
              margin-bottom: ${spacing.s};
              font-weight: bold;
            `}
          >
            Scan Your Receipt QR Code
          </h2>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "300px" }}
          />
          <p>{QRData}</p>
        </Modal>
      ) : (
        ""
      )}

      <HeaderComponent name={user ? user.name : ""} empty={empty} />

      {!empty ? (
        <ReceiptListComponent receipts={receiptList} />
      ) : (
        <EmptyListComponent />
      )}
      <QRButton onClick={() => openModal()}></QRButton>
    </div>
  );
};

export default MainScreen;
