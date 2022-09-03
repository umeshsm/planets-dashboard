import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { getPlanets } from "src/redux/slices/dataSlice";
import { addFilter, removeFilter } from "src/redux/slices/filterSlice";

import Checkbox from "src/components/input/checkbox";

const Filter = ({ filter }) => {
  const { key, name, options } = filter;
  const filtersState = useSelector((state) => state.filters);
  const filters = filtersState.filters;
  const dispatch = useDispatch();

  const onChange = (type, id) => {
    if (type) {
      dispatch(addFilter({ key, id }));
      return;
    }

    dispatch(removeFilter({ key, id }));
  };

  React.useEffect(() => {
    dispatch(getPlanets(filtersState));
  }, [filters]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="6">{name}</Typography>
      {!!options.length &&
        options.map((item) => (
          <Checkbox
            key={item.id}
            label={item.name}
            checked={filters[name]?.includes(item.id)}
            onChange={(e) => onChange(e.target.checked, item.id)}
          />
        ))}
    </Box>
  );
};

const Filters = () => {
  const data = useSelector((state) => state.data);

  const FILTERS = [
    {
      key: "color",
      name: "Color",
      options: data.colors,
    },
    {
      key: "shape",
      name: "Shape",
      options: data.shapes,
    },
    {
      key: "size",
      name: "Size",
      options: data.sizes,
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
    </Box>
  );
};

export default Filters;
