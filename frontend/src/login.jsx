import React, { useState } from "react";

export default function Login({ onSignIn }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    onSignIn(username, password);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
