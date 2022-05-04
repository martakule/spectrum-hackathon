import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Link,
  Form,
  TextField,
  Flex,
  Button,
  Text,
} from "@adobe/react-spectrum";
import "./custom_styles.css";
import { BoxWithLogoAndHeading } from "./components/BoxWithLogoAndHeading";
import { ReactComponent as GoogleLogo } from "./assets/google_logo.svg";
import { ReactComponent as AppleLogo } from "./assets/apple_logo.svg";

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
    <BoxWithLogoAndHeading heading="Sign in to League">
      <Form width="100%">
        <TextField
          aria-label="email"
          type="email"
          inputMode="email"
          placeholder="Enter your email address"
        />
        <TextField
          aria-label="password"
          type="password"
          placeholder="Enter your password"
          onChange={(value) => setPassword(value)}
          marginBottom={16}
        />
        {wrongPassword && (
          <p className="red">
            The email or password you entered is incorrect. If you don’t
            remember your password use the “Forgot Password?” link or contact{" "}
            <Link mailto="help@league.com">help@league.com</Link> for additional
            support.
          </p>
        )}
        <Button variant="cta" onClick={handleClick} marginBottom={24}>
          Sign in
        </Button>
      </Form>
      <Link>
        <RouterLink to="/forgot-password">Forgot your password?</RouterLink>
      </Link>
      <p>--- OR ---</p>
      <Button variant="primary" width="100%" marginBottom={16}>
        <Flex justifyContent="center">
          <GoogleLogo width={16} title="Google logo icon" />
          <Text marginStart={8}>Sign in with Google</Text>
        </Flex>
      </Button>
      <Button variant="primary" width="100%">
        <Flex justifyContent="center">
          <AppleLogo width={16} title="Apple logo icon" />
          <Text marginStart={8}>Sign in with Apple</Text>
        </Flex>
      </Button>
    </BoxWithLogoAndHeading>
  );
}

export default SignIn;
