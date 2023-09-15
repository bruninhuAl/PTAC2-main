import { useState } from "react";
import { Link } from "react-router-dom"
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function home() {
    const [name, setName] = useState("");

    return(
        <div>
            <h1>Home</h1>
            <Link to="/todo">TO DO LIST</Link>
            <p>{count}</p>
            <button onClick={add}>+</button>
            <button onClick={diminuir}>-</button>
            <button onClick={reseta}>Reset</button>
        </div>
    );
}