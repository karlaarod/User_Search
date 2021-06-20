import React, { useState, useEffect } from "react";
import "./search.css";
import PaginationCount from "../pagination/Pagination";
import { callApi } from "../../api";

const SearchList = ({
  searchResults,
  setSearchResults,
  queryString,
  setLoading,
}) => {
  const { items } = searchResults;
  const [usersData, setUsersData] = useState([]);


  //map over all search results to call api to retrive users data info(e.g. followers, bio etc.). 

  useEffect(async () => {
    setLoading(true);

    const userURL = items
      ? await items.map(async (item) => {
          const data = await callApi({
            url: `users/${item.login}`,
          });

          return data;

        })
      : "";

    const userData = await Promise.all(userURL);

    setUsersData(userData);
    setLoading(false);
  }, [searchResults]);


  if (!items) {
    return <div></div>;
  }
  return (
    <div className="results-container">
      <PaginationCount
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        queryString={queryString}
      />
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="each-user">
            <header className="results-header">
              <img src={item.avatar_url} className="user-img" />
              <a href={item.html_url}>{item.login}</a>
            </header>
            {usersData.map((user, i) => {
              if (user.login === item.login) {
                return (
                  <main key={i} className="results-details">
                    <h5>Followers: {user.followers}</h5>
                    <h5>Following: {user.following}</h5>
                    <p className="user-bio">{user.bio}</p>
                    <p className="user-location">{user.location}</p>
                  </main>
                );
              }
            })}
          </div>
        ))
      ) : (
        <h1>No Users to Display</h1>
      )}
    </div>
  );
};

export default SearchList;
