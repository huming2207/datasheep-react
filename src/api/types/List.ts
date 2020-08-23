import { EventData } from "./Event";
import { Ref } from "./Common";

export interface ListData {
  title: string;
  color?: string;
  description?: string;
  owner: string;
  events?: Ref<EventData>;
}
