import { useState } from "react";
import { Link } from "react-router-dom";

export default function Todo() {
    const [atividade, setAtividade] = useState("")
    const [lista, setLista] = useState([])

    
    
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
        atividade: atividade,
        }]);
        console.log(lista)
    };
    

    return (
        <div>
            <Link to="/home">Home</Link>
            <h1>Lista de Atividades</h1>
            <form onSubmit={salvar}>
                <input type="text" 
                onChange={(e)=> 
                {setAtividade(e.target.value)}}/>
                <button>ADD</button>
            </form>
            {lista.map((ativ)=>
            <div key={ativ.id}>
                <p>{ativ.atividade}</p>
            </div>
            )}
        </div>
    );
}