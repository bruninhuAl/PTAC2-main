import { useState } from "react";
import { Link } from "react-router-dom";

export default function Todo() {
  const [lista, setLista] = useState([]);
  const [id, setId] = useState(1);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        atividade: atividade,
        id: id,
      },
    ]);
    setId(1 + 1);
    console.log(lista);
  };

  return (
    <div>
      <section className="header_menu" id="header_menu">
        <div className="container-fluid px-0 shadow">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: "#89CFF0" }}
          >
            <a className="navbar-brand pl-5 pl-small-0" href="/">
              <img
                src="https://projeto-final-alg-laec-e-design.bruninhu.repl.co/Logo%20Navbar.png"
                className="img img-fluid"
                width="120px"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Produtos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sobre nós
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      
    </div>
  );
}
