import { useState } from "react";
import { Book } from "../types";
import { ModalStyle } from "./styles/ModalStyle";
import { Form } from "./styles/Form";
import { v4 as uuid } from "uuid";
import { Button } from "./styles/Button";
import { Title } from "./styles/Title";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newBook: Book) => void;
}

export function ModalForm({ isOpen, onClose, onSave }: ModalFormProps) {
  const [book, setBook] = useState<Book>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const title = e.currentTarget.titlev.value;
    const author = e.currentTarget.author.value;
    const yearPublished = e.currentTarget.yearPublished.value;
    const genre = e.currentTarget.genre.value;
    const synopsis = e.currentTarget.synopsis.value;

    if (!title || !author || !yearPublished || !genre || !synopsis) {
      return;
    }

    const newBook: Book = {
      id: uuid(),
      title,
      author,
      yearPublished,
      registerDate: new Date(),
      genre,
      synopsis,
    };

    onSave(newBook);
  };

  return (
    <>
      {isOpen && (
        <ModalStyle>
          <div>
            <Title>Cadastrar novo Livro</Title>
            <Form onSubmit={handleSubmit}>
              <input
                type="text"
                name="titlev"
                value={book?.title}
                placeholder="Título"
              />
              <input
                type="text"
                name="author"
                value={book?.author}
                placeholder="Autor"
              />
              <input
                type="number"
                name="yearPublished"
                value={book?.yearPublished}
                placeholder="Ano de Publicação"
              />
              <input
                type="text"
                name="genre"
                value={book?.genre}
                placeholder="Gênero"
              />
              <textarea
                name="synopsis"
                value={book?.synopsis}
                placeholder="Sinopse"
              />
              <div className="buttons">
                <Button size="small" variant="dark" onClick={onClose}>
                  Cancelar
                </Button>
                <Button type="submit" size="small">
                  Salvar
                </Button>
              </div>
            </Form>
          </div>
        </ModalStyle>
      )}
    </>
  );
}
