import { EventData } from "./Event";
import { BaseApiData } from "./Common";

export interface ListData extends BaseApiData {
  title: string;
  color?: string;
  description?: string;
  owner: string;
  events?: EventData[];
}
