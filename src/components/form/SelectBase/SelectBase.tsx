import React from "react";
import {
  Select,
  SelectProps,
  createStyles,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

export interface CustomSelectBaseProps extends SelectProps {};

const CustomSelectBase: React.FC<CustomSelectBaseProps> = (props) => {
  const { theme } = createStyles(() => ({}))();
  return (
    <React.Fragment>
      <Select
        {...props}
        rightSection={<IconChevronDown color={theme.colors.gray[5]} />}
      />
    </React.Fragment>
  )
}

export default CustomSelectBase;