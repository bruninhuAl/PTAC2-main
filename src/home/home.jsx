import { useState } from "react";
import { Link } from "react-router-dom"
export default function home() {
    const [count, setCount] = useState(0);

    const add = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const diminuir = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const reseta = () => {
        setCount(0);
    };

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