import React from "react";

export default function Landing({ username, onSignOut }) {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <button onClick={onSignOut}>Logout</button>
    </div>
  );
}
