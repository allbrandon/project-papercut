import React from "react";
import TextField from "@material-ui/core/TextField";
import "./InputComponent.scss";

export type InputComponentProps = {
  fieldType: string;
  size: string;
};

export const InputComponent = ({ fieldType, size }: InputComponentProps) => {
  const inputType = fieldType.toLowerCase();
  return (
    <div className="field">
      <TextField
        id={fieldType}
        label={fieldType}
        type={inputType}
        variant="outlined"
      />
    </div>
  );
};

export default InputComponent;
