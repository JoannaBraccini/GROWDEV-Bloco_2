import { FlipCard } from "./styles/FlipCard";

interface CardContent {
  imgSrc: string;
  title: string;
  description: string;
}

const cardsContent: CardContent[] = [
  {
    imgSrc: "../src/assets/images/portfolio/image1.webp",
    title: "Title",
    description:
      "Slick, mordern, layout, ui/ux design, ux research, project-based learning, wireframe background black, yellow accent, classroom, shadow --stylish 700",
  },
  {
    imgSrc: "../src/assets/images/portfolio/image2.webp",
    title: "Title",
    description:
      "Website portfolio-design digital animation graphics, colors black hot pink yellow, interactive installations",
  },
  {
    imgSrc: "../src/assets/images/portfolio/image3.webp",
    title: "Title",
    description: "Powerpoint slides with text, images, and videos.",
  },
  {
    imgSrc: "../src/assets/images/portfolio/image4.webp",
    title: "Title",
    description:
      "Portfolio website sophisticated, modern, adobe photoshop, professional, simple navigation, visually appealing layout, high quality graphics, i want principal search, light-colored",
  },
  {
    imgSrc: "../src/assets/images/portfolio/image5.webp",
    title: "Title",
    description:
      "Website design for blue m animations - blue, white, orange. cartoons, 3d models, assets",
  },
  {
    imgSrc: "../src/assets/images/portfolio/image6.webp",
    title: "Title",
    description:
      "Portfolio website design, cg digital profiles design, corporate style but bold, colors black hot pink yellow",
  },
  {
    imgSrc: "../src/assets/images/portfolio/image7.webp",
    title: "Title",
    description: "Design ui/ux ecommerce multistore",
  },
  {
    imgSrc: "../src/assets/images/portfolio/image8.webp",
    title: "Title",
    description:
      "Https//lapieza, do redesign the front end resembling the design elements of https//walmart, com or https//walmart",
  },
  {
    imgSrc: "../src/assets/images/portfolio/image9.webp",
    title: "Title",
    description:
      "Simple, clean, modern software development consulting company website - in dark teal with orange accent",
  },
];

export function Cards() {
  return (
    <FlipCard>
      {cardsContent.map((card) => (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={card.imgSrc} alt="project image" />
            </div>
            <div className="flip-card-back">
              <h1>{card.title}</h1>
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </FlipCard>
  );
}
