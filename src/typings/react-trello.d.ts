declare module "react-trello" {
  import React, { FunctionComponent } from "react";
  type StringPairs = Record<string, string> | string;

  export type TranslateFunc = (texts: Record<string, StringPairs>) => void;
  export const createTranslation: TranslateFunc;

  export interface TagProps {
    title: string;
    color: string;
    bgcolor: string;
    tagStyle: Record<string, number | StringPairs>;
  }

  export declare const Tag: React.ComponentType<TagProps>;

  export interface CardProps {
    showDeleteButton?: boolean;
    onDelete?: () => void;
    onClick?: () => void;
    style?: Record<string, number | StringPairs>;
    tagStyle?: Record<string, number | StringPairs>;
    className?: string;
    id: string;
    title: string;
    label?: string;
    description?: string;
    draggable?: boolean;
    tags?: Tag[];
    metadata?: Record<string, unknown>;
  }

  export declare const Card: React.ComponentType<CardProps>;

  export type HandleDragStartFunc = (cardId: string, laneId: string) => void;
  export type HandleDragEndFunc = (
    cardId: string,
    srcLaneId: string,
    targetLaneId: string,
    idx: number,
    card: CommonProps,
  ) => boolean;

  export type HandleLaneDragStart = (laneId: string) => void;
  export type HandleLaneDragEnd = (removedIdx: number, addedIdx: number, payload: CommonProps) => void;

  export enum EventType {
    AddCard = "ADD_CARD",
    UpdateCard = "UPDATE_CARD",
    RemoveCard = "REMOVE_CARD",
    RefreshCard = "REFRESH_CARD",
    MoveCard = "MOVE_CARD",
    UpdateCards = "UPDATE_CARDS",
    UpdateLanes = "UPDATE_LANES",
    UpdateLane = "UPDATE_LANE",
  }

  export interface CommonProps {
    id?: string;
    handleDragStart?: HandleDragStartFunc;
    handleDragEnd?: HandleDragEndFunc;
    handleLaneDragStart?: HandleLaneDragStart;
    handleLaneDragEnd?: HandleLaneDragEnd;
    onDataChange?: (data: CommonData) => void;
    onCardMoveAcrossLanes?: (fromLaneId: string, toLaneId: string, cardId: string, index: number) => void;
    onCardAdd?: (card: CardProps, laneId: string) => void;
    onCardClick?: (cardId: string, metadata: any, laneId: string) => void;
    onBeforeCardDelete?: () => void;
    onCardDelete?: (cardId: string, laneId: string) => void;
    onLaneAdd?: (lane: any) => void;
    onLaneDelete?: (laneId: string) => void;
    onLaneClick?: (laneId: string) => void;
    onLaneScroll?: (page: number, laneId: string) => void;
    onBeforeCardDelete?: () => void;
    laneSortFunction?: (card1: CardProps, card2: CardProps) => number;
    draggable?: bool;
    collapsibleLanes?: bool;
    editable?: bool;
    canAddLanes?: bool;
    hideCardDeleteIcon?: bool;
    style?: Record<string, StringPairs | number>;
    tagStyle?: Record<string, StringPairs | number>;
    laneDraggable?: bool;
    cardDraggable?: bool;
    cardDragClass?: string;
    laneDragClass?: string;
    laneDropClass?: string;
    t?: TranslateFunc;
  }

  export interface BoardComponents {
    AddCardLink: React.ComponentType;
    LaneHeader: React.ComponentType;
    NewCardForm: React.ComponentType;
    NewLaneSection: React.ComponentType;
    Card: React.ComponentType;
  }

  export interface BoardContainerProps extends CommonProps {
    components?: BoardComponents;
    actions?: any;
    data?: BoardData;
    reducerData?: any;
    eventBusHandle?: (type: EventType) => void;
  }

  export interface LaneProps extends CommonProps {
    boardId?: string;
    title?: string;
    index?: number;
    currentPage?: number;
    cards?: CardProps[];
    labelStyle?: Record<string, StringPairs | number>;
    label?: string;
  }

  export interface BoardData {
    lanes: LaneProps[];
  }

  export declare const Board: React.ComponentType<BoardContainerProps>;
  export default Board;
}
