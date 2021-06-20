import React, { useState } from "react";
import { Route } from "react-router-dom";
import { SearchForm, SearchList } from ".";
import Loading from "./Loading";
import NavBar from "./NavBar";

function App() {
  const [queryString, setQueryString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Route path="/">
        <SearchForm
          setSearchResults={setSearchResults}
          queryString={queryString}
          setQueryString={setQueryString}
          setLoading={setLoading}
        />
      </Route>
      <Route exact path={`/search/users`}>
        <SearchList
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          queryString={queryString}
          setLoading={setLoading}
        />
      </Route>
      {loading ? <Loading /> : null}
    </div>
  );
}

export default App;
