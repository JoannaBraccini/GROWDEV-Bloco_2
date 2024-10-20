import { Book } from "./styles/Book";
import { ContainerBooks } from "./styles/ContainerBooks";

interface SectionBooksProps {
  books: {
    id: string;
    title: string;
    author: string;
    yearPublished: string;
    genre: string;
    synopsis: string;
    registerDate: Date;
  }[];
}

export function SectionBooks({ books }: SectionBooksProps) {
  return (
    <ContainerBooks>
      {/* ternário: se houver, exibir, senão, erro */}
      {books.length > 0 ? (
        books.map((book) => (
          <Book key={book.id}>
            <h1>{book.title}</h1>
            <h4>
              {book.author} - {book.yearPublished}
            </h4>
            <h5>{book.genre}</h5>
            <p>{book.synopsis}</p>
            <small>
              Adicionado em {book.registerDate.toLocaleDateString()}
            </small>
          </Book>
        ))
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </ContainerBooks>
  );
}
