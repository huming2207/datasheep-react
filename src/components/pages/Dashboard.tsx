import React, { useState } from "react";
import Footer from "../common/Footer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export function Dashboard(): JSX.Element {
  return (
    <Container maxWidth="xs">
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  );
}
