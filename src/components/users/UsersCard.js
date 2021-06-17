import React from "react";

const UsersCard = ({ login, avatar_url }) => {
  return (
    <div className="single-user">
      <img src={avatar_url} />
      <h2>{login}</h2>
    </div>
  );
};

export default UsersCard;
