import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useClipboard } from "use-clipboard-copy";
import toast, { Toaster } from "react-hot-toast";

import {
  getPlanets,
  getShapes,
  getColors,
  getSizes,
} from "src/redux/slices/dataSlice";
import { updateFilters } from "src/redux/slices/filterSlice";

import Search from "src/features/search";
import Filters from "src/features/filters";
import Planets from "src/features/planets";

import { getSharableURL } from "src/helpers";

import "src/App.css";

const App = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const clipboard = useClipboard();
  const location = useLocation();

  const handleCopySharableLink = () => {
    const sharableURL = getSharableURL(filters);
    clipboard.copy(sharableURL);
    toast.success("Copied the sharable link to clipboard!");
  };

  React.useEffect(() => {
    dispatch(getShapes());
    dispatch(getColors());
    dispatch(getSizes());

    if (location.search) {
      const params = new URLSearchParams(location.search);
      const query = params.get("query");
      const color = params.get("color");
      const shape = params.get("shape");
      const size = params.get("size");

      const sharedFilters = {
        query: query ?? "",
        filters: {
          color: color?.split(",") ?? [],
          shape: shape?.split(",") ?? [],
          size: size?.split(",") ?? [],
        },
      };
      dispatch(updateFilters(sharedFilters));
    } else {
      dispatch(getPlanets());
    }
  }, []);

  React.useEffect(() => {
    dispatch(getPlanets(filters));
  }, [filters]);

  return (
    <Grid container alignItems="center" width="100%" height="100vh">
      <Grid container item direction="column" alignItems="center">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Search />
          <IconButton
            color="primary"
            sx={{
              width: "50px",
              position: "absolute",
              right: "10px",
              top: "10px",
            }}
            onClick={handleCopySharableLink}
          >
            <ShareIcon />
          </IconButton>
        </Box>
        <Grid container item height="85vh">
          <Grid item xs={3}>
            <Filters />
          </Grid>
          <Grid item xs={9} padding="20px">
            <Planets />
          </Grid>
        </Grid>
      </Grid>
      <Toaster />
    </Grid>
  );
};

export default App;
