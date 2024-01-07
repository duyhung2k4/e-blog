import CustomTextForm, { CustomTextFormFieldProps } from "@/components/form/TextForm/TextForm";
import React, { useMemo } from "react";

const Form_Login: React.FC = () => {

  const fields = useMemo(() => {
    const fields: CustomTextFormFieldProps[] = [
      {
        placeholder: "email",
        key: "email",
        xs: 12,
        typeinput: "textinput",
      },
      {
        placeholder: "password",
        key: "password",
        xs: 12,
        typeinput: "passwordinput",
      }
    ]
    return fields
  }, []);
  return (
    <CustomTextForm
      id=""
      fields={fields}
    />
  )
}

export default Form_Login;