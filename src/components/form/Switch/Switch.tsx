import React from "react";
import {
  Box,
  Group,
  Switch,
  SwitchProps,
  Text,
  createStyles,
} from "@mantine/core";

export interface CustomSwitchProps extends SwitchProps {
  textstatus?: {
    on: string
    off: string
  },
}

const useStyles = createStyles((_, active: boolean) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      "& .mantine-Switch-track": {
        backgroundColor: active ? "#F26526 !important" : undefined,
        borderColor: active ? "#F26526 !important" : undefined,
      }
    }
  }
})

const CustomSwitch: React.FC<CustomSwitchProps> = (props) => {
  const checked: boolean = props.value !== null
    ? (props.value ? true : false)
    : (props.defaultChecked ? true : false);

  const { classes } = useStyles(checked);

  const colorStatus =
    props.value !== null
      ? (props.value ? "#1EA164" : "#0078F0")
      : (props.defaultChecked ? "#1EA164" : "#0078F0");

  const textStatus =
    props.value !== null
      ? (props.value ? props.textstatus?.on : props.textstatus?.off)
      : (props.defaultChecked ? props.textstatus?.on : props.textstatus?.off);

  let {
    label: _,
    textstatus: __,
    ...newProps
  } = props;

  return (
    <React.Fragment>
      <Box className={`${classes.root} hehe`}>
        <Text
          mb={4}
          size="sm"
          fw={500}
        >{props.label}</Text>
        <Group spacing={10}>
          <Switch 
            {...newProps} 
            defaultChecked={props.defaultChecked}
          />
          <Text
            color={colorStatus}
          >{textStatus}</Text>
        </Group>
      </Box>
    </React.Fragment>
  )
}

export default CustomSwitch;