import { IconBar } from "../components/IconBar";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Contact } from "../components/Contact";
import { Footer, FooterStyle } from "../components/Footer";

export function Home() {
  return (
    <>
      <Header>
        <h1>Minha primeira página com React!</h1>
      </Header>
      <IconBar />
      <Section flexDirection="row">
        <div>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat commodo
            auctor tempus vivamus turpis taciti. Litora mi integer fringilla
            pellentesque hac diam. Libero sollicitudin etiam etiam; ut eu dis
            class curae. Feugiat condimentum cras sapien ex semper posuere id
            convallis efficitur. Ridiculus vestibulum accumsan imperdiet turpis;
            eros pulvinar. Blandit conubia tempus dictumst donec vivamus.
            Imperdiet auctor vehicula vitae ante commodo imperdiet fringilla
            libero curabitur. Sed vehicula cubilia ad, est nibh blandit. Curae
            eget cursus scelerisque conubia faucibus neque ac. Fusce dignissim
            nascetur dui hac; lobortis hendrerit porta penatibus dis. Quis
            scelerisque donec; viverra senectus scelerisque litora. Anostra
            maecenas consequat; dapibus odio himenaeos. Integer risus malesuada
            est ridiculus varius nec. Arcu enim ullamcorper sed vel nec sed
            interdum. Ridiculus ac vulputate phasellus primis leo.
          </p>
        </div>
        <img src="../src/assets/image1.jpeg" alt="Image 1" />
      </Section>
      <Section flexDirection="row-reverse">
        <div>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat commodo
            auctor tempus vivamus turpis taciti. Litora mi integer fringilla
            pellentesque hac diam. Libero sollicitudin etiam etiam; ut eu dis
            class curae. Feugiat condimentum cras sapien ex semper posuere id
            convallis efficitur. Ridiculus vestibulum accumsan imperdiet turpis;
            eros pulvinar. Blandit conubia tempus dictumst donec vivamus.
            Imperdiet auctor vehicula vitae ante commodo imperdiet fringilla
            libero curabitur. Sed vehicula cubilia ad, est nibh blandit. Curae
            eget cursus scelerisque conubia faucibus neque ac. Fusce dignissim
            nascetur dui hac; lobortis hendrerit porta penatibus dis. Quis
            scelerisque donec; viverra senectus scelerisque litora. Anostra
            maecenas consequat; dapibus odio himenaeos. Integer risus malesuada
            est ridiculus varius nec. Arcu enim ullamcorper sed vel nec sed
            interdum. Ridiculus ac vulputate phasellus primis leo.
          </p>
        </div>
        <img src="../src/assets/image2.jpeg" alt="Image 2" />
      </Section>
      <Section flexDirection="row">
        <div>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat commodo
            auctor tempus vivamus turpis taciti. Litora mi integer fringilla
            pellentesque hac diam. Libero sollicitudin etiam etiam; ut eu dis
            class curae. Feugiat condimentum cras sapien ex semper posuere id
            convallis efficitur. Ridiculus vestibulum accumsan imperdiet turpis;
            eros pulvinar. Blandit conubia tempus dictumst donec vivamus.
            Imperdiet auctor vehicula vitae ante commodo imperdiet fringilla
            libero curabitur. Sed vehicula cubilia ad, est nibh blandit. Curae
            eget cursus scelerisque conubia faucibus neque ac. Fusce dignissim
            nascetur dui hac; lobortis hendrerit porta penatibus dis. Quis
            scelerisque donec; viverra senectus scelerisque litora. Anostra
            maecenas consequat; dapibus odio himenaeos. Integer risus malesuada
            est ridiculus varius nec. Arcu enim ullamcorper sed vel nec sed
            interdum. Ridiculus ac vulputate phasellus primis leo.
          </p>
        </div>
        <img src="../src/assets/image3.jpeg" alt="Image 3" />
      </Section>
      <Contact>
        <h2>Contato</h2>
      </Contact>
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </>
  );
}
/**
 * Banner: Título
 * div com icons
 *
 * 3 sessões de conteúdo (1 e 3- texto/imagem, 2- imagem/texto)
 *
 * Banner: Contato
 * about/contact/terms of use/ privacy policy
 * @....
 *
 * ícones redes sociais
 */
