import React, { useEffect, useRef, useState } from "react";
import { Box, Select, SelectProps, Text, createStyles } from "@mantine/core";
import { icon } from "@pdt/assets/export";

const levelIndex: any = {
  level_1: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IV", "X"],
  level_2: Array.from(Array(20)).map((_, i: number) => `${i + 1}`),
  level_3: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
};

export interface PropsData {
  label: string;
  type: "group" | "item";
  value: string;
  items: PropsData[];
}

export interface CustomSelectProps extends Omit<SelectProps, "data"> {
  data: PropsData[];
}

const useStyles = createStyles(() => {
  return {
    root: {},
    dropdown: {
      padding: "10px 0px 10px 0px",
      width: "100%",
      overflowY: "scroll",
    },
  };
});

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const { classes } = useStyles();
  const [dataSelect, setDataSelect] = useState<
    { label: string; value: string }[]
  >([]);

  const ref = useRef<HTMLInputElement>(null);

  const { data: _, ...newProps } = props;

  const renderItem = (data: PropsData[], level: number) => {
    return (
      <Box w={"100%"}>
        {data.map((d: PropsData, i: number) => {
          if (d.type === "item") {
            return (
              <Box
                key={i}
                onClick={() => {
                  props.onChange?.call(props, d.value);
                  ref?.current?.blur();
                }}
                sx={{
                  width: "100%",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  textAlign: "left",
                  color: "#3D3E40",
                  cursor: "pointer",
                  ":hover": {
                    color: "#223671",
                    backgroundColor: "#EBF0FF",
                  },
                }}
              >
                <Text pl={`${level * 15}px`}>
                  {levelIndex[`level_${level}`][i]}.&nbsp;{d.label}
                </Text>
              </Box>
            );
          }
          return (
            <Box key={i} w={"100%"}>
              <Box
                sx={{
                  width: "100%",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  textAlign: "left",
                  color: "#A2A3A8",
                  cursor: undefined,
                  ":hover": undefined,
                }}
              >
                <Text pl={`${level * 15}px`}>
                  {levelIndex[`level_${level}`][i]}.&nbsp;{d.label}
                </Text>
              </Box>
              {renderItem(d.items, level + 1)}
            </Box>
          );
        })}
      </Box>
    );
  };

  const getData = (
    propsData: PropsData[],
    saveData: { label: string; value: string }[]
  ) => {
    propsData.map((p: PropsData) => {
      if (p.type === "item") {
        saveData.push({
          label: p.label,
          value: p.value,
        });
      } else {
        if (p.value) {
          saveData.push({
            label: p.label,
            value: p.value,
          });
        }
        return getData(p.items, saveData);
      }
    });
  };

  useEffect(() => {
    const data: { label: string; value: string }[] = [];
    getData(props.data, data);

    setDataSelect(data);
  }, [props.data]);

  return (
    <React.Fragment>
      <Select
        {...newProps}
        ref={ref}
        className={classes.root}
        data={dataSelect}
        rightSection={<img alt="down" src={icon.down} />}
        dropdownComponent={
          props.data.length > 0
            ? () => {
                return (
                  <Box className={classes.dropdown}>
                    {renderItem(props.data, 1)}
                  </Box>
                );
              }
            : undefined
        }
      />
    </React.Fragment>
  );
};

export default CustomSelect;
