import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { getPlanets } from "src/redux/slices/dataSlice";
import {
  addFilter,
  removeFilter,
  clearFilters,
} from "src/redux/slices/filterSlice";

import Checkbox from "src/components/input/checkbox";
import Button from "src/components/button";

const Filter = ({ filter }) => {
  const { key, name, options } = filter;
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();

  const onChange = (type, id) => {
    if (type) {
      dispatch(addFilter({ key, id }));
      return;
    }

    dispatch(removeFilter({ key, id }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="6">{name}</Typography>
      {!!options.length &&
        options.map((item) => (
          <Checkbox
            key={item.id}
            label={item.name}
            checked={filters[key]?.includes(item.id)}
            onChange={(e) => onChange(e.target.checked, item.id)}
          />
        ))}
    </Box>
  );
};

const Filters = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleClearAllFilters = () => {
    dispatch(clearFilters());
  };

  const FILTERS = [
    {
      key: "color",
      name: "Color",
      options: data.color,
    },
    {
      key: "shape",
      name: "Shape",
      options: data.shape,
    },
    {
      key: "size",
      name: "Size",
      options: data.size,
    },
  ];

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
      {FILTERS.map((item) => (
        <Filter key={item.name} filter={item} />
      ))}
      <Box>
        <Button variant="outlined" onClick={handleClearAllFilters}>
          Clear All Filters
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;
