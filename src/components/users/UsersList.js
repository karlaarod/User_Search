import React from "react";
import UsersCard from "./UsersCard";
import { CircularProgress } from "@material-ui/core";
import './users.css'

const UsersList = ({ usersData, loading }) => {
  const { items } = usersData;

  if (loading) {
    return <CircularProgress className="loading-icon" />;
  }

  if (!items) {
    return <div></div>;
  }

  return (
    <div>
      {usersData
        ? items.map((item, index) => (
            <UsersCard
              key={index}
              avatar_url={item.avatar_url}
              login={item.login}
            />
          ))
        : ""}
    </div>
  );
};

export default UsersList;
