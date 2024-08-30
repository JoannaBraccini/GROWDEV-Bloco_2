import { Container } from "./styles/Container";
import { Icon } from "./styles/Icon";

interface IconContent {
  imgSrc: string;
  imgAlt: string;
}

const iconsContent: IconContent[] = [
  {
    imgSrc: "../src/assets/icons/bootstrap-svgrepo-com.svg",
    imgAlt: "Bootstrap",
  },
  {
    imgSrc: "../src/assets/icons/css3-svgrepo-com.svg",
    imgAlt: "CSS",
  },
  {
    imgSrc: "../src/assets/icons/git-svgrepo-com.svg",
    imgAlt: "Git",
  },
  {
    imgSrc: "../src/assets/icons/github-color-svgrepo-com.svg",
    imgAlt: "GitHub",
  },
  {
    imgSrc: "../src/assets/icons/html-5-svgrepo-com.svg",
    imgAlt: "HTML",
  },
  {
    imgSrc: "../src/assets/icons/javascript-svgrepo-com.svg",
    imgAlt: "Javascript",
  },
  {
    imgSrc: "../src/assets/icons/node-js-svgrepo-com.svg",
    imgAlt: "Node JS",
  },
  {
    imgSrc: "../src/assets/icons/postman-icon-svgrepo-com.svg",
    imgAlt: "Postman",
  },
  {
    imgSrc: "../src/assets/icons/react-svgrepo-com.svg",
    imgAlt: "React",
  },
  {
    imgSrc: "../src/assets/icons/typescript-icon-svgrepo-com.svg",
    imgAlt: "Typescript",
  },
  {
    imgSrc: "../src/assets/icons/vercel-svgrepo-com.svg",
    imgAlt: "Vercel",
  },
];

export function Icons() {
  return (
    <Container margin="8rem auto">
      <Icon>
        {iconsContent.map((icon) => (
          <img src={icon.imgSrc} alt={icon.imgAlt} />
        ))}
      </Icon>
    </Container>
  );
}
