// src/components/SubmitBtn.jsx
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import styles from "../styles/SubmitBtn.module.css";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`${styles.button} ${pending ? "disabled" : ""}`}
      disabled={pending}
    >
      {pending ? (
        <div className={styles.spinner}></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className={`${styles.icon} ${styles.iconHover}`} />
        </>
      )}
    </button>
  );
}

export default SubmitBtn;
