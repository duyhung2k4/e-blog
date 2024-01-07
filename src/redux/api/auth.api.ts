import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { LoginGoogleRequest } from "@/dto/request/auth.request";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    loginGoogle: builder.mutation<any, LoginGoogleRequest>({
      query: (payload) => ({
        ...endPoint.auth.loginGoogle(),
        data: payload,
      })
    })
  })
});

export const {
  useLoginGoogleMutation,
} = authApi;