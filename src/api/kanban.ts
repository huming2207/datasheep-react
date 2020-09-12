import axios from "axios";
import { LaneProps, CardProps, BoardData } from "react-trello";
import { loginWithJwt } from "./auth";
import { CreateEventReply, CreateEventInput, MoveEventInput, DeleteEventInput, DeleteEventReply } from "./types/Event";
import { CreateListInput, CreateListReply, DeleteListInput, DeleteListReply } from "./types/List";
import { RelatedProjectReply } from "./types/Project";

export const fetchList = async (projectId: string): Promise<BoardData> => {
  const result = await axios.get<RelatedProjectReply>(`/project/${projectId}/list`);
  const lists = result.data.data.lists;
  if (lists.length < 1) return { lanes: [] };

  const lanes: LaneProps[] = [];
  for (const list of lists) {
    const lane: LaneProps = { title: list.title, id: list._id, label: list.description };
    if (list.events) {
      for (const event of list.events) {
        const card: CardProps = { title: event.title, description: event.content, id: event._id };
        if (!lane.cards) lane.cards = [];
        lane.cards.push(card);
      }
    }

    lanes.push(lane);
  }

  return { lanes };
};

export const dragCard = async (input: MoveEventInput): Promise<boolean> => {
  try {
    const result = await axios.put(`/event/${input.id}/move`, input, loginWithJwt());
    console.log(result);
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
};

export const dragList = async (removedIdx: number, addedIdx: number, lane: LaneProps): Promise<void> => {
  console.log(removedIdx);
  console.log(addedIdx);
  console.log(lane);
};

export const addEvent = async (input: CreateEventInput): Promise<void> => {
  await axios.post<CreateEventReply>("/event", input, loginWithJwt());
};

export const deleteEvent = async (input: DeleteEventInput): Promise<void> => {
  await axios.delete<DeleteEventReply>(`/event/${input.id}`, loginWithJwt());
};

export const addList = async (input: CreateListInput): Promise<void> => {
  await axios.post<CreateListReply>("/list", input, loginWithJwt());
};

export const deleteList = async (input: DeleteListInput): Promise<void> => {
  await axios.delete<DeleteListReply>(`/list/${input.id}`, loginWithJwt());
};
