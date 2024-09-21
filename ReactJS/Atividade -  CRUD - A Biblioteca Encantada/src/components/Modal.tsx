import { ModalStyle } from "./styles/ModalStyle";
import { Title } from "./styles/Title";

type TModal = "Cadastrar" | "Editar";

interface ModalProps {
  tipo: TModal;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ tipo, isOpen, children, onClose }: ModalProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <ModalStyle onClick={onClose}>
          <div onClick={handleClick}>
            <Title>{tipo}</Title>
            {children}
          </div>
        </ModalStyle>
      )}
    </>
  );
}
