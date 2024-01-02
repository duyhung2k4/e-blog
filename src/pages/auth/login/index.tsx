"use client"
import React, { useEffect, useState } from 'react';
import {
  useGoogleLogin,
} from '@react-oauth/google';
import {
  Button
} from "@mantine/core";
import { getGoogleProfile } from '@/utils/google';


const LoginPage: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const login = useGoogleLogin({
    onSuccess: data => {
      setAccessToken(data.access_token);
      setData(data);
    },
    onError: () => {
      setAccessToken("");
      setData(null);
    },
    flow: 'implicit',
    scope: 'profile email',
  });

  useEffect(() => {
    if(accessToken.length > 0) {
      handleLogin();
    }
  }, [accessToken]);

  const handleLogin = async () => {
    const result = await getGoogleProfile(accessToken);
    console.log(result);
  }


  return (
    <div>
      <Button onClick={() => login()}>Login GG</Button>
    </div>
  )
}

export default LoginPage;