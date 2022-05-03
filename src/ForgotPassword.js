import "./App.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="App">
      <header className="App-header">
        Forgot password
        <Link className="App-link" to="/">
          Back
        </Link>
      </header>
    </div>
  );
}

export default ForgotPassword;
