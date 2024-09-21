import cataloguebanner from "../assets/backgrounds/cataloguebanner.webp";
import { TableContainer } from "../components/styles/TableContainer";
import { DefaultLayout } from "../configs/layouts/DefaultLayout";
import { Container } from "../components/styles/Container";
import { ModalDelete } from "../components/ModalDelete";
import { TableBooks } from "../components/TableBooks";
import { Button } from "../components/styles/Button";
import { books as booksDb } from "../database/books";
import { Banner } from "../components/Banner";
import { useState } from "react";
import { Book, Toast } from "../types";
import { ModalForm } from "../components/ModalForm";
import { ToastDisplay } from "../components/ToastDisplay";
import { FloatButton } from "../components/styles/FloatButton";

const emptyToast: Toast = {
  type: "success",
  duration: 3000,
  message: "",
};

export function Catalogue() {
  //filtros
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterTitle, setFilterTitle] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  //database
  const [books, setBooks] = useState<Book[]>(booksDb);

  const [bookId, setBookId] = useState<string>("");
  const [bookTitle, setBookTitle] = useState<string>("");
  const [bookToEdit, setBookToEdit] = useState<Book | null>(null);
  //modais
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //toast
  const [toastProps, setToastProps] = useState<Toast>(emptyToast);
  const [showToast, setShowToast] = useState(false);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  function handleModal() {
    setOpenModal(!openModal);
  }
  //crud create
  const handleAdd = (newBook: Book) => {
    setBooks((prevState) => [...prevState, newBook]);
    console.log(newBook);

    setToastProps({
      message: "Livro registrado com sucesso",
      duration: 3000,
      type: "success",
    });

    setShowToast(!showToast);
    handleModal();
  };

  //crud update
  const handleUpdateClick = (id: string) => {
    console.log("ATUALIZANDO....  =>", id);
  };

  const handleUpdate = (book: Book) => {
    setBooks((prevState) => [...prevState, book]);

    setToastProps({
      message: "Livro atualizado com sucesso",
      duration: 3000,
      type: "success",
    });

    setShowToast(!showToast);
    handleModal();
  };

  //crud delete
  function handleModalDelete() {
    setOpenModalDelete(!openModalDelete);
  }

  const handleDeleteClick = (book: Book) => {
    if (book.id) {
      setBookId(book.id);
      setBookTitle(book.title);
      setOpenModalDelete(!openModalDelete);
    }
  };

  const confirmDelete = () => {
    if (bookId) {
      deleteBook(bookId);
      setBookId("");
      setBookTitle("");
    }
    setOpenModalDelete(!openModalDelete);
    setToastProps({
      message: "Livro excluído com sucesso",
      duration: 3000,
      type: "success",
    });

    setShowToast(!showToast);
  };

  const deleteBook = (bookId: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <DefaultLayout>
      <Banner
        background={cataloguebanner}
        title="Catálogo - Área Logada"
        subtitle="Administrador: Dona Clara"
      />
      <TableContainer>
        <Container gap="20px" notPadding>
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
        <Button floating onClick={handleModal}>
          +
        </Button>
        <ModalForm
          isOpen={openModal}
          onClose={handleModal}
          onSave={handleAdd}
          onUpdate={handleUpdate}
        />
        <ModalDelete
          isOpen={openModalDelete}
          onClose={handleModalDelete}
          onConfirm={confirmDelete}
          bookTitle={bookTitle}
          bookId={bookId}
        />
        {showToast && (
          <ToastDisplay
            message={toastProps.message}
            duration={toastProps.duration}
            type={toastProps.type}
            onClose={handleCloseToast}
          />
        )}
      </TableContainer>
    </DefaultLayout>
  );
}
