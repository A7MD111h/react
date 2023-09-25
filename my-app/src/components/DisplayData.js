import React from "react";

const DisplayData = ({ userData }) => {
  return (
    <div>
      <h2>Entered Data</h2>
      <p>Username: {userData.username}</p>
      <p>Password: {userData.password}</p>
    </div>
  );
};

export default DisplayData;
