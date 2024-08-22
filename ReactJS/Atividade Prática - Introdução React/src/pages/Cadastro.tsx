import { Link } from "react-router-dom";
import ButtonDefault from "../components/ButtonDefault";

export default function Cadastro() {
  return (
    <>
      <h1>CADASTRO</h1>

      <label htmlFor="">E-mail:</label>
      <input type="text" name="" id="" />

      <label htmlFor="">Senha:</label>
      <input type="text" name="" id="" />

      <label htmlFor="">Confirmar senha:</label>
      <input type="text" name="" id="" />

      <Link to="/">
        <ButtonDefault title="Salvar" />
      </Link>
      <Link to="/login">
        <ButtonDefault title="Já tem conta? Faça login" />
      </Link>
    </>
  );
}
