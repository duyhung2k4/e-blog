import React from "react";
import {
  MultiSelect,
  MultiSelectProps
} from "@mantine/core";

export interface CustomMultiSelectProps extends MultiSelectProps {

}

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = (props) => {
  return (
    <React.Fragment>
      <MultiSelect
        { ...props }
      />
    </React.Fragment>
  )
}

export default CustomMultiSelect;