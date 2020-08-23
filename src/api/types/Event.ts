import { Ref, BaseApiData } from "./Common";
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
