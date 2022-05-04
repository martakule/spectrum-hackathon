import { BoxWithLogoAndHeading } from "./components/BoxWithLogoAndHeading";
import { ReactComponent as GreenCheckmark } from "./assets/checkmark.svg";

function Success() {
  return (
    <BoxWithLogoAndHeading heading="Signed in!">
      <GreenCheckmark
        width={103}
        title="Green circle with a white checkmark inside"
      />
    </BoxWithLogoAndHeading>
  );
}

export default Success;
