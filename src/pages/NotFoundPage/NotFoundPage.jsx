import React from "react";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
