/** @jsx jsx */
import { fontSize, colors, spacing } from "../theme";
import { css, jsx } from "@emotion/react";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "@reach/router";

const MainScreen = (props: any) => {
  const [user] = useContext(UserContext);
  return <div className="wrapper"></div>;
};

export default MainScreen;
