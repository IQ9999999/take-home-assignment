import React from "react";

export default function Landing({ username, onSignOut }) {
  return (
    <div className="container">
      <h1>Welcome, {username}!</h1>
      <button onClick={onSignOut} className="button">
        Logout
      </button>
    </div>
  );
}
