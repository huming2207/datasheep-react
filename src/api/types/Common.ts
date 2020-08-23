export interface BaseApiData {
  _id: string;
}

export interface BaseApiReply<T = any> {
  message: string;
  data: T;
}

export type Ref<T = any> = T | string;
