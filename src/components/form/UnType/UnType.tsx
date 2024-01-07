import React from "react";

export interface CustomUnTypeProps {
  values?: any
  display?: boolean
  component: (values: any) => React.ReactNode
}

const CustomUnType: React.FC<CustomUnTypeProps> = (props) => {
  return (
    <React.Fragment>{
      props.display &&
      (props.values && props.component(props.values))
    }</React.Fragment>
  )
}

export default CustomUnType;