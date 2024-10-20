import cataloguebanner from "../assets/backgrounds/cataloguebanner.webp";
import { TableContainer } from "../components/styles/TableContainer";
import { DefaultLayout } from "../configs/layouts/DefaultLayout";
import { Container } from "../components/styles/Container";
import { ModalExclude } from "../components/ModalDelete";
import { TableBooks } from "../components/TableBooks";
import { Button } from "../components/styles/Button";
import { books as booksDb } from "../database/books";
import { ModalForm } from "../components/ModalForm";
import { Banner } from "../components/Banner";
import { useState } from "react";
import { Book } from "../types";

export function Catalogue() {
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterTitle, setFilterTitle] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  const [books, setBooks] = useState<Book[]>(booksDb);
  const [bookId, setBookId] = useState<string>("");
  const [bookTitle, setBookTitle] = useState<string>("");
  const [bookToEdit, setBookToEdit] = useState<Book>();

  const [showModalForm, setShowModalForm] = useState(false);
  const [showModalExclude, setShowModalExclude] = useState(false);

  const emptyBook: Book = {
    id: "",
    title: "",
    author: "",
    genre: "",
    synopsis: "",
    yearPublished: "",
    registerDate: "",
  };

  //crud create
  const handleAddClick = () => {
    setBookToEdit(emptyBook);
    setShowModalForm(true);
  };

  const addBook = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  //crud update
  const handleUpdateClick = (book: Book) => {
    if (book.id !== "") setBookToEdit(book);
    setShowModalForm(true);
  };

  const updateBook = (book: Book) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === book.id ? book : b))
    );
  };

  //crud delete
  const handleDeleteClick = (book: Book) => {
    setBookId(book.id);
    setBookTitle(book.title);
    setShowModalExclude(true);
  };

  const confirmDelete = () => {
    if (bookId) {
      deleteBook(bookId);
      setBookId("");
      setBookTitle("");
    }
    setShowModalExclude(false);
  };

  const deleteBook = (bookId: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const cancel = () => {
    setBookToEdit(undefined);
    setBookId("");
    setBookTitle("");
    setShowModalExclude(false);
    setShowModalForm(false);
  };

  return (
    <DefaultLayout>
      <Banner
        background={cataloguebanner}
        title="Nosso Catálogo"
        subtitle="Entre as páginas de um livro, encontramos mundos inteiros esperando para serem explorados."
      />
      <TableContainer>
        <Container gap="20px">
          <Button size="small" variant="dark" onClick={handleAddClick}>
            Novo Livro
          </Button>
          <input
            type="text"
            placeholder="Filtrar por autor"
            value={filterAuthor}
            onChange={(e) => setFilterAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filtrar por título"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filtrar por gênero"
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
          />
        </Container>
        <TableBooks
          books={books}
          onUpdate={handleUpdateClick}
          onDelete={handleDeleteClick}
          filterAuthor={filterAuthor}
          filterTitle={filterTitle}
          filterGenre={filterGenre}
        />
        <ModalForm
          isOpen={showModalForm}
          book={bookToEdit ? bookToEdit : emptyBook}
          onClose={cancel}
          onConfirm={bookToEdit?.id !== "" ? updateBook : addBook}
        />
        <ModalExclude
          isOpen={showModalExclude}
          onClose={cancel}
          onConfirm={confirmDelete}
          bookTitle={bookTitle || ""}
        />
      </TableContainer>
    </DefaultLayout>
  );
}
