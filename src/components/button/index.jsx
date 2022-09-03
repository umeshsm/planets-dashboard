import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, variant = "contained", ...rest }) => {
  return (
    <MuiButton variant={variant} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
