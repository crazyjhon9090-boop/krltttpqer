import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo1 from "../assets/t-loio.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* REDES SOCIAIS */}
        <div className="footer-column left">
          <h4>Siga a gente</h4>

          <ul className="social-links">

            <li>
              <a href="https://www.instagram.com/luizfelipeloio/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
                Seguir no Instagram
              </a>
            </li>

            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
                Inscrever no YouTube
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/luizloio/" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
                Curtir no Facebook
              </a>
            </li>

            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <i className="fab fa-x-twitter"></i>
                Seguir no X
              </a>
            </li>

            {/* RSS */}
            <li>
              <a href="/rss.xml">
                <i className="fas fa-rss"></i>
                RSS — Receber novidades
              </a>
            </li>

          </ul>
        </div>

        {/* LOGO + CONTATO */}
        <div className="footer-column center">
          <div className="footer-logo">
            <img src={logo1} alt="Logo" />
          </div>

          <p>Entre em Contato</p>
          <p>luiz_loio@hotmail.com</p>
          <p>(91) 98731-9701</p>
        </div>

        {/* LINKS INTERNOS */}
        <div className="footer-column right">
          <h4>+ Info</h4>

          <ul className="footer-links">
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/policies">Políticas</Link></li>
            <li><Link to="/privacy">Privacidade</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} — Todos os direitos reservados.<a href="https://www.technortesolucoes.com.br/" target="_blank" rel="noreferrer">Tech Norte Soluções </a> </p>
      </div>
    </footer>
  );
};

export default Footer;
