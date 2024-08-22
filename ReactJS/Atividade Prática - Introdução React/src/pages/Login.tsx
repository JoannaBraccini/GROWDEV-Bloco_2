import { Link } from "react-router-dom";
import ButtonDefault from "../components/ButtonDefault";

export default function Login() {
  return (
    <>
      <h1>LOGIN</h1>

      <label htmlFor="">E-mail:</label>
      <input type="text" name="" id="" />

      <label htmlFor="">Senha:</label>
      <input type="text" name="" id="" />

      <Link to="/">
        <ButtonDefault title="Entrar" />
      </Link>
      <Link to="/cadastro">
        <ButtonDefault title="Cadastre-se" />
      </Link>
    </>
  );
}
