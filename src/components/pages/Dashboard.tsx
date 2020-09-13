import React, { useState } from "react";
import Footer from "../common/Footer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TopBar from "../common/TopBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import AppBar from "@material-ui/core/AppBar";
import TabSection from "../common/TabSection";
import BoardView from "../common/BoardView";

export default function Dashboard(): JSX.Element {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <TopBar></TopBar>
      <Container maxWidth="lg" style={{ marginTop: "30px" }}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="dashboard tabs">
            <Tab label="Board view" />
            <Tab label="List view" />
          </Tabs>
        </AppBar>
        <TabSection value={value} index={0}>
          <BoardView></BoardView>
        </TabSection>
        <TabSection value={value} index={1}>
          Item Two
        </TabSection>
        <Box mt={5}>
          <Footer />
        </Box>
      </Container>
    </React.Fragment>
  );
}
