import React from "react";
import { BaseLayoutProps } from "../layout";

export type AuthLayoutProps = BaseLayoutProps;

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  return (
    <>{props.children}</>
  )
}

export default AuthLayout;