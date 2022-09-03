export const getURL = (filters) => {
  if (
    !filters ||
    (!filters.hasOwnProperty("query") && !filters.hasOwnProperty("filters"))
  ) {
    return "http://localhost:3000/planets";
  }

  let filterParams = [];

  if (filters.hasOwnProperty("query") && !!filters.query) {
    filterParams.push(`q=${filters.query}`);
  }

  if (filters.hasOwnProperty("filters")) {
    const filterKeys = Object.keys(filters.filters);
    filterKeys.forEach((key) => {
      if (!!filters.filters[key].length) {
        filters.filters[key].forEach((item) =>
          filterParams.push(`${key}=${item}`)
        );
      }
    });
  }

  if (!filterParams.length) {
    return "http://localhost:3000/planets";
  }

  const params = filterParams.join("&");

  return `http://localhost:3000/planets?${params}`;
};

export const getSharableURL = (filters) => {
  const baseURL = "http://127.0.0.1:12500/";
  if (
    !filters ||
    (!filters.hasOwnProperty("query") && !filters.hasOwnProperty("filters"))
  ) {
    return baseURL;
  }

  let filterParams = [];

  if (filters.hasOwnProperty("query") && !!filters.query) {
    filterParams.push(`query=${filters.query}`);
  }

  if (filters.hasOwnProperty("filters")) {
    const filterKeys = Object.keys(filters.filters);
    filterKeys.forEach((key) => {
      if (!!filters.filters[key].length) {
        filterParams.push(`${key}=${filters.filters[key].join(",")}`);
      }
    });
  }

  if (!filterParams.length) {
    return baseURL;
  }

  const params = filterParams.join("&");

  return `${baseURL}?${params}`;
};
