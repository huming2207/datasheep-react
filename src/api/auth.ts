import { LocalStorageJwt, EncodedFormConfig } from "./constant";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

export const loginWithJwt = (): AxiosRequestConfig => {
  const token = localStorage.getItem(LocalStorageJwt);
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return {};
};

export const loginUser = async (username: string, password: string): Promise<AxiosResponse> => {
  const resp = await axios.post(
    "/api/auth/login",
    qs.stringify({
      username,
      password,
    }),
    EncodedFormConfig,
  );

  const { token } = resp.data.data;
  console.log(token);
  localStorage.setItem(LocalStorageJwt, token);
  return resp;
};

export const registerUser = async (username: string, password: string, email: string): Promise<AxiosResponse> => {
  return axios.post(
    "/api/auth/register",
    qs.stringify({
      username,
      password,
      email,
    }),
    EncodedFormConfig,
  );
};
