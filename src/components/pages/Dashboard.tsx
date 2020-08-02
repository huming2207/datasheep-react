import React from "react";
import Footer from "../common/Footer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

export function Dashboard(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  );
}
