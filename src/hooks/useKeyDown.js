import React from "react";

export function useKeyDown(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });
}
