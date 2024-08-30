import { FooterStyle } from "./styles/FooterStyle";
import { Icon } from "./styles/Icon";

export function Footer() {
  return (
    <FooterStyle>
      <h1>Contact</h1>
      <Icon>
        <a href="https://instagram.com/joannabraccini" target="blank">
          <img
            src="../src/assets/icons/instagram-svgrepo-com.svg"
            alt="Instagram"
          />
        </a>
        <a href="https://www.linkedin.com/in/joannabraccini" target="blank">
          <img
            src="../src/assets/icons/linkedin-1-svgrepo-com.svg"
            alt="LinkedIn"
          />
        </a>
        <a href="https://www.github.com/joannabraccini" target="blank">
          <img
            src="../src/assets/icons/github-color-svgrepo-com.svg"
            alt="GitHub"
          />
        </a>
      </Icon>
    </FooterStyle>
  );
}
