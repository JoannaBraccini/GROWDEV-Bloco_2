import { Link } from "react-router-dom";
import ListaMercado from "../components/ListaMercado";
import ButtonDefault from "../components/ButtonDefault";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Lista de compras</h1>
        <ListaMercado />
      </div>
      <Link to="/login">
        <ButtonDefault title="Sair" />
      </Link>
    </>
  );
}
