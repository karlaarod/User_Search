import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { callApi } from "../../api";
import './pagination.css'

const PaginationCount = ({ searchResults, setSearchResults, queryString }) => {
  const [totalResults, setTotalResults] = useState(searchResults.length);
  const [postsPerPage, setPostsPerPage] = useState(searchResults.items.length);
//   const [currentPage, setCurrentPage] = useState(1);

  let currentPage= 1
  const handleChange = (event, value) => {
    console.log("handle change value: ", value);
    currentPage= value;
  };

  const pageCount = Math.ceil(searchResults.total_count / postsPerPage);


  const fetchPage = async () => {

    try {
      const results = await callApi({
        url: `search/users?q=${queryString}&per_page=100&page=${currentPage}`,
      });
      setSearchResults(results);
      console.log("results from fetch page", results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='list-header'>
    <h3>Search Results: {searchResults.total_count}</h3>

      <Pagination
        count={pageCount}
        color="primary"
        onClick={fetchPage}
        onChange={handleChange}
        className='pagination'

      />
    </div>
  );
};

export default PaginationCount;
