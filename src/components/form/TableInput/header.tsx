import React from "react"
import { FieldTable } from "."
import { Group, Text } from "@mantine/core"
import { useStyle } from "./styled"

interface TableInputHeader {
  fields: FieldTable[]
}
export const TableInputHeader: React.FC<TableInputHeader> = (props) => {
  const { classes } = useStyle();

  return (
    <thead>
      <tr>
        <th className={classes.index}>
          <Group w={'100%'} position="left">
            <Text>STT</Text>
          </Group>
        </th>
        {
          props.fields.map((field: FieldTable, iField: number) => 
            <th 
              style={{ width: field.width || "auto" }}
              className={classes.headerColums} 
              key={iField}
            >{field.label}</th>
          )
        }
        <th className={classes.action}>
          <Group w={'100%'} position="center">Thao tác</Group>
        </th>
      </tr>
    </thead>
  )
}