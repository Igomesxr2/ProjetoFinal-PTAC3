'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";

export default function Main(){
    const [listaCamisas, setListaCamisas] = useState([])
    const [listaCompleta, setListaCompleta] = useState([])
 
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("http://localhost:3000/api")
            const data = await response.json()

            setListaCamisas(data)
            setListaCompleta(data)
        }

        getProduct()

    }, [])

    if(listaCompleta[0] == null){
        return(
            <main>
                <Loading />
            </main>
        )
    }

    return(
            <main>
                 {listaCamisas.map((camisa) => (
                    <div key={camisa.id}>
                        {<Image src={camisa.imagem} width={100} height={100} alt='Imagem de produto' />}
                        <h1>{camisa.nome}</h1>
                        <p>{camisa.descricao}</p>
                        <p>{camisa.situacao}</p>
                        <p>{camisa.preco}</p>
                        <button><Link href={`product/${camisa.id}`}>Ver produto</Link></button>
                    </div>
                ))}
            </main>

    )
}