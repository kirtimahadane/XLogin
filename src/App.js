import { useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p> Welcome,{username}!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
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
      )}
    </div>
  );
}
