import { Link } from "react-router-dom";
import { Container } from "../components/styles/Container";
import { Title } from "../components/styles/Title";
import { DefaultButton } from "../components/styles/DefaultButton";

export function Error() {
  return (
    <Container>
      <Title>Oops! Page not found!</Title>
      <Link to={"/"}>
        <DefaultButton>Back to Login</DefaultButton>
      </Link>
    </Container>
  );
}
