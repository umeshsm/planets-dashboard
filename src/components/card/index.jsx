import React from "react";
import { Card as MuiCard, CardContent, Typography } from "@mui/material";

const Card = () => {
  return (
    <MuiCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Word of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          well meaning and kindly.
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
