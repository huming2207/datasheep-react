import * as yup from "yup";

export interface LoginFormInput {
  username: string;
  password: string;
}

export const LoginFormSchema = yup.object().shape({
  password: yup.string().required(),
  username: yup.string().required(),
});
