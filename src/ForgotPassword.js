import { useNavigate } from "react-router-dom";
import {
  Content,
  Form,
  TextField,
  ButtonGroup,
  Button,
} from "@adobe/react-spectrum";
import { BoxWithLogoAndHeading } from "./components/BoxWithLogoAndHeading";

/*
According to documentation, this should work:
<Button variant="primary" elementType={Link} to="/">
  Back
</Button>

https://react-spectrum.adobe.com/react-spectrum/Button.html#props

elementType: The HTML element or React element used to render the button, e.g. 'div', 'a', or RouterLink.

However, router throws an error that "to" is undefined.
*/

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <BoxWithLogoAndHeading heading="Forgot yout password?">
      <Content marginBottom={16}>
        To reset your password, please enter the email address associated with
        your League account
      </Content>
      <Form width="100%">
        <TextField placeholder="*Enter your email address" />
        <ButtonGroup align="center" marginTop={24} width="100%">
          <Button flexGrow={1} variant="primary" onClick={() => navigate("/")}>
            Back
          </Button>
          <Button flexGrow={1} variant="cta">
            Sign In
          </Button>
        </ButtonGroup>
      </Form>
    </BoxWithLogoAndHeading>
  );
}

export default ForgotPassword;
