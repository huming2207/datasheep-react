import { BaseApiReply } from "./Common"; // eslint-disable-line
import { ListData } from "./List";

interface RelatedProjectData {
  lists: ListData[];
}

export type RelatedProjectReply = BaseApiReply<RelatedProjectData>;
