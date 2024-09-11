import { useNavigate } from "react-router-dom";
import { Book } from "../types/index";
import { Button } from "./styles/Button";
import { TableContainer } from "./styles/TableContainer";

interface TableBooksProps {
  books: Book[];
  //para filtrar
  filterAuthor: string;
  filterTitle: string;
  filterGenre: string;
  //crud update e delete
  onUpdate: (book: Book) => void;
  onDelete: (book: Book) => void;
}
//tabela dos itens filtrados
export function TableBooks({
  books,
  filterAuthor,
  filterTitle,
  filterGenre,
  onUpdate,
  onDelete,
}: TableBooksProps) {
  const navigate = useNavigate();

  //critérios de filtro
  const filteredBooks = books.filter(
    (book) =>
      book.author.toLowerCase().includes(filterAuthor.toLowerCase()) &&
      book.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      book.genre.toLowerCase().includes(filterGenre.toLowerCase())
  );

  const handleViewBook = (bookTitle: string) => {
    navigate(`/search?query=${encodeURIComponent(bookTitle)}`);
  };

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Publicação</th>
            <th>Gênero</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.yearPublished}</td>
              <td>{book.genre}</td>
              <td className="buttons">
                <Button size="small" onClick={() => handleViewBook(book.title)}>
                  Sinopse
                </Button>
                <Button
                  size="small"
                  variant="dark"
                  onClick={() => onUpdate(book)}
                >
                  Editar
                </Button>
                <Button
                  size="small"
                  variant="error"
                  onClick={() => onDelete(book)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
