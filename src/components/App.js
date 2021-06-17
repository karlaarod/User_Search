import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { callApi } from "../api";
import './App.css';
import { UsersList } from ".";

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
const [usersData, setUsersData] = useState({})
const [loading, setLoading]= useState(false);

useEffect(async () =>{

  setLoading(true);
  const users= await fetchUsers();

  if(users){
    setLoading(false)
    setUsersData(users)
  }

}, [])

console.log('users list:', usersData)

  return (
    <div className="App">
      <h1>GitHub</h1>
      <UsersList
      usersData = {usersData}
      loading= {loading}
      />
    </div>
  );
}

export default App;
