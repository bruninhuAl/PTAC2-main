import { useParams } from "react-router-dom"

export default function Detalhe() {

    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));

    const atividade = lista.filter( (item) => {
        if(objeto.id == id){
            return objeto;
        }
        return null;
    })
    console.log(lista)

    return (
        <h1>{ id }</h1>
    );
}