import { Button } from "./styles/Button";
import { Modal } from "./styles/Modal";
import { Title } from "./styles/Title";

interface ModalDeleteProps {
  isOpen: boolean;
  bookTitle: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function ModalDelete({
  isOpen,
  bookTitle,
  onClose,
  onConfirm,
}: ModalDeleteProps) {
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
            <Title>Deseja excluir {bookTitle}?</Title>
            <p>Essa alteração não pode ser desfeita.</p>

            <div className="buttons">
              <Button size="small" onClick={onConfirm}>
                Confirmar
              </Button>
              <Button size="small" variant="dark" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
