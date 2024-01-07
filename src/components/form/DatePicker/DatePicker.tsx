import React from "react";
import { DatePickerInput, DatePickerInputProps } from "@mantine/dates";
import { Menu, createStyles } from "@mantine/core";

export type CustomDatePickerProps = DatePickerInputProps;

const useStyle = createStyles(() => {
  return {
    root: {
      "& .mantine-Popover-dropdown": {
        boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
        zIndex: 3000,
      },
    },
  };
});

const CustomDatePicker: React.FC<CustomDatePickerProps> = (props) => {
  const { classes } = useStyle();
  return (
    <React.Fragment>
      <Menu>
        <DatePickerInput
          {...props}
          className={classes.root}
          valueFormat="DD/MM/YYYY"
        />
      </Menu>
    </React.Fragment>
  );
};

export default CustomDatePicker;
