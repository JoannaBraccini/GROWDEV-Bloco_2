import { Cards } from "./Cards";
import { Container } from "./styles/Container";
import { FlipCard } from "./styles/FlipCard";
import { Title } from "./styles/Title";

export function Gallery() {
  return (
    <Container>
      <Title>PORTFOLIO</Title>
      <FlipCard>
        <Cards />
      </FlipCard>
    </Container>
  );
}
