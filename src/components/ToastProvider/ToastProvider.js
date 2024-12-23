import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

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
