import { Banner } from "../components/Banner";
import { SectionCards } from "../components/SectionCards";
import { DefaultLayout } from "../configs/layouts/DefaultLayout";
import homebanner from "../assets/backgrounds/homebanner.webp";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const handleSearch = (query: string) => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <DefaultLayout>
      <Banner
        background={homebanner}
        title="A Biblioteca Encantada"
        subtitle="Entre as páginas de um livro, encontramos mundos inteiros esperando para serem explorados."
        onSearch={handleSearch}
      />
      <SectionCards />
    </DefaultLayout>
  );
}

/**
 * 1. adicionar novos livros à coleção
 * CAMPOS: id, título, autor, ano de publicação, data de cadastro, gênero, sinopse
 * Todos os campos são obrigatórios
 * Deve haver validação para garantir que o ano de publicação não seja no futuro
 *
 * 2. Editar informações dos livros existentes
 * CAMPOS: os mesmos da adição
 * Não deve ser possível alterar data de cadastro e Id
 *
 * 3. Excluir livros que não estão mais na biblioteca
 * Deve haver confirmação antes de excluir, garantia de não excluir por engano
 *
 * 4. Vizualizar todos os livros da coleção
 * Deve haver uma lista ou grade mostrando todos os livros
 * Cada livro deve mostrar Título, Autor e Ano de publicação
 * Deve haver uma opção para ver mais detalhes, que mostrará todas as informações do livro
 *
 * BÔNUS:
 * Estilizar: usar esilos que reflitam a mágica e o encanto de Livrópolis, usando cores suaves, fontes elegantes e ícones relacionados a livros
 *
 * Pesquisa: implementar uma funcionalidade de pesquisa para encontrar livro específico por título ou autor
 */
