import { useState } from "react";
import { Link } from "react-router-dom"
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function home() {
    const [pet, setPet] = useState([
                {
                  nome: 'Porto de Galinhas',
                  preco: '10x R$ 165 sem juros',
                  imagem: "https://thumbcdn-z.hotelurbano.net/dpzTYnZcnx7biCB9tvdLzo4olFc=/320x240/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2023/07/26/12/44/iStock_1393142437.jpg"
                },
                {
                  nome: 'Balneário Camboriú - 8 Dias',
                  preco: '12x R$ 608 sem juros',
                  imagem: "https://tse2.mm.bing.net/th?id=OIP.9PUPyM-v_fd8BInopxE3cQHaEK&pid=Api&P=0&h=180"
                },
                {
                  nome: 'Bueno Aires - 4 Dias',
                  preco: '10x R$ 270 sem juros',
                  imagem: "https://tse2.mm.bing.net/th?id=OIP.ZbziJz0fXfeyd0v7qApPagHaEK&pid=Api&P=0&h=180"
                },
                {
                  nome: 'Paris, Alpes e Itália',
                  preco: '12x R$ 674 sem juros',
                  imagem: "https://tse3.mm.bing.net/th?id=OIP.APAF-VEqoJKONYm8pSEcUwHaE7&pid=Api&P=0&h=180"
                }

    ]);
    
    

    return(
        <div>
            <section className="header_menu" id="header_menu">
         <div className="container-fluid px-0 shadow">
         <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
         <a className="navbar-brand pl-5 pl-small-0" href="/">
         <img src="https://projeto-final-alg-laec-e-design.bruninhu.repl.co/Logo%20Navbar.png" className="img img-fluid" width="120px" alt="logo" />
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Produtos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre nós</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
     </nav>
      </div>
     </section>

            
    </div>
    );
}