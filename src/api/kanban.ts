import { CommonProps, LaneProps, CardProps } from "react-trello";

export const processCardDrag = (
  cardId: string,
  srcLaneId: string,
  targetLaneId: string,
  idx: number,
  card: CommonProps | unknown,
): boolean => {
  console.log(cardId);
  console.log(srcLaneId);
  console.log(targetLaneId);
  console.log(idx);
  console.log(card);
  return true;
};

export const processLaneDrag = (removedIdx: number, addedIdx: number, lane: LaneProps): void => {
  console.log(removedIdx);
  console.log(addedIdx);
  console.log(lane);
};

export const processCardAdd = (card: CardProps, laneId: string): void => {
  console.log(laneId);
  console.log(card);
};

export const processCardDelete = (cardId: string, laneId: string): void => {
  console.log(cardId, laneId);
};

export const processLaneAdd = (lane: LaneProps): void => {
  console.log(lane);
};

export const processLaneDelete = (laneId: string): void => {
  console.log(laneId);
};
