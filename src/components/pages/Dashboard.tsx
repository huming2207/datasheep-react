import React from "react";
import Footer from "../common/Footer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Board, { BoardData } from "react-trello";
import { makeStyles } from "@material-ui/core";

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
        draggable: true,
      },
      {
        id: "lane2",
        title: "Completed",
        label: "0/0",
        cards: [],
        draggable: true,
      },
    ],
  };

  const styleClass = useStyles();

  return (
    <Container maxWidth="lg">
      <Box className={styleClass.board}>
        <Board data={data} style={{ backgroundColor: "white" }}></Board>
      </Box>
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  );
}
