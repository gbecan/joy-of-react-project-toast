import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, dismissToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, level }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            message={message}
            level={level}
            dismiss={() => dismissToast(id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
