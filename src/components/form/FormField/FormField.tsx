import React from "react";
import CustomTextInput, { CustomTextInputProps } from "../TextInput/TextInput";
import CustomTextArea, { CustomTextAreaProps } from "../TextArea/TextArea";
import CustomSelect, { CustomSelectProps } from "../Select/Select";
import CustomMultiSelect, { CustomMultiSelectProps } from "../MultiSelect/MultiSelect";
import CustomAutoComplete, { CustomAutoCompleteProps } from "../AutoComplete/AutoComplete";
import CustomRadio, { CustomRadioProps } from "../Radio/Radio";
import CustomRadioGroup, { CustomRadioGroupProps } from "../RadioGroup/RadioGroup";
import CustomDatePicker, { CustomDatePickerProps } from "../DatePicker/DatePicker";
import CustomNumberInput, { CustomNumberInputProps } from "../NumberInput/NumberInput";
import CustomPasswordInput, { CustomPasswordInputProps } from "../PasswordInput/PasswordInput";
import CustomSwitch, { CustomSwitchProps } from "../Switch/Switch";
import CustomTableInput, { CustomTableInputProps } from "../TableInput";
import CustomSelectBase, { CustomSelectBaseProps } from "../SelectBase/SelectBase";
import CustomUnType, { CustomUnTypeProps } from "../UnType/UnType";
import CustomFileInput, { CustomFileInputProps } from "../FileInput/FileInput";
import CustomDropzone, { CustomDropzoneProps } from "../Dropzone";

export type CustomFormFieldType =
  | "textinput"
  | "textarea"
  | "select"
  | "selectbase"
  | "multiselect"
  | "autocomplete"
  | "radio"
  | "radiogroup"
  | "datepicker"
  | "numberinput"
  | "passwordinput"
  | "switch"
  | "tableinput"
  | "fileinput"
  | "dropzone"
  | "untype";

interface FieldBaseProps {
  typeinput: CustomFormFieldType
}

interface FieldTextInputProps extends CustomTextInputProps, FieldBaseProps {
  typeinput: "textinput"
}
interface FieldTextAreaProps extends CustomTextAreaProps, FieldBaseProps {
  typeinput: "textarea"
}
interface FieldSelectProps extends CustomSelectProps, FieldBaseProps {
  typeinput: "select"
}
interface FieldSelectBaseProps extends CustomSelectBaseProps, FieldBaseProps {
  typeinput: "selectbase"
}
interface FieldMultiSelectProps extends CustomMultiSelectProps, FieldBaseProps {
  typeinput: "multiselect"
}
interface FieldAutoCompleteProps extends CustomAutoCompleteProps, FieldBaseProps {
  typeinput: "autocomplete"
}
interface FieldRadioProps extends CustomRadioProps, FieldBaseProps {
  typeinput: "radio"
}
interface FieldRadioGroupProps extends CustomRadioGroupProps, FieldBaseProps {
  typeinput: "radiogroup"
}
interface FieldDatePickerProps extends CustomDatePickerProps, FieldBaseProps {
  typeinput: "datepicker"
}
interface FieldNumberInputProps extends CustomNumberInputProps, FieldBaseProps {
  typeinput: "numberinput"
}
interface FieldPasswordInputProps extends CustomPasswordInputProps, FieldBaseProps {
  typeinput: "passwordinput"
}
interface FieldSwitchProps extends CustomSwitchProps, FieldBaseProps {
  typeinput: "switch"
}
interface FieldTableInputProps extends CustomTableInputProps, FieldBaseProps {
  typeinput: "tableinput"
}
interface FieldFileInputProps extends CustomFileInputProps, FieldBaseProps {
  typeinput: "fileinput"
}
interface FieldDropzoneProps extends CustomDropzoneProps, FieldBaseProps {
  typeinput: "dropzone"
}
interface FieldUnTypeProps extends CustomUnTypeProps, FieldBaseProps {
  typeinput: "untype"
}


export type CustomFormFieldProps =
  | FieldTextInputProps
  | FieldTextAreaProps
  | FieldSelectProps
  | FieldSelectBaseProps
  | FieldMultiSelectProps
  | FieldAutoCompleteProps
  | FieldRadioProps
  | FieldRadioGroupProps
  | FieldDatePickerProps
  | FieldNumberInputProps
  | FieldPasswordInputProps
  | FieldSwitchProps
  | FieldTableInputProps
  | FieldFileInputProps
  | FieldDropzoneProps
  | FieldUnTypeProps;

const CustomFormField: React.FC<CustomFormFieldProps> = (props) => {
  switch (props.typeinput) {
    case "textinput":
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomTextInput
          {...newProps}
        />
      )
    case "textarea": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomTextArea
          {...newProps}
        />
      )
    }
    case "select": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomSelect
          {...newProps}
        />
      )
    }
    case "selectbase": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomSelectBase
          {...newProps}
        />
      )
    }
    case "multiselect": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomMultiSelect
          {...newProps}
        />
      )
    }
    case "autocomplete": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomAutoComplete
          {...newProps}
        />
      )
    }
    case "radio": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomRadio
          {...newProps}
        />
      )
    }
    case "radiogroup": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomRadioGroup
          {...newProps}
        />
      )
    }
    case "datepicker": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomDatePicker
          {...newProps}
        />
      )
    }
    case "numberinput": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomNumberInput
          {...newProps}
        />
      )
    }
    case "passwordinput": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomPasswordInput
          {...newProps}
        />
      )
    }
    case "switch": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomSwitch
          {...newProps}
        />
      )
    }
    case "tableinput": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomTableInput
          {...newProps}
        />
      )
    }
    case "fileinput": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomFileInput
          {...newProps}
        />
      )
    }
    case "dropzone": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomDropzone
          {...newProps}
        />
      )
    }
    case "untype": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomUnType
          {...newProps}
        />
      )
    }
  }
}

export default CustomFormField;