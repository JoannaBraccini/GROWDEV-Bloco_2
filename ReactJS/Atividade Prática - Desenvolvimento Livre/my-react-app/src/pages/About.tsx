import { Link } from "react-router-dom";
import { HeaderStyle } from "../components/styles/HeaderStyle";
import { DefaultButton } from "../components/styles/DefaultButton";
import { Footer } from "../components/Footer";
import { AboutMe } from "../components/AboutMe";
import { Container } from "../components/styles/Container";

export function About() {
  return (
    <Container>
      <HeaderStyle>
        <h1>Joanna Braccini</h1>
        <div>
          <Link to={"/home"}>
            <DefaultButton>Porfolio</DefaultButton>
          </Link>
          <Link to={"/"}>
            <DefaultButton>Exit</DefaultButton>
          </Link>
        </div>
      </HeaderStyle>
      <AboutMe />
      <Footer />
    </Container>
  );
}
