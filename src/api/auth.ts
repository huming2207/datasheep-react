import { LocalStorageJwt } from "./constant";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { LoginFormInput } from "../schemas/LoginForm";
import { RegFormInput } from "../schemas/RegisterForm";
import { AuthLoginReply, AuthRegisterReply } from "./types/User";

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

export const loginUser = async (input: LoginFormInput): Promise<AxiosResponse<AuthLoginReply>> => {
  const resp = await axios.post<AuthLoginReply>("/api/auth/login", input);

  const { token } = resp.data.data;
  console.log(token);
  localStorage.setItem(LocalStorageJwt, token);
  return resp;
};

export const registerUser = async (input: RegFormInput): Promise<AxiosResponse<AuthRegisterReply>> => {
  return axios.post<AuthRegisterReply>("/api/auth/register", input);
};
