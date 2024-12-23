import React from "react";
import { useKeyDown } from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useKeyDown("Escape", () => setToasts([]));

  function addToast(message, level) {
    const newToast = { id: crypto.randomUUID(), message, level };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }

  function dismissToast(id) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
