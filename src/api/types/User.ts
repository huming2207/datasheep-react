import { BaseApiReply } from "./Common";

export interface UserData {
  username: string;
  password: string;
  email: string;
}

interface AuthRegisterData {
  userName: string;
  email: string;
  id: string;
}

interface AuthLoginData {
  token: string;
}

export type AuthRegisterReply = BaseApiReply<AuthRegisterData>;
export type AuthLoginReply = BaseApiReply<AuthLoginData>;
