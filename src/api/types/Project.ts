import { ListData } from "./List";
import { BaseApiReply } from "./Common";

interface RelatedProjectData {
  lists: [ListData];
}

export type RelatedProjectReply = BaseApiReply<RelatedProjectData>;
