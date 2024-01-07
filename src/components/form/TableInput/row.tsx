import { useForm } from "@mantine/form";
import React, { useContext, useEffect } from "react";
import { TableInputContext } from ".";
import CustomFormField from "../FormField/FormField";
import { Checkbox, Group, Text, Tooltip } from "@mantine/core";
import { IconEye, IconTrash } from "@tabler/icons-react";
import { useStyle } from "./styled";
import dayjs from "dayjs";

export interface TableInputRowProps {
  data: Record<string, any>;
  index: number;
}

export const TableInputRow: React.FC<TableInputRowProps> = (props) => {
  const { classes } = useStyle();

  const context = useContext(TableInputContext);

  const form = useForm({
    initialValues: props.data,
  });

  const isChecked = context?.select.find((d) => d._id === props.data._id)
    ? true
    : false;

  const deleteData = () => {
    if (context) {
      const newListData = context.data.map((d) =>
        d._id !== props.data._id ? d : { ...d, deleted: true }
      );
      context.setData(newListData);
    }
  };

  useEffect(() => {
    if (context) {
      const newListData: Record<string, any>[] = context.data.map((d) => {
        if (d._id !== props.data._id) return d;

        Object.keys(form.values).forEach((key: string) => {
          if (context.fields.find((f) => f.key === key)?.onChangeDependent) {
            const onChangeDependent = context.fields.find(
              (f) => f.key === key
            )?.onChangeDependent;
            if (onChangeDependent !== undefined) {
              form.values[key] = onChangeDependent(form.values);
            }
          }
        });

        return form.values;
      });
      context.setData(newListData);
    }
  }, [form.values, context]);

  if (context === null) return <></>;

  return (
    <tr>
      <td className={classes.index}>
        <Group w={"100%"} position="left">
          <Checkbox
            checked={isChecked}
            readOnly={false}
            onClick={() => {
              let newSelect = [];

              if (isChecked) {
                newSelect = context.select.filter(
                  (s) => s._id !== props.data._id
                );
              } else {
                newSelect = [...context.select, props.data];
              }

              context.setSelect([...newSelect]);
            }}
          />
          <Text>{props.index}</Text>
        </Group>
      </td>
      {context.fields.map((f, iField) => {
        if (f.props.typeinput === "datepicker") {
          if (
            dayjs(form.getInputProps(f.key).value).format("DD/MM/YYYY") ===
            "01/01/1"
          ) {
            form.setFieldValue(f.key, undefined);
          }
        }
        return (
          <td
            key={iField}
            style={{
              padding: "0px",
              width: f.width || "auto",
              border: "1px solid #D7D9E0",
            }}
          >
            <CustomFormField {...f.props} {...form.getInputProps(f.key)} />
          </td>
        );
      })}
      <td className={classes.action}>
        <Group w={"100%"} spacing={12} position="center">
          <Tooltip label="Chi tiết">
            <IconEye size={20} color="green" cursor={"pointer"} />
          </Tooltip>
          <Tooltip label="Xóa">
            <IconTrash
              size={20}
              color="red"
              cursor={"pointer"}
              onClick={deleteData}
            />
          </Tooltip>
        </Group>
      </td>
    </tr>
  );
};
