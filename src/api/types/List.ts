import { EventData } from "./Event";
import { BaseApiData, BaseApiReply } from "./Common";

export interface ListData extends BaseApiData {
  title: string;
  color?: string;
  description?: string;
  owner: string;
  events?: EventData[];
}

interface CreateListData {
  list: ListData;
}

interface DeleteListData {
  id: string;
}

export type CreateListReply = BaseApiReply<CreateListData>;
export type DeleteListReply = BaseApiReply<DeleteListData>;

export interface CreateListInput {
  color?: number;
  title: string;
  project: string;
}

export interface DeleteListInput {
  id: string;
}
