import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Cadastro from "../../pages/Cadastro";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/Cadastro", element: <Cadastro /> },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
