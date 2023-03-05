import React from "react";
import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";

const Headers = ({ header, text, lesson, setLesson }) => {
  return (
    <Grid item xs={12} md={3}>
      <Card
        sx={{
          width: 1,
          boxShadow: 6,
          bgcolor: "rgba(245, 40, 145, 0.83)",
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
          cursor: "pointer",
        }}
        onClick={() => {
          setLesson(header);
        }}
      >
        <Typography sx={{ textAlign: "center", pt: 3 }} variant="h2">
          {header}
        </Typography>{" "}
        <Typography sx={{ p: 3, textTransform: "capitalize" }} variant="body2">
          {text}
        </Typography>
      </Card>{" "}
    </Grid>
  );
};

export default Headers;
