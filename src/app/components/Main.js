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

    const orderAZ = () => {
        const novaLista = [...listaCamisas].sort((a,b)=>
            a.nome.localeCompare(b.nome)
        ) 
        setListaCamisas(novaLista)
    }

    const orderZA = () => {
        const novaLista = [...listaCamisas].sort((a,b)=>
            b.nome.localeCompare(a.nome)
        ) 
        setListaCamisas(novaLista)
    }
    

    return(
            <main>
                <div>
                    {listaCamisas.map((camisa) => (
                        <div key={camisa.id}>
                            {<Image src={camisa.imagem} width={100} height={100} alt='Imagem de produto' />}
                            <h1>{camisa.nome}</h1>
                            <p>{camisa.descricao}</p>
                            <p>{camisa.situacao}</p>
                            <p>{camisa.preco}</p>
                            <Link href={`product/${camisa.id}`}><button>Ver camisa</button></Link>
                           
                        </div>
                    ))}
                     <button onClick={orderAZ}>A-Z</button>
                     <button onClick={orderZA}>A-Z</button>
                </div>
            </main>

    )
}