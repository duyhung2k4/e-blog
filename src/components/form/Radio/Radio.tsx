import React from "react";
import {
  Radio,
  RadioProps,
} from "@mantine/core";

export interface CustomRadioProps extends RadioProps {}

const CustomRadio: React.FC<CustomRadioProps> = (props) => {
  return (
    <React.Fragment>
      <Radio
        {...props}
      />
    </React.Fragment>
  )
}

export default CustomRadio;