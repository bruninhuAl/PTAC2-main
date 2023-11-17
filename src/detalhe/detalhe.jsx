import { useParams } from "react-router-dom"
import Card from "../Componentes/Card";

export default function Detalhe() {

    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));

    const atividade = lista.filter( (item) => {
        if(item.id == id){
            return item;
        }
        return null;
    })
    console.log(lista)

    return (
        <Card produto={atividade[0]}/>
    );
}