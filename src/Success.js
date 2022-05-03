import "./App.css";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="App">
      <header className="App-header">
        Success!
        <Link className="App-link" to="/">
          Log out
        </Link>
      </header>
    </div>
  );
}

export default Success;
