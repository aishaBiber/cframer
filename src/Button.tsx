import * as React from "react";
import styles from "./Button.modules.css";

export function Button({ title = "Til" }) {
  return <button className={styles.button}>{title}</button>;
}
