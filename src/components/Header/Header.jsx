import logo from "../../assets/dmbLogo.svg";
import wpLogo from "../../assets/logo-green-small.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header() {
  let animaHam = () => {
    const enlaces = document.querySelector(".enlaces-menu");
    const barras = document.querySelectorAll(".ham span");

    enlaces.classList.toggle("activado");
    barras.forEach((child) => {
      child.classList.toggle("animado");
    });
  };

  const activeBot = () => {
    console.log("poner numero de whatsaap para mandar mensaje");
  };

  const viewSubmenu = () => {
    const subMenu = document.querySelector(".subMenu");

    subMenu.classList.toggle("mostrar");
  };

  return (
    <header className="header">
      <div className="top-header">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="ham" onClick={animaHam}>
          <span className="br1"></span>
          <span className="br2"></span>
          <span className="br3"></span>
        </div>
      </div>
      <div className="bottom-header">
        <ul className="enlaces-menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <div className="menu-submenu">
            <li onClick={viewSubmenu}>
              <Link to="#">DENUNCIA DE SINIESTRO</Link>
            </li>
            <div className="subMenu">
              <Link to="/complaint-car">AUTO</Link>
              <Link to="/complaint-moto">MOTO</Link>
              <Link to="/complaint-home">HOGAR</Link>
              <Link to="/complaint-consortium">CONSORCIO</Link>
              <Link to="/complaint-other">OTRO</Link>
            </div>
          </div>
          <li><HashLink to="/#footer">CONTACTO</HashLink></li>
          
        </ul>
      </div>

      <Link to={"https://wa.me/5491150459606?text=Hola%20como%20estas?"}><img className="wp-logo" src={wpLogo} alt="wp-logo" onClick={activeBot} /></Link>
    </header>
  );
}

export default Header;
