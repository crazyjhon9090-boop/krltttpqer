// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SidebarContainer from "../components/sidebars/SidebarContainer";
import "../styles/Contact.css";
import "../styles/layout-base.css";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Enviando...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Mensagem enviada com sucesso!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container contact-page">
      <h1>Entre em Contato</h1>
      <p className="page-subtitle">
        Fale com nosso SAC — dúvidas, sugestões ou suporte.
      </p>

      <div className="contact-layout">
        {/* CONTEÚDO PRINCIPAL */}
        <div className="contact-content">
          <div className="contact-card">
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <label>Nome</label>
              <input type="text" name="name" required />

              <label>E-mail</label>
              <input type="email" name="email" required />

              <label>Mensagem</label>
              <textarea name="message" rows="5" required />

              <button
                type="submit"
                className="contact-btn"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </button>

              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>

        {/* SIDEBAR GLOBAL */}
        <SidebarContainer />
      </div>
    </div>
  );
};

export default Contact;
