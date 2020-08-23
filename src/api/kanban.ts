import axios from "axios";
import { CommonProps, LaneProps, CardProps, BoardData } from "react-trello";
import { loginWithJwt } from "./auth";
import { RelatedProjectReply } from "./types/Project";

export interface CardDragInput {
  srcList: string;
  dstList: string;
  idx: number;
}

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

export const handleCardDrag = async (
  cardId: string,
  srcLaneId: string,
  targetLaneId: string,
  idx: number,
  card: CommonProps | unknown,
): Promise<boolean> => {
  console.log(cardId, srcLaneId, targetLaneId, idx, card);

  const input: CardDragInput = { srcList: srcLaneId, dstList: targetLaneId, idx };
  try {
    const result = await axios.put(`/event/${cardId}/move`, input, loginWithJwt());
    console.log(result);
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
};

export const handleLaneDrag = async (removedIdx: number, addedIdx: number, lane: LaneProps): Promise<void> => {
  console.log(removedIdx);
  console.log(addedIdx);
  console.log(lane);
};

export const handleCardAdd = async (card: CardProps, laneId: string): Promise<void> => {
  console.log(card, laneId);
};

export const handleCardDelete = async (cardId: string, laneId: string): Promise<void> => {
  console.log(cardId, laneId);
};

export const handleLaneAdd = async (lane: LaneProps): Promise<void> => {
  console.log(lane);
};

export const handleLaneDelete = async (laneId: string): Promise<void> => {
  console.log(laneId);
};
