import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  function handleDimiss(id) {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, level }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            message={message}
            level={level}
            dismiss={() => handleDimiss(id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
