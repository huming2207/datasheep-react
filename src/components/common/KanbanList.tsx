import React, { useState, useCallback } from "react";
import update from "immutability-helper";
import { EventCard } from "./EventCard";
import { makeStyles, Theme, createStyles, List, ListSubheader, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "40ch",
      display: "inline-block",
      marginRight: "15px",
      marginTop: "15px",
      backgroundColor: theme.palette.primary.main,
    },
    inline: {
      display: "inline-block",
    },
    listHeader: {
      marginTop: "10px",
      marginBottom: "10px",
      fontWeight: "bold",
    },
  }),
);

export interface Item {
  id: number;
  text: string;
}

export const KanbanList: React.FC = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "wow",
      text: "Write a cool JS library",
    },
    {
      id: 2,
      title: "wow",
      text: "Make it generic enough",
    },
    {
      id: 3,
      title: "wow",
      text: "Write README",
    },
    {
      id: 4,
      title: "wow",
      text: "Create some examples",
    },
    {
      id: 5,
      title: "wow",
      text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    },
    {
      id: 6,
      title: "wow",
      text: "???",
    },
    {
      id: 7,
      title: "wow",
      text: "PROFIT",
    },
  ]);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      console.log("Move started");
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      );
    },
    [cards],
  );

  const renderCard = (card: { id: number; text: string; title: string }, index: number) => {
    return (
      <EventCard key={card.id} index={index} id={card.id} text={card.text} title={card.title} moveCard={moveCard} />
    );
  };

  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListSubheader>
        <Typography className={classes.listHeader} variant="h4" component="h2">
          test
        </Typography>
      </ListSubheader>
      {cards.map((card, i) => renderCard(card, i))}
    </List>
  );
};
