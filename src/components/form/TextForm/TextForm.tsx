import React, { useEffect } from "react";
import CustomFormField, { CustomFormFieldProps } from "../FormField/FormField";
import dayjs from "dayjs";
import CustomUnType from "../UnType/UnType";

import { Box, Grid, MantineProvider, MantineThemeOverride, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import theme from "@/theme/theme";

type TypeForm = "inline" | "default" | "filled" | "table" | "tableFilled";
type FieldSize = {
  xs: number;
  key: string;
  validate?: (value: any) => any;
};

export type CustomTextFormFieldProps = FieldSize & CustomFormFieldProps;

export interface CustomTextFormProps {
  fields: CustomTextFormFieldProps[];
  id: string;
  typeForm?: TypeForm;
  values?: any,
  onSubmit?: (values: any) => void;
  autoUpdate?: {
    state: boolean;
    delay: number;
  };
}

const useStyles = createStyles(() => {
  return {
    root: {
      "& .mantine-InputWrapper-error": {
        textAlign: "left",
      },
      "& .mantine-Input-input": {
        //borderRadius: "8px",
      },
    },
  };
});

const CustomTextForm: React.FC<CustomTextFormProps> = (props) => {
  const { classes } = useStyles();

  const defaultValue: any = {};
  const validate: any = {};

  props.fields.forEach((field: CustomTextFormFieldProps) => {
    if (field.typeinput !== "untype" && field.validate) {
      validate[field.key] = field.validate;
    }

    if (field.typeinput === "numberinput") {
      defaultValue[field.key] = field.defaultValue;
    }
    if (
      field.typeinput === "datepicker" &&
      dayjs(field.defaultValue).format("DD/MM/YYYY") === "01/01/1"
    ) {
      defaultValue[field.key] = undefined;
    }
  });

  const form = useForm({
    initialValues: defaultValue,
    validate: validate,
  });

  useEffect(() => {
    if (props.autoUpdate === undefined) return;
    if (props.autoUpdate.state === false) return;

    const update = setTimeout(() => {
      props.onSubmit?.call(props.onSubmit, form.values);
    }, props.autoUpdate.delay || 3000);

    return () => {
      clearTimeout(update);
    };
  }, [form.values]);

  useEffect(() => {
    form.setValues(props.values ? props.values : {});
  }, [props.values]);

  return (
    <MantineProvider theme={themeOverride[props.typeForm || "default"]}>
      <Box w={"100%"}>
        <form
          name={props.id}
          className={classes.root}
          id={props.id}
          onSubmit={form.onSubmit((values) =>
            props?.onSubmit?.call(props.onSubmit, values)
          )}
        >
          <Grid gutter={props.typeForm === "table" ? 0 : undefined}>
            {props.fields.map(
              (field: CustomTextFormFieldProps, index: number) => {
                const { xs: _, ...propsOfField } = field;
                return (
                  <Grid.Col key={index} span={field.xs}>
                    {propsOfField.typeinput !== "untype" ? (
                      <CustomFormField
                        {...propsOfField}
                        {...form.getInputProps(field.key)}
                      />
                    ) : (
                      <CustomUnType {...propsOfField} values={form.values} />
                    )}
                  </Grid.Col>
                );
              }
            )}
          </Grid>
        </form>
      </Box>
    </MantineProvider>
  );
};

const themeOverrideInline: MantineThemeOverride = {
  ...theme,
  components: {
    ...theme.components,
    InputWrapper: {
      styles: {
        root: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "auto",
          borderBottom: `1px solid #A2A3A8`,
          "& .mantine-Input-input": {
            border: 0,
            padding: 0,
            paddingLeft: 4,
            textAlign: "right",
            verticalAlign: "text-bottom",
            minHeight: 0,
            fontWeight: 600,
            backgroundColor: "unset",
          },
          "& .mantine-NumberInput-rightSection": {
            display: "none"
          },
          "& .mantine-InputWrapper-label": {
            whiteSpace: "nowrap",
            paddingBottom: 6,
            color: "#A2A3A8",
            fontWeight: 600,
          },
        }
      }
    }
  }
}

const themeOverrideFilled: MantineThemeOverride = {
  ...theme,
  components: {
    ...theme.components,
    InputWrapper: {
      styles: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          borderBottom: `1px solid #A2A3A8`,
          "& .mantine-Input-input": {
            border: 0,
            padding: 0,
            minHeight: 0,
            fontWeight: 600,
            backgroundColor: "unset",
          },
          "& .mantine-NumberInput-rightSection": {
            display: "none"
          },
          "& .mantine-InputWrapper-label": {
            textAlign: "left",
            color: "#A2A3A8",
            fontWeight: 600,
          },
        }
      }
    }
  }
}

const themeOverrideTable: MantineThemeOverride = {
  ...theme,
  components: {
    ...theme.components,
    InputWrapper: {
      styles: {
        root: {
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          "& .mantine-Input-input": {
            border: `1px solid #E1E5F2`,
            padding: 0,
            paddingLeft: 4,
            textAlign: "left",
            verticalAlign: "text-bottom",
            minHeight: 0,
            borderRadius: 0,
            color: "#2667F0",
            fontWeight: 600,
            height: "100%",
          },
          "& .mantine-NumberInput-rightSection": {
            display: "none"
          },
          "& .mantine-InputWrapper-label": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
            padding: 4,
            color: "#474747",
            border: `1px solid #E1E5F2`,
            backgroundColor: "#F7F9FF",
            fontWeight: 600,
          },
        }
      }
    }
  }
}

const themeOverrideTableFilled: MantineThemeOverride = {
  ...theme,
  components: {
    ...theme.components,
    InputWrapper: {
      styles: {
        root: {
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .mantine-Input-input": {
            border: `1px solid #E1E5F2`,
            textAlign: "left",
            verticalAlign: "text-bottom",
            minHeight: 0,
            borderRadius: 0,
            fontWeight: 600,
            height: "100%",
            padding: "8px 16px",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
          "& .mantine-NumberInput-rightSection": {
            display: "none"
          },
          "& .mantine-InputWrapper-label": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
            padding: "8px 16px",
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            color: "#474747",
            border: `1px solid #E1E5F2`,
            backgroundColor: "#F7F9FF",
            fontWeight: 600,
          },
        }
      }
    }
  }
}

const themeOverride: Record<TypeForm, MantineThemeOverride> = {
  inline: themeOverrideInline,
  filled: themeOverrideFilled,
  default: theme,
  table: themeOverrideTable,
  tableFilled: themeOverrideTableFilled,
}

export default CustomTextForm;
