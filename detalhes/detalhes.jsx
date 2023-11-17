import { useParams } from "react-router-dom"

export default function Detalhe() {

    const { id } = useParams();
    const lista = JSON.parse();
    return (
        <h1>{ id }</h1>
    )
}