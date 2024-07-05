"use client";

import styles from '../styles/ContactForm.module.css';
import toast from "react-hot-toast";
import { sendEmail } from "../lib/sendEmail";
import SubmitBtn from "./button-submit";
import { useRef } from 'react';
import { Holtwood_One_SC } from "next/font/google";
import LineCursor from './LineCursor';

const Rubik = Holtwood_One_SC({ subsets: ["latin"],
  weight: '400', });


const ContactForm = () => {

  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    const result = await sendEmail(formData);
    const { data, error } = result || {};  

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email enviado!🚀");

    // Restablece el formulario usando ref
    formRef.current.reset();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contactame</h1>
      <LineCursor/>
      <form
        ref={formRef}
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          await handleSubmit(formData);
        }}
        className={styles.form}
      >
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ingrese su nombre"
              className={styles.input}
              required
              minLength={1}
              maxLength={100}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Ingrese su email"
              className={styles.input}
              required
              pattern="\S+@\S+\.\S+"
              title="Ponga un email valido"
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Introduzca su mensaje"
            className={styles.textarea}
            required
            minLength={10}
            maxLength={1000}
            title="Introduzca un mesaje mayor a 10 caracteres y menor a 1000 caracteres"
          />
        </div>
        <SubmitBtn />
      </form>
    </div>
  );
};

export default ContactForm;
