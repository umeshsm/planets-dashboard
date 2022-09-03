import React from "react";
import { TextField } from "@mui/material";

const Input = ({ variant = "outlined", size = "small", ...rest }) => {
  return <TextField variant={variant} size={size} fullWidth {...rest} />;
};

export default Input;
