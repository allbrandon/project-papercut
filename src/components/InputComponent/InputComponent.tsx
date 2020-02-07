import React from "react";
import Input from "@material-ui/core/TextField";
import "./InputComponent.scss";

export type InputComponentProps = {
  value: string;
  fieldType: string;
  size: string;
  onChange: any;
};

export const InputComponent = ({ fieldType, size, value, onChange }: InputComponentProps) => {
  const inputType = fieldType.toLowerCase();
  return (
    <div className="field">
      <Input
        id={fieldType}
        label={fieldType}
        type={inputType}
        value={value}
        onChange={onChange}
        variant="outlined"
      />
    </div>
  );
};

export default InputComponent;
