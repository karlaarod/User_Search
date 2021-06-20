import React from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { callApi } from "../../api";
import { Button, TextField } from "@material-ui/core";

const SearchForm = ({
  setSearchResults,
  queryString,
  setQueryString,
  setLoading,
}) => {
  const history = useHistory();

  const fetchSearchs = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await callApi({
      url: `search/users?q=${queryString}&per_page=50`,
    });
    setSearchResults(response);
    setLoading(false);
  };

  return (
    <div className="search-container">
      <div className="title">
        <SearchIcon />
        <h3>Search more than 72M users</h3>
      </div>
      <form onSubmit={fetchSearchs}>
        <TextField
          label="Search GitHub"
          value={queryString}
          onChange={(event) => {
            setQueryString(event.target.value);
          }}
        />
        <Button
          className="button-submit"
          color="primary"
          size="small"
          type="submit"
          variant="outlined"
          onClick={() => {
            history.push(`/search/users?q=${queryString}`);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
