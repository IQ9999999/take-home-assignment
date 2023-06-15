import React, { useState } from "react";
import Registration from "./Register";
import Login from "./Login";
import Landing from "./Landing";

export default function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [view, setView] = useState("register");

  function handleRegister(inputUsername, inputPassword) {
    setUsername(inputUsername);
    setPassword(inputPassword);
    setIsLoggedIn(true);
    setError(null);
  }

  function handleSignIn(inputUsername, inputPassword) {
    if (username !== inputUsername || password !== inputPassword) {
      setError("Invalid username or password");
      return;
    }
    setIsLoggedIn(true);
    setError(null);
  }

  function handleSignOut() {
    setIsLoggedIn(false);
  }

  function toggleView() {
    setView(view === "register" ? "login" : "register");
    setError(null);
  }

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Please {view === "register" ? "Register" : "Sign In"}</h1>
        {error && <p>{error}</p>}
        {view === "register" ? <Registration onRegister={handleRegister} /> : <Login onSignIn={handleSignIn} />}
        <br />
        <button onClick={toggleView}>Switch to {view === "register" ? "Sign In" : "Register"}</button>
      </div>
    );
  }

  return <Landing username={username} onSignOut={handleSignOut} />;
}
