import React from "react";
import {
  Select,
  SelectProps,
  createStyles,
} from "@mantine/core";

export interface CustomSelectBaseProps extends SelectProps {};

const CustomSelectBase: React.FC<CustomSelectBaseProps> = (props) => {
  const { theme } = createStyles(() => ({}))();
  return (
    <React.Fragment>
      <Select
        {...props}
      />
    </React.Fragment>
  )
}

export default CustomSelectBase;