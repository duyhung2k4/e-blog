"use client"
import React, { useEffect, useState } from 'react';
import {
  useGoogleLogin,
} from '@react-oauth/google';
import {
  Button,
  Group,
  Image,
  Stack,
  Title,
  createStyles
} from "@mantine/core";
import { getGoogleProfile } from '@/utils/google';
import loginBg from "@/assets/image/loginBg.jpg";
import iconGoogle from "@/assets/icon/google.svg";
import theme from '@/theme/theme';
import Form_Login from '@/form/auth/login.form';


const LoginPage: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const { classes, theme } = useStyle();

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
    <Group className={classes.root} position="center">
      <Stack align="center">
        <p className={classes.login}>Đăng nhập</p>
        <p className={classes.title}>Chào mừng đến với Esport Blog</p>


        <Stack maw={300} w={"100%"}>
          <Form_Login/>
          <Button
            w={"100%"}
            onClick={() => login()}
            leftIcon={<Image height={20} src={iconGoogle.src} />}
          >Đăng nhập với Google</Button>
        </Stack>
      </Stack>
    </Group>
  )
}

const useStyle = createStyles(() => {
  return {
    root: {
      backgroundImage: `url("${loginBg.src}")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
    },
    login: {
      color: theme.colors?.white?.[0],
      fontSize: 54,
      fontWeight: 400,
    },
    title: {
      color: theme.colors?.white?.[0],
      fontSize: 16,
      fontWeight: 400,
      marginTop: 40,
      marginBottom: 36,
    }
  }
})

export default LoginPage;