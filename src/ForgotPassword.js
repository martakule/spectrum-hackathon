import { useNavigate } from "react-router-dom";
import { Button } from "@adobe/react-spectrum";

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
    <div>
      <header>Forgot yout password ?</header>
      <p>
        To reset your password, please enter the email address associated with
        your League account
      </p>
      <input type="text" placeholder="*Enter your email address" />
      <Button variant="primary" onClick={() => navigate("/")}>
        Back
      </Button>
      <Button variant="cta">Submit</Button>
    </div>
  );
}

export default ForgotPassword;
