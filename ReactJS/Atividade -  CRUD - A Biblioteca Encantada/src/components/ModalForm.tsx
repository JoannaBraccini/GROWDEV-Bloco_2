import { useState } from "react";
import { Book } from "../types";
import { Button } from "./styles/Button";
import { Form } from "./styles/Form";
import { FormContainer } from "./styles/FormContainer";
import { Modal } from "./styles/Modal";
import { Title } from "./styles/Title";
// import { v4 as uuid } from "uuid";

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
}: //   onConfirm,
ModalFormProps) {
  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");
  const [yearPublished, setYearPublished] = useState(book?.yearPublished || "");
  const [genre, setGenre] = useState(book?.genre || "");
  const [synopsis, setSynopsis] = useState(book?.synopsis || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (title && author && yearPublished && genre && synopsis) {
    //   if (book?.id === "") {
    //     const newBook = {
    //       title,
    //       author,
    //       yearPublished,
    //       genre,
    //       synopsis,
    //       id: uuid(),
    //       registerDate: new Date().toISOString().split("T")[0],
    //     };
    //     onConfirm(newBook); // Passa o livro adicionado
    //   } else {
    //     onConfirm(book);
    //   }
    //   onClose();
    // } else {
    //   alert("Todos os campos são obrigatórios!");
    // }
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
              {book ? `Editar ${book.title}` : "Adicionar Novo Livro"}
            </Title>
            <FormContainer buttonAlign="flex-end">
              <Form onSubmit={handleSubmit}>
                <label>
                  Título:
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label>
                  Autor:
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </label>
                <label>
                  Ano de Publicação:
                  <input
                    type="number"
                    value={yearPublished}
                    onChange={(e) => setYearPublished(e.target.value)}
                  />
                </label>
                <label>
                  Gênero:
                  <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                </label>
                <label>
                  Sinopse:
                  <textarea
                    value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)}
                  />
                </label>
                <div className="buttons">
                  <Button type="submit" size="small">
                    {book ? "Atualizar" : "Adicionar"}
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
