import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
import "./Footer.css";

export default function FooterComponent() {
  return (
    <footer>
      <div className="sobre">
        <p>Day-to-Day-tools&copy; Todos os direitos reservados.</p>
      </div>
      <div className="redesSociais">
        <p>Mantenha-se conectado:</p>
        <ul>
          <li>
            <a href="/#">
              <FaFacebookF></FaFacebookF>
            </a>
          </li>
          <li>
            <a href="/#">
              <FaTwitter></FaTwitter>
            </a>
          </li>
          <li>
            <a href="/#">
              <FaInstagram></FaInstagram>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
