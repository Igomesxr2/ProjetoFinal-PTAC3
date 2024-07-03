'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Main(){
    const [listaCamisas, setListaCamisas] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("http://localhost:3000/api")
            const data = await response.json()

            setListaCamisas(data)
        }

        getProduct()

    }, [])

    return(
            <main>
                 {listaCamisas.map((camisa) => (
                    <div key={camisa.id}>
                        {<Image src={camisa.imagem} width={100} height={100} alt='Imagem de produto' />}
                        <h1>{camisa.nome}</h1>
                        <p>{camisa.descricao}</p>
                        <p>{camisa.situacao}</p>
                        <p>{camisa.preco}</p>
                    </div>
                ))}
            </main>

    )
}