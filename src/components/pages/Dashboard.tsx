import React from "react";
import Footer from "../common/Footer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { KanbanList } from "../common/KanbanList";

export function Dashboard(): JSX.Element {
  return (
    <Container maxWidth="xs">
      <DndProvider backend={HTML5Backend}>
        <KanbanList></KanbanList>
      </DndProvider>
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  );
}
