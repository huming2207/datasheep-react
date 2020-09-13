import React, { useCallback, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Board, { BoardData, CardProps, LaneProps } from "react-trello";
import { makeStyles } from "@material-ui/core";
import { addEvent, addList, deleteEvent, deleteList, dragCard, dragList, fetchList } from "../../api/kanban";

const useStyles = makeStyles((theme) => ({
  board: {
    fontFamily: "sans-serif",
    backgroundColor: theme.palette.background.default,
  },
}));

export default function BoardView(): JSX.Element {
  const [boardData, setBoardData] = useState<BoardData>({ lanes: [] });
  const fetchListCallback = useCallback(async () => {
    setBoardData(await fetchList("test"));
  }, []);

  useEffect(() => {
    fetchListCallback();
  }, [fetchListCallback]);

  const styleClass = useStyles();

  const handleCardAdd = (card: CardProps, laneId: string): void => {
    addEvent({ title: card.title, content: card.description, list: laneId }).catch((err) => {
      console.error(err);
    });
  };

  const handleCardDelete = (cardId: string): void => {
    deleteEvent({ id: cardId }).catch((err) => {
      console.error(err);
    });
  };

  const handleListAdd = (lane: LaneProps): void => {
    addList({ title: lane.title || "", project: "" }).catch((err) => {
      console.error(err);
    });
  };

  const handleLaneDelete = (laneId: string): void => {
    deleteList({ id: laneId }).catch((err) => {
      console.error(err);
    });
  };

  const handleCardDrag = (cardId: string, srcLaneId: string, targetLaneId: string, idx: number): boolean => {
    dragCard({ id: cardId, srcList: srcLaneId, dstList: targetLaneId, idx }).catch((err) => {
      console.error(err);
    });

    return true;
  };

  return (
    <Box className={styleClass.board}>
      <Board
        draggable
        canAddLanes
        onCardAdd={handleCardAdd}
        onCardDelete={handleCardDelete}
        onLaneAdd={handleListAdd}
        onLaneDelete={handleLaneDelete}
        handleDragEnd={handleCardDrag}
        handleLaneDragEnd={dragList}
        editable
        data={boardData}
        style={{ backgroundColor: "white" }}
      ></Board>
    </Box>
  );
}
