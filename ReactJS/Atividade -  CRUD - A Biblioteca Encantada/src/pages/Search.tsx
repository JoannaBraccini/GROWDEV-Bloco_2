import { DefaultLayout } from "../configs/layouts/DefaultLayout";
import searchbanner from "../assets/backgrounds/searchbanner.webp";
import { Banner } from "../components/Banner";
import { useLocation } from "react-router-dom";
import { books } from "../database/books";
import { SectionBooks } from "../components/SectionBooks";
//crud read
// Função para buscar livros com base no termo de pesquisa
const searchBooks = (query: string) => {
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.yearPublished.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.toLowerCase().includes(query.toLowerCase())
  );
};

export function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query") || "";

  const results = searchBooks(searchTerm);

  return (
    <DefaultLayout>
      <Banner
        background={searchbanner}
        title="Resultado da sua Busca:"
        subtitle={`Termo pesquisado: "${searchTerm}"`}
      />
      <SectionBooks books={results} />
    </DefaultLayout>
  );
}
