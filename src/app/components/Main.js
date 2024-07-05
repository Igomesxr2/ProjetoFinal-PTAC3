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
    const [pesquisa, setPesquisa] = useState("")
 
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
    
    const pesquisarTexto = (texto) => {
        setPesquisa(texto);
    
        if (texto.trim() == "") {
          setListaCamisas(listaCompleta);
          return;
        }
    
        const novaLista = listaCamisas.filter((camisa) =>
          camisa.nome.toUpperCase().trim().includes(pesquisa.toUpperCase().trim())
        );
        setListaCamisas(novaLista);
      };

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
    
    const precoMaior = () => {
        let novaLista = [...listaCamisas].sort((a, b) => a.preco - b.preco);
        novaLista = novaLista.reverse();
        setListaCamisas(novaLista);
      };

      const precoMenor = () => {
        let novaLista = [...listaCamisas].sort((a, b) => a.preco - b.preco);
        setListaCamisas(novaLista);
      };

      const filtrarCorBranca = () => {
        const novaLista = listaCompleta.filter((camisa) => camisa.cor === "Branca");
        setListaCamisas(novaLista);
    };

    const filtrarCorPreta = () => {
        const novaLista = listaCompleta.filter((camisa) => camisa.cor === "Preta");
        setListaCamisas(novaLista);
    };

    

    return(
            <main>
                <div>
                    <input
                        type="text"
                        value={pesquisa}
                        placeholder="Pesquise Produto"
                        onChange={(event) => pesquisarTexto(event.target.value)}
                    />
               
                     <div>
                        {listaCamisas.map((camisa) => (
                            <div key={camisa.id}>
                                {<Image src={camisa.imagem} width={200} height={250} alt='Imagem de produto' />}
                                <h1>{camisa.nome}</h1>
                                <p>{camisa.descricao}</p>
                                <p>{camisa.situacao}</p>
                                <p>{camisa.preco}</p>
                                <Link href={`product/${camisa.id}`}><button>Ver camisa</button></Link>
                            
                            </div>
                        ))}
                        
                     </div>

                     <button onClick={orderAZ}>A-Z</button>
                     <button onClick={orderZA}>A-Z</button>
                     <button onClick={precoMaior}>Preço Maior</button>
                     <button onClick={precoMenor}>Preço Menor</button>
                     <button onClick={filtrarCorBranca}>Camisas Brancas</button>
                     <button onClick={filtrarCorPreta}>Camisas Pretas</button>
                </div>
            </main>

    )
}