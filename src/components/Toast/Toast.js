import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message = "", level = "notice", dismiss }) {
  const Icon = ICONS_BY_VARIANT[level];

  return (
    <div className={`${styles.toast} ${styles[level]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <div class="VisuallyHidden_wrapper">{level} -</div>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={dismiss}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
