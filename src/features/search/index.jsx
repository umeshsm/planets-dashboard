import React from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";

import { updateQuery } from "src/redux/slices/filterSlice";
import { getPlanets } from "src/redux/slices/dataSlice";

import Input from "src/components/input/text";
import Button from "src/components/button";

const Search = () => {
  const filters = useSelector((state) => state.filters);
  const query = filters.query;
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(updateQuery({ query: e.target.value }));
  };

  const handleSearch = () => {
    dispatch(getPlanets(filters));
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        height: "15vh",
        maxWidth: "1000px",
        minWidth: "600px",
        display: "flex",
        alignItems: "center",
        gap: "3px",
      }}
    >
      <Input value={query} onChange={onChange} onKeyUp={onKeyUp} />
      <Button onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default Search;
