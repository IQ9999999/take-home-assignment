import React, { useState } from "react";

export default function Registration({ onRegister }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    onRegister(username, password);
  }

  return (
    <div>
      <h1>Registration</h1>
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
        <input type="submit" value="Register" className="button" />
      </form>
    </div>
  );
}
