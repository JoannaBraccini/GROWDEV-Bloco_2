import { Link } from "react-router-dom";
import { Navigation } from "../configs/navigations/types";
import logo from "../assets/logo.svg";
import { Header } from "./styles/Header";

interface NavBarProps {
  navigations: Navigation[];
}

export function NavBar({ navigations }: NavBarProps) {
  return (
    <Header>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo Biblioteca Encantada" />
        </Link>
        <h1>A Biblioteca Encantada</h1>
      </div>
      <nav>
        {navigations.map((nav) => {
          return <Link to={nav.to}>{nav.title}</Link>;
        })}
      </nav>
    </Header>
  );
}
