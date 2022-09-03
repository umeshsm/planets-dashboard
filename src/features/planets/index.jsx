import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import Planet from "src/components/planet";

const Planets = () => {
  const planets = useSelector((state) => state.data.planet);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {!!planets.length &&
        planets.map((item) => <Planet key={item.id} data={item} />)}
    </Box>
  );
};

export default Planets;
