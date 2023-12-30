import { useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage]= useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
        setMessage(`Welcome, ${username}!`)
    } else {
      setMessage("Invalid username or password");
    
    }
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" id="username">
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
            placeholder="username"
            required
          />
          <br />
          <label htmlFor="password" id="password">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            required
            name="password"
            placeholder="password"
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
    {message && <p>{message}</p>}
    </div>
  );
}
