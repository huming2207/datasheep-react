import * as yup from "yup";

export interface RegFormInput {
  username: string;
  name: string;
  email: string;
  password: string;
}

export const RegFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(30).required(),
  name: yup.string().notRequired(),
  username: yup.string().min(2).max(30).required(),
});
