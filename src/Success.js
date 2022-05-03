import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <header>Signed in!</header>
      <Link to="/">Log out</Link>
    </div>
  );
}

export default Success;
