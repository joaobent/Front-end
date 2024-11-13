'use client'
import { useState } from "react"

export default function state() {
    const [conteudo, setConteudo] = useState('bom dia')
    const [name, setName] = useState('')
    const [showdiv, setShowdiv] = useState(true)
    const controlarParagrafo = () => {
        setConteudo('Boa tarde')
        console.log('conteudo: ' + conteudo)
    }
    const continput = (evento) => {
        console.log(evento.target.value)
        setName(evento.target.value)
    }
    return (
        <div>
            {/* <p>{conteudo}</p>
            <button onClick={controlarParagrafo}>mudar</button> */}

            <button onClick={() => { setShowdiv(!showdiv) }}>{showdiv ? 'Esconder' : 'mostrar'}</button>
            {showdiv && (
                <div>
                    <p>nome: {name}</p>
                    <input type="text" onChange={continput} />
                </div>
            )}


        </div>
    )
}
