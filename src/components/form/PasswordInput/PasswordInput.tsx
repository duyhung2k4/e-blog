import React from "react";
import {
  PasswordInput,
  PasswordInputProps,
} from "@mantine/core";

export interface CustomPasswordInputProps extends PasswordInputProps {}

const CustomPasswordInput: React.FC<CustomPasswordInputProps> = (props) => {
  return (
    <React.Fragment>
      <PasswordInput
        { ...props }
      />
    </React.Fragment>
  )
}

export default CustomPasswordInput;