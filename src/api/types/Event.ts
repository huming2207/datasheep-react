import { Ref, BaseApiData, BaseApiReply } from "./Common";
import { UserData } from "./User";
import { ListData } from "./List";

export interface EventData extends BaseApiData {
  title: string;
  content: string;
  color?: number;
  due?: Date;
  owner?: Ref<UserData>;
  assignedTo?: Ref<UserData>[];
  list: Ref<ListData>;
  attachments?: Ref<File>[];
}

interface CreateEventData {
  event: EventData;
}

interface MoveEventData {
  id: string;
}

export type CreateEventReply = BaseApiReply<CreateEventData>;
export type MoveEventReply = BaseApiReply<MoveEventData>;
