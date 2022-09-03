import React from "react";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

const Checkbox = ({ label, size = "small", ...rest }) => {
  return (
    <FormControlLabel
      control={<MuiCheckbox size={size} {...rest} />}
      label={label}
    />
  );
};

export default Checkbox;
