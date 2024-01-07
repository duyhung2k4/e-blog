import React, { createContext, useEffect, useState } from "react";
import { Box, Button, Checkbox, Group, Stack, Table, Text, Tooltip } from "@mantine/core";
import { CustomFormFieldProps } from "../FormField/FormField";
import { TableInputHeader } from "./header";
import TableInputBody from "./body";
import { useStyle } from "./styled";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import dayjs from "dayjs";

export interface FieldTable {
  key: string
  label: string
  props: CustomFormFieldProps
  width?: number
  onChangeDependent?: (values: Record<string, any>) => any
}

export interface CustomTableInputProps {
  label?: string
  value?: Record<string, any>[]
  defaultValue?: Record<string, any>[]
  fields: FieldTable[]
  onChange?: any
  checked?: any
  error?: any
  onFocus?: any
  onBlur?: any
  option?: {
    addData: boolean
  }
}

export interface TableInputState {
  fields: FieldTable[]
  data: Record<string, any>[]
  select: Record<string, any>[]
  setData: React.Dispatch<React.SetStateAction<Record<string, any>[]>>
  setSelect: React.Dispatch<React.SetStateAction<Record<string, any>[]>>
} 

export const TableInputContext = createContext<TableInputState | null>(null);

const CustomTableInput: React.FC<CustomTableInputProps> = (props: CustomTableInputProps) => {
  const [data, setData] = useState<Record<string, any>[]>(
    props.defaultValue ? props.defaultValue.map((v, i) => ({ _id: i, ...v })) : []
  );

  const [select, setSelect] = useState<Record<string, any>[]>([]);

  const { classes } = useStyle();

  const addData = () => {
    const newData: Record<string, any> = {};

    props.fields.forEach((f: FieldTable) => {
      if (f.props.typeinput !== 'untype') {
        newData[f.key] = f.props.defaultValue;
      }

      if (f.props.typeinput === "numberinput") {
        f.props.hideControls = true;
      }
    });

    newData.deleted = false;

    if(data.length > 0) {
      newData._id = data[data.length - 1]._id + 1;
    } else {
      newData._id = 1;
    }

    data.push(newData);

    setData([...data]);
  };

  const deleteData = () => {
    const newData = data.map((d) => {
      const simpleData = select.find((s) => s._id === d._id);

      if(simpleData !== undefined) {
        return { ...d, deleted: true }
      }

      return d;
    })

    setData([...newData]);
    setSelect([]);
  }

  useEffect(() => {
    const newData = data.filter((d) => d.deleted === false || d.id !== undefined).map((d) => {
      if(d.deleted) d.deletedAt = dayjs().toDate();
      const { _id: _, deleted: __, ...simpleData } = d;
      return simpleData;
    });
    props.onChange(newData)
  }, [data]);

  return (
    <TableInputContext.Provider
      value={{
        fields: props.fields,
        data: data,
        setData: setData,
        select: select,
        setSelect: setSelect,
      }}
    >
      <Stack w={'100%'} spacing={0} className={classes.root}>
        <Group position="left" mb={8}>
          <Text size={16} fw={600} color="#223671" >{props.label}</Text>
        </Group>
        <Group position="apart" className={classes.headerAction}>
          <Group position="left" ml={16}>
            <Checkbox
              checked={select.length === data.length && data.length > 0}
              readOnly={false}
              onClick={() => setSelect(select.length === data.length ? [] : data)}
            />
            {select.length > 0 &&
              <Group position="left">
                <Tooltip label="Xóa">
                  <IconTrash 
                    size={20} 
                    cursor="pointer" 
                    color="red"
                    onClick={deleteData}
                  />
                </Tooltip>
                <Text color="red" fw={600}>{select.length} mục đã chọn</Text>
              </Group>
            }
          </Group>
          {(props.option !== undefined ? props.option?.addData : true) &&
            <Button
              onClick={addData}
              leftIcon={<IconPlus color="#F26526" />}
              color="#F26526"
              sx={{
                backgroundColor: "unset",
                color: "#F26526",
                ":hover": {
                  backgroundColor: "unset",
                  color: "#F26526",
                }
              }}
            >Thêm</Button>
          }
        </Group>
        <Box
          w={"100%"}
          sx={{
            overflowX: "scroll",
          }}
        >
          <Table
            className={classes.rootTable}
          >
            <TableInputHeader fields={props.fields} />
            <TableInputBody/>
          </Table>
        </Box>
      </Stack>
    </TableInputContext.Provider>
  )
}

export default CustomTableInput;