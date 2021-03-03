/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/react";
import { colors, shadows, fontSize, spacing } from "../../theme";
import { QrCodeOutline } from "react-ionicons";

const QRButton = ({ onClick }: any) => {
  return (
    <button
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: ${colors.maingreen};
        box-shadow: ${shadows.button};
        position: absolute;
        right: ${spacing.xl};
        bottom: ${spacing.xl};
      `}
      onClick={onClick}
    >
      <QrCodeOutline color={"#ffffff"} height="24px" width="24px" />
      <div
        css={css`
          font-size: ${fontSize.xxxs};
          color: white;
        `}
      >
        Scan
      </div>
    </button>
  );
};

export default QRButton;
