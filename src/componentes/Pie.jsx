import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import logo from '../assets/herogra-logo.png';

export default function Footer() {
  return (
    <footer className="shadow-2xl text-neutral-content">
      <div className="max-w-7xl mx-auto px-6 py-10  ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo e información */}
          <div className="flex items-center gap-4">
            <a
              href="https://herogragroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-xl w-28"
            >
              <img src={logo} alt="Herogra" className="w-full h-auto" />
            </a>
            <p className="text-sm md:text-base">
              © 2020 Herogra Group <br />
              Todos los derechos reservados
            </p>
          </div>

          {/* Redes sociales */}
          <div className="text-center md:text-right">
            <h6 className="footer-title mb-2 text-sm font-semibold uppercase tracking-wider">
              Síguenos
            </h6>
            <div className="flex justify-center md:justify-end gap-4 text-2xl">
              <a
                href="https://www.facebook.com/HerograGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/HerograGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/user/herografertilizantes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaYoutube />
              </a>
              <a
                href="https://es.linkedin.com/company/herogragroup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/herogragroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
