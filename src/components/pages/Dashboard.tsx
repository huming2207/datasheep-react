import React from "react";
import Footer from "../common/Footer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Board, { BoardData } from "react-trello";
import { makeStyles } from "@material-ui/core";
import {
  processCardAdd,
  processLaneAdd,
  processCardDelete,
  processLaneDelete,
  processCardDrag,
  processLaneDrag,
} from "../../api/kanban";

const useStyles = makeStyles((theme) => ({
  board: {
    fontFamily: "sans-serif",
    backgroundColor: "white",
  },
}));

export default function Dashboard(): JSX.Element {
  const data: BoardData = {
    lanes: [
      {
        id: "lane1",
        title: "Planned Tasks",
        label: "2/2",
        cards: [
          { id: "Card1", title: "Write Blog", description: "Can AI make memes", label: "30 mins", draggable: true },
          {
            id: "Card2",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
        ],
      },
      {
        id: "lane2",
        title: "Completed",
        label: "0/0",
        cards: [],
      },
    ],
  };

  const styleClass = useStyles();

  return (
    <Container maxWidth="lg">
      <Box className={styleClass.board}>
        <Board
          draggable
          canAddLanes
          onCardAdd={processCardAdd}
          onCardDelete={processCardDelete}
          onLaneAdd={processLaneAdd}
          onLaneDelete={processLaneDelete}
          handleDragEnd={processCardDrag}
          handleLaneDragEnd={processLaneDrag}
          editable
          data={data}
          style={{ backgroundColor: "white" }}
        ></Board>
      </Box>
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  );
}
