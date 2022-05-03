import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link } from "@adobe/react-spectrum";
import { Button } from "@adobe/react-spectrum";

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
    <div>
      <header>Sign in to League</header>
      <input type="email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      {wrongPassword && <p>Wrong password yo!</p>}
      <Button variant="cta" onClick={handleClick}>
        Sign in
      </Button>
      <Link>
        <RouterLink to="/forgot-password">Forgot your password?</RouterLink>
      </Link>
      <p>--- OR ---</p>
      <Button variant="secondary">Sign in with Google</Button>
      <Button variant="secondary">Sign in with Apple</Button>
    </div>
  );
}

export default SignIn;
