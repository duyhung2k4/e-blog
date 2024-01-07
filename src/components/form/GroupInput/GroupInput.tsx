import React from "react";
import CustomFormField from "../FormField/FormField";
import { Box, Grid } from "@mantine/core";
import CustomUnType from "../UnType/UnType";
import { UseFormReturnType } from "@mantine/form";
import { CustomTextFormFieldProps } from "../TextForm/TextForm";

export interface CustomGroupInput {
  form: UseFormReturnType<any, (values: any) => any>
  fields: CustomTextFormFieldProps[],
}

const CustomGroupInput: React.FC<CustomGroupInput> = (props) => {

  return (
    <React.Fragment>
      <Box>
        <Grid>
          {
            props.fields.map((field: CustomTextFormFieldProps, index: number) => {
              let { xs: _, ...propsOfField } = field;
              return (
                <Grid.Col key={index} span={field.xs}>
                  {
                    propsOfField.typeinput !== "untype" ?
                      <CustomFormField
                        {...propsOfField}
                        {...props.form.getInputProps(field.key)}
                      />
                      : <CustomUnType {...propsOfField} values={props.form.values} />
                  }
                </Grid.Col>
              )
            }
            )
          }
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default CustomGroupInput