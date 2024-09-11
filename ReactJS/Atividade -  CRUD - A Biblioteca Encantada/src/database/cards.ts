import { Card } from "../types/index";
import spring from "../assets/spring-book.svg";
import summer from "../assets/summer-book.svg";
import autumn from "../assets/autumn-book.svg";
import winter from "../assets/winter-book.svg";

export const cards: Card[] = [
  {
    imgSrc: spring,
    imgAlt: "Spring Book",
    title: "Fantasia",
    description:
      "Explore um mundo de magia e encantamento, onde criaturas fantásticas e heróis valentes enfrentam desafios épicos. Uma jornada cheia de mistérios e aventuras inesperadas que irão capturar sua imaginação.",
  },
  {
    imgSrc: summer,
    imgAlt: "Summer Book",
    title: "Aventura",
    description:
      "Acompanhe personagens audaciosos em suas viagens emocionantes através de terras desconhecidas. Cada página é uma nova experiência repleta de ação, desafios incríveis e descobertas surpreendentes.",
  },
  {
    imgSrc: autumn,
    imgAlt: "Autumn Book",
    title: "Ação",
    description:
      "Vivencie momentos de intensa emoção e adrenalina. Com batalhas épicas e perseguições eletrizantes, este livro mantém você na ponta da cadeira com sua narrativa dinâmica e repleta de suspense.",
  },
  {
    imgSrc: winter,
    imgAlt: "Winter Book",
    title: "Ficção",
    description:
      "Mergulhe em universos alternativos e cenários futurísticos. Este livro de ficção científica leva você a novas dimensões e realidades, explorando conceitos inovadores e histórias intrigantes que desafiam a imaginação.",
  },
];
