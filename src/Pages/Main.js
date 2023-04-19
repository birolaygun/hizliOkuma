import { Box, Grid } from "@mui/material";
import React from "react";
import Headers from "./Components/Headers";

const Main = ({ lesson, setLesson }) => {
  return (
    <Box sx={{ p: 10 }}>
      <Grid container spacing={5}>
        <Headers lesson={lesson} setLesson={setLesson} header="1" text="1 harf" />
        <Headers lesson={lesson} setLesson={setLesson} header="2" text="2 harf" />
        <Headers lesson={lesson} setLesson={setLesson} header="3" text="3 harf" />
        <Headers lesson={lesson} setLesson={setLesson} header="4" text="4 harf" />
      </Grid>
    </Box>
  );
};

export default Main;
