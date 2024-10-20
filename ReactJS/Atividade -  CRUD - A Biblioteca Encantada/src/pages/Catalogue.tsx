import cataloguebanner from "../assets/backgrounds/cataloguebanner.webp";
import { TableContainer } from "../components/styles/TableContainer";
import { DefaultLayout } from "../configs/layouts/DefaultLayout";
import { Container } from "../components/styles/Container";
import { ModalDelete } from "../components/ModalDelete";
import { TableBooks } from "../components/TableBooks";
import { Button } from "../components/styles/Button";
import { books as booksDb } from "../database/books";
import { ModalForm } from "../components/ModalForm";
import { Banner } from "../components/Banner";
import { useEffect, useState } from "react";
import { Book } from "../types";

export function Catalogue() {
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterTitle, setFilterTitle] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  const [books, setBooks] = useState<Book[]>([]);
  const [bookId, setBookId] = useState<string>("");
  const [bookTitle, setBookTitle] = useState<string>("");
  const [bookToEdit, setBookToEdit] = useState<Book>();

  const [showModalForm, setShowModalForm] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const emptyBook: Book = {
    id: "",
    title: "",
    author: "",
    genre: "",
    synopsis: "",
    yearPublished: "",
    registerDate: new Date(),
  };

  // Carregar livros do database e do localStorage ao montar o componente
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    const parsedStoredBooks = storedBooks ? JSON.parse(storedBooks) : [];

    // Combinar os livros do database com os do localStorage
    const combinedBooks = [...booksDb, ...parsedStoredBooks];
    setBooks(combinedBooks);
  }, []);

  // Salvar os livros no localStorage
  const saveToLocalStorage = (updatedBooks: Book[]) => {
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const handleAddClick = () => {
    setBookToEdit(emptyBook);
    setShowModalForm(true);
  };

  const handleUpdateClick = (book: Book) => {
    if (book.id !== "") setBookToEdit(book);
    setShowModalForm(true);
  };

  // CRUD - Create+Update
  const updateBook = (updatedBook: Book) => {
    // Atualiza ou mantém os livros existentes
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    // Verifica se o livro atualizado já existe na lista
    const bookExists = books.some((book) => book.id === updatedBook.id);
    // Se o livro não existe, adiciona à lista
    if (!bookExists) {
      updatedBooks.unshift(updatedBook); // Adiciona o novo livro no início da lista
    } else {
      // Se o livro já existe, move para o início da lista
      const index = updatedBooks.findIndex(
        (book) => book.id === updatedBook.id
      );
      const [bookToMove] = updatedBooks.splice(index, 1); // Remove o livro da posição atual
      updatedBooks.unshift(bookToMove); // Adiciona no início da lista
    }
    // Atualiza o estado e salva no localStorage
    setBooks(updatedBooks);
    saveToLocalStorage(updatedBooks);
  };

  // CRUD - Delete
  const handleDeleteClick = (book: Book) => {
    setBookId(book.id);
    setBookTitle(book.title);
    setShowModalDelete(true);
  };

  const confirmDelete = () => {
    if (bookId) {
      deleteBook(bookId);
      setBookId("");
      setBookTitle("");
    }
    setShowModalDelete(false);
  };

  const deleteBook = (bookId: string) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => book.id !== bookId);
      saveToLocalStorage(updatedBooks); // Remover do localStorage
      return updatedBooks;
    });
  };

  const cancel = () => {
    setBookToEdit(undefined);
    setBookId("");
    setBookTitle("");
    setShowModalDelete(false);
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
          onConfirm={updateBook}
        />
        <ModalDelete
          isOpen={showModalDelete}
          onClose={cancel}
          onConfirm={confirmDelete}
          bookTitle={bookTitle || ""}
        />
      </TableContainer>
    </DefaultLayout>
  );
}
