import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ width: 1, bgcolor: "rgba(0, 0, 0, 0.58)", p: 1, position: "fixed", bottom: 0 }}>
      <Typography sx={{ color: "rgba(255, 255, 255, 0.53)" }} variant="subtitle2">
        Güzel kızım Selin Feyza'ya itafen...
      </Typography>
    </Box>
  );
};

export default Footer;
