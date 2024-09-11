import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "../../components/styles/Button";
import { Title } from "../../components/styles/Title";
import { Catalogue } from "../../pages/Catalogue";
import { Search } from "../../pages/Search";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <>
        <Title>Opa, caminho errado! Melhor voltar...</Title>
        <Button>Início</Button>
      </>
    ),
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
