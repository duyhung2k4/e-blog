import React from "react";
import LoginPage from "@/pages/auth/login";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login: React.FC = async () => {
  return (
    <GoogleOAuthProvider
      clientId='281025353487-7j8udd6v8s178gu2n7otmtdton5kuh1j.apps.googleusercontent.com'
    >
      <LoginPage />
    </GoogleOAuthProvider>
  )
}

export default Login;