import { SearchBar } from "./SearchBar";
import { Divider } from "./styles/Divider";
import { MainBanner } from "./styles/MainBanner";
import { Title } from "./styles/Title";

interface BannerProps {
  background: string;
  title: string;
  subtitle?: string;
  onSearch?: (query: string) => void; //barra de pesquisa opcional
}

export function Banner({ background, title, subtitle, onSearch }: BannerProps) {
  return (
    <>
      <MainBanner background={background}>
        <Title fontSize="80px">{title}</Title>
        {/* && -> se sim, exiba, se não, ignore */}
        {subtitle && <p>{subtitle}</p>}
        {onSearch && <SearchBar onSearch={onSearch} />}
      </MainBanner>
      <Divider />
    </>
  );
}
