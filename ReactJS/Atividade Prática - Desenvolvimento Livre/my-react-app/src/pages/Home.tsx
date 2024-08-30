import { Link } from "react-router-dom";
import { DefaultButton } from "../components/styles/DefaultButton";
import { HeaderStyle } from "../components/styles/HeaderStyle";
import { Gallery } from "../components/Gallery";
import { Container } from "../components/styles/Container";

export function Home() {
  return (
    <Container>
      <HeaderStyle>
        <h1>Joanna Braccini</h1>
        <div>
          <Link to={"/about"}>
            <DefaultButton>About Me</DefaultButton>
          </Link>
          <Link to={"/"}>
            <DefaultButton>Exit</DefaultButton>
          </Link>
        </div>
      </HeaderStyle>
      <Gallery />
      <a href="https://lexica.art/" target="blank">
        <DefaultButton margin="0 0 2rem 0">More Info</DefaultButton>
      </a>
    </Container>
  );
}
