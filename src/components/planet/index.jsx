import React from "react";
import { Card as MuiCard, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Planet = ({ data }) => {
  const shape = useSelector(
    (state) => state.data.shape.find((item) => item.id === data.shape)?.name
  );
  const color = useSelector(
    (state) => state.data.color.find((item) => item.id === data.color)?.name
  );
  const size = useSelector(
    (state) => state.data.size.find((item) => item.id === data.size)?.name
  );

  const getBgColor = (color) => {
    if (color === "Red") {
      return "#ff9d9d";
    }
    if (color === "Green") {
      return "#a6f1a6";
    }
    if (color === "Blue") {
      return "#c4ffff";
    }
  };

  return (
    <MuiCard raised={true}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          {data?.name}
        </Typography>
        <Typography color="text.secondary">
          {data?.name} is{" "}
          <Typography
            component="span"
            sx={{
              color: color.toLowerCase(),
            }}
          >
            <b>{color}</b>
          </Typography>{" "}
          in color, <b>{shape}</b> in shape and <b>{size}</b> in size.
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Planet;
