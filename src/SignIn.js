import { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

const CORRECT_PASSWORD = "123";

function SignIn() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleClick = () => {
    if (password === CORRECT_PASSWORD) navigate("/success");
    else setWrongPassword(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        Log in
        <form>
          <input type="email" />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {wrongPassword && <p>Wrong password yo!</p>}
          <button type="button" onClick={handleClick}>
            Sign in
          </button>
        </form>
        <Link className="App-link" to="/forgot-password">
          Forgot password?
        </Link>
      </header>
    </div>
  );
}

export default SignIn;
