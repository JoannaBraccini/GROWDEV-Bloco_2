import { useNavigate } from "react-router-dom";
import { cards } from "../database/cards";
import { Avatar } from "./styles/Avatar";
import { Button } from "./styles/Button";
import { Card } from "./styles/Card";
import { Container } from "./styles/Container";

export function SectionCards() {
  const navigate = useNavigate(); //para navegar para outras páginas
  const handleClick = (title: string) => {
    navigate(`/search?query=${title}`); //enviar para page /search com a query da busca
  };

  return (
    <Container>
      {cards.map((card) => (
        <Card>
          <Avatar src={card.imgSrc} alt={card.imgAlt} />
          <h1>{card.title}</h1>
          <p>{card.description}</p>
          <Button onClick={() => handleClick(card.title)}>Buscar</Button>
        </Card>
      ))}
    </Container>
  );
}
