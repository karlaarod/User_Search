import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { callApi } from "../api";
import {SearchForm, SearchList} from ".";
import Loading from "./Loading";
import NavBar from "./NavBar";

const fetchUsers= async()=>{

 try{ 
   const data = await callApi({
    url: 'users?q=example',
  })
  return data 
} catch (error){
  console.error(error)
}

}

function App() {
const [queryString, setQueryString] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [searchResults, setSearchResults] = useState ({});
const [loading, setLoading]= useState(false);

// useEffect(async () =>{

//   setLoading(true);
//   const users= await fetchUsers();

//   if(users){
//     setLoading(false)
//     setUsersData(users)
//   }

// }, [])


  return (
    <div className="App">
      <NavBar/>
      <SearchForm
      setSearchResults ={setSearchResults}
      queryString = {queryString}
      setQueryString = {setQueryString}
      setLoading= {setLoading}
      />
      <Route exact path= {`/search/users`}>
        <SearchList
        searchResults ={searchResults}
        setSearchResults ={setSearchResults}
        queryString = {queryString}
        setLoading= {setLoading}
        />
      </Route>
      { loading ? <Loading/> : null }

    </div>
  );
}

export default App;
