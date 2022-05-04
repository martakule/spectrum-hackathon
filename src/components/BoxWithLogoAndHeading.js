import { Flex, Heading } from "@adobe/react-spectrum";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "../custom_styles.css";

export function BoxWithLogoAndHeading({ heading, children }) {
  return (
    <Flex height="100vh" alignItems="center">
      <Flex marginX={95}>
        <div className="container">
          <Flex
            marginX={24}
            marginY={40}
            direction="column"
            alignItems="center"
            padding={80}
          >
            <Logo
              width={151}
              title="League logo: on the left a stylized cross made of a purle L and mint squares; on the right the work League"
            />
            <Heading level={2}>{heading}</Heading>
            {children}
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
}
