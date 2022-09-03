import React from "react";
import { Box, Typography } from "@mui/material";

import Checkbox from "src/components/input/checkbox";

const Filters = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="6">Color</Typography>
        <Checkbox label="Red" />
        <Checkbox label="Green" />
        <Checkbox label="Blue" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="6">Shape</Typography>
        <Checkbox label="Red" />
        <Checkbox label="Green" />
        <Checkbox label="Blue" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="6">Size</Typography>
        <Checkbox label="Red" />
        <Checkbox label="Green" />
        <Checkbox label="Blue" />
      </Box>
    </Box>
  );
};

export default Filters;
