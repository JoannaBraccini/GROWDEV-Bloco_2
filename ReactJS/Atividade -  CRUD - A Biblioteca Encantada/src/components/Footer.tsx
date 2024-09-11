import { Link } from "react-router-dom";
import { FooterStyle } from "./styles/FooterStyle";
import library from "../assets/library.svg";
import openBook from "../assets/open-book.svg";
import peopleBook from "../assets/people-book.svg";

const links = [
  {
    img: peopleBook,
    alt: "Dona Clara",
    to: "#Dona Clara",
  },
  {
    img: library,
    alt: "Livrópolis",
    to: "#Livrópolis",
  },
  {
    img: openBook,
    alt: "Nossa Biblioteca",
    to: "#Nossa Biblioteca",
  },
];

export function Footer() {
  return (
    <>
      <FooterStyle>
        <p>&copy; 2024 - A Biblioteca Encantada</p>
        <nav>
          {links.map((link) => {
            return (
              <Link to={link.to}>
                <img src={link.img} alt={link.alt} />
              </Link>
            );
          })}
        </nav>
      </FooterStyle>
    </>
  );
}
