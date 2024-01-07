import React from "react";
import { FileInput, FileInputProps } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import MIME_TYPE from "@pdt/utils/mimeType.constant";

export interface CustomFileInputProps extends FileInputProps {};
const CustomFileInput: React.FC<CustomFileInputProps> = (props) => {
  return (
    <FileInput 
      {...props} 
      icon={<IconUpload size={14} />}
			accept={[MIME_TYPE.DOCX, MIME_TYPE.DOC, MIME_TYPE.PDF].join(",")}
    />
  )
}

export default CustomFileInput;