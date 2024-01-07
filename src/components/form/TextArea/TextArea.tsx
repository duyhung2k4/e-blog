import React from "react";
import {
  Textarea,
  TextareaProps,
} from "@mantine/core";

export interface CustomTextAreaProps extends TextareaProps {

}

const CustomTextArea: React.FC<CustomTextAreaProps> = (props) => {
  return (
    <React.Fragment>
      <Textarea
        autosize
        minRows={5}
        { ...props }
      />
    </React.Fragment>
  )
}

export default CustomTextArea;