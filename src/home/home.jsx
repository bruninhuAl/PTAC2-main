import { useState } from "react";
import { Link } from "react-router-dom"
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function home() {
    const [pet, setPet] = useState([
                {
                  nome: '10 bolinhas interativas',
                  preco: '59,98',
                  imagem: "https://cdn.dooca.store/1545/products/66fzuhkkgjzxjlxhihr1kt0mlreoxmc40xvx_640x640+fill_ffffff.jpg?v=1608638519&webp=0"
                },
                {
                  nome: 'Removedor de pelo 2 em 1',
                  preco: '55,69',
                  imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/s82e6d42ef8cb4a8086c3d40a130f8aa9d-925c8fc31ead173ace16666744051154-640-0.jpg"
                },
                {
                  nome: 'Polvo de Brinquedo',
                  preco: '55,69',
                  imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/s570ee7c48b66468c8c366577aa3839b1a-ebcfb2e42559d7858216666740563662-640-0.jpg"
                },
                {
                  nome: 'Fonte para Pet 3L',
                  preco: '327,87',
                  imagem: "https://d2r9epyceweg5n.cloudfront.net/stores/002/494/748/products/s1d3ab9eda2be4485a2c08b990dbf8592o-ac88efc65b9389629b16666738172202-640-0.jpg"
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