import { AxiosRequestConfig } from "axios";

export const LocalStorageJwt = "login_token";

export const EncodedFormConfig: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
