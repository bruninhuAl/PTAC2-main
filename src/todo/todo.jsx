import { useState } from "react";
import { Link } from "react-router-dom";
import "./todo.css";

export default function Todo() {
  const [lista, setLista] = useState([]);
  const [id, setId] = useState(1);
  const [Email, setEmail] = useState("");
  const [Cpf, setCpf] = useState("");
  const [Senha, setSenha] = useState("");
  const [exibirMensagem, setExibirMensagem] = useState(false);

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Email: Email, Cpf: Cpf, Senha: Senha }]);
    setId(id + 1);
    setEmail("");
    setCpf("");
    setSenha("");
    setExibirMensagem(true);
  }

  const remover = (id) => {
    const listaFiltrada = lista.filter((item) => item.id !== id);
    setLista(listaFiltrada);
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

      <div className="card">
        <h1>Login</h1>
        <form onSubmit={salvar}>
          <div className="input-container">
            <p><label htmlFor="email">Email:</label>
            <input
              id="email"
              className="blue-border-input"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={Email}
            /></p>
            <p><label htmlFor="cpf">CPF:</label>
            <input
              id="cpf"
              className="blue-border-input"
              onChange={(e) => setCpf(e.target.value)}
              type="text"
              value={Cpf}
            /></p>
           <p> <label htmlFor="senha">Senha:</label>
            <input
              id="senha"
              className="blue-border-input"
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              value={Senha}
            /></p>
            <button className="blue-border-button">Cadastrar</button>
          </div>
        </form>

        {exibirMensagem && (
          <p className="blue-message">Parabéns, você foi registrado!</p>
        )}

        <div>
          <div className="values-area">
            {lista.map((item) => (
              <div key={item.id}>
                <p>Email: {item.Email}</p>
                <p>CPF: {item.Cpf}</p>
                <button
                  className="blue-border-button"
                  onClick={() => remover(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      



    </div>
  );
}