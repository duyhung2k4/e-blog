import { Radio, RadioGroupProps } from "@mantine/core";
import React from "react";

interface ChildRadio {
  label: React.ReactNode
  value: string | number
}

export interface CustomRadioGroupProps extends Omit<RadioGroupProps, "children"> {
  data: ChildRadio[]
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = (props) => {
  let { data: _, ...newPropsRadioGroup } = props;
  return (
    <React.Fragment>
      <Radio.Group
        {
          ...newPropsRadioGroup
        }
      >
        {
          props.data.map((r: ChildRadio, index: number) =>
            <Radio
              key={index}
              label={r.label}
              value={r.value}
            />
          )
        }
      </Radio.Group>
    </React.Fragment>
  )
}

export default CustomRadioGroup;