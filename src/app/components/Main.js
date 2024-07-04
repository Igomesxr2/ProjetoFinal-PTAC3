'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";
import ErrorGetData from "./ErrorGetData";

export default function Main(){
    const [listaCamisas, setListaCamisas] = useState([])
    const [listaCompleta, setListaCompleta] = useState([])
    const [errorFetch, setErrorFetch] = useState(true)
 
    useEffect(() => {
        const getProduct = async () => {
            try{

            
                const response = await fetch("http://localhost:3000/api")
                const data = await response.json()

                setListaCamisas(data)
                setListaCompleta(data)
            }catch{
                setErrorFetch(false)
            }
        }

        getProduct()

    }, [])

    if(errorFetch == false){
        return <ErrorGetData/>
      }

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
                        <button><Link href={`product/${camisa.id}`}>Ver camisa</Link></button>
                    </div>
                ))}
            </main>

    )
}