import React from "react";
import {
  TextInput,
  TextInputProps,
} from "@mantine/core";

export interface CustomTextInputProps extends Omit<TextInputProps, "type"> {

}

const CustomTextInput: React.FC<CustomTextInputProps> = (props) => {
  return (
    <React.Fragment>
      <TextInput
        { ...props }
      />
    </React.Fragment>
  )
}

export default CustomTextInput;