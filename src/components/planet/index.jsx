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

  return (
    <MuiCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data?.name} is {shape} in shape, {color} in color and {size} in size.
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Planet;
