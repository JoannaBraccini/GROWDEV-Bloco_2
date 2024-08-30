import { Link } from "react-router-dom";
import { Container } from "./styles/Container";
import { DefaultButton } from "./styles/DefaultButton";
import { DefaultForm } from "./styles/DefaultForm";

export function LoginForm() {
  return (
    <Container>
      <DefaultForm>
        <label htmlFor="email">E-mail:</label>
        <input type="text" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" />
        <div>
          <Link to={"/home"}>
            <DefaultButton>Login</DefaultButton>
          </Link>
          <Link to={"/home"}>
            <DefaultButton>Signup</DefaultButton>
          </Link>
        </div>
      </DefaultForm>
    </Container>
  );
}
