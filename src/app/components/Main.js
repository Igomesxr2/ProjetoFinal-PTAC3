'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";
import ErrorGetData from "./ErrorGetData";
import styles from './main.module.css';

export default function Main() {
    const [listaCamisas, setListaCamisas] = useState([]);
    const [listaCompleta, setListaCompleta] = useState([]);
    const [errorFetch, setErrorFetch] = useState(true);
    const [pesquisa, setPesquisa] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch("http://localhost:3000/api");
                const data = await response.json();

                setListaCamisas(data);
                setListaCompleta(data);
            } catch {
                setErrorFetch(false);
            }
        };

        getProduct();
    }, []);

    if (errorFetch == false) {
        return <ErrorGetData />;
    }

    if (listaCompleta[0] == null) {
        return (
            <div className={styles.loadingContainer}>
                <Loading />
            </div>
        );
    }

    const pesquisarTexto = (texto) => {
        setPesquisa(texto);

        if (texto.trim() === "") {
            setListaCamisas(listaCompleta);
            return;
        }

        const novaLista = listaCamisas.filter((camisa) =>
            camisa.nome.toUpperCase().trim().includes(pesquisa.toUpperCase().trim())
        );
        setListaCamisas(novaLista);
    };

    const orderAZ = () => {
        const novaLista = [...listaCamisas].sort((a, b) =>
            a.nome.localeCompare(b.nome)
        );
        setListaCamisas(novaLista);
    };

    const orderZA = () => {
        const novaLista = [...listaCamisas].sort((a, b) =>
            b.nome.localeCompare(a.nome)
        );
        setListaCamisas(novaLista);
    };

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

    return (
        <main className={styles.container}>
            <input
                type="text"
                value={pesquisa}
                placeholder="Pesquise Produto"
                onChange={(event) => pesquisarTexto(event.target.value)}
                className={styles.inputField}
            />

            <div className={styles.mainContent}>
                <div className={styles.filterContainer}>
                    
                    <h2>Filtros</h2>

                    <p>Ordem Alfabética:</p>
                    <button onClick={orderAZ} className={styles.button}>A-Z</button>
                    <button onClick={orderZA} className={styles.button}>Z-A</button>
                    
                    <p>Preço:</p>
                    <button onClick={precoMaior} className={styles.button}>Maior</button>
                    <button onClick={precoMenor} className={styles.button}>Menor</button>

                    <p>Cor:</p>
                    <button onClick={filtrarCorBranca} className={styles.button}>Branco</button>
                    <button onClick={filtrarCorPreta} className={styles.button}>Preto</button>
                </div>

                <div className={styles.containerProdutos}>
                    <div className={styles.productList}>
                        {listaCamisas.map((camisa) => (
                            <div key={camisa.id} className={styles.productItem}>
                                <Image src={camisa.imagem} width={200} height={250} alt='Imagem de produto' className={styles.productImage} />
                                <h1 className={styles.productTitle}>{camisa.nome}</h1>
                                <p className={styles.productDescription}>{camisa.descricao}</p>
                                <p>{camisa.situacao}</p>
                                <p className={styles.productPrice}>{camisa.preco}</p>
                                <Link href={`product/${camisa.id}`}>
                                    <button className={styles.linkButton}>Ver camisa</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
