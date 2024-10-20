import { useState, useEffect } from "react";
import { Book } from "../types";
import { Button } from "./styles/Button";
import { Form } from "./styles/Form";
import { FormContainer } from "./styles/FormContainer";
import { Modal } from "./styles/Modal";
import { Title } from "./styles/Title";
import { v4 as uuid } from "uuid";

interface ModalFormProps {
  isOpen: boolean;
  book: Book;
  onClose: () => void;
  onConfirm: (book: Book) => void;
}

export function ModalForm({
  isOpen,
  book,
  onClose,
  onConfirm,
}: ModalFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [genre, setGenre] = useState("");
  const [synopsis, setSynopsis] = useState("");

  // Sincroniza os estados com o livro passado por props sempre que o modal for aberto ou o livro mudar
  useEffect(() => {
    if (isOpen) {
      setTitle(book.title || "");
      setAuthor(book.author || "");
      setYearPublished(book.yearPublished || "");
      setGenre(book.genre || "");
      setSynopsis(book.synopsis || "");
    }
  }, [isOpen, book]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedBook: Book = {
      ...book,
      title,
      author,
      yearPublished,
      genre,
      synopsis,
      id: book.id || uuid(), // Se for novo, gera um id
      registerDate: book.registerDate || new Date(),
    };
    onConfirm(updatedBook); // Passa o livro atualizado ou novo para o componente pai (catalogue)
    onClose();
  };

  return (
    <>
      {isOpen && (
        <Modal onClick={onClose}>
          <div
            className="wrapper"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Title>
              {book.id ? `Editar ${book.title}` : "Adicionar Novo Livro"}
            </Title>
            <FormContainer buttonAlign="flex-end">
              <Form onSubmit={handleSubmit}>
                <label>
                  Título:
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Autor:
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Ano de Publicação:
                  <input
                    type="number"
                    value={yearPublished}
                    onChange={(e) => setYearPublished(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Gênero:
                  <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Sinopse:
                  <textarea
                    value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)}
                    required
                  />
                </label>
                <div className="buttons">
                  <Button type="button" size="small" onClick={handleSubmit}>
                    {/*mudança para type button e adição do onClick impediu com sucesso a atualização da pagina*/}
                    {book.id ? "Atualizar" : "Adicionar"}
                  </Button>
                  <Button
                    type="button"
                    size="small"
                    variant="dark"
                    onClick={onClose}
                  >
                    Cancelar
                  </Button>
                </div>
              </Form>
            </FormContainer>
          </div>
        </Modal>
      )}
    </>
  );
}
