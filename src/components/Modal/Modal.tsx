import {
  useEffect,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.scss";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  onClose,
  children,
}: ModalProps): ReactElement | null {
  const modalRoot = document.getElementById("modal-root");

  const handleOverlayClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return createPortal(
    <div className={style.modalOverlay} onClick={handleOverlayClick}>
      <div className={style.modalContent} role="dialog" aria-modal="true">
        {/* Кнопка-крестик */}
        <button
          className={style.modalCloseButton}
          onClick={onClose}
          aria-label="Закрыть модальное окно"
        >
          &times;
        </button>
        <div className={style.modalBody}>{children}</div>
      </div>
    </div>,
    modalRoot!,
  );
}
