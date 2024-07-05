import { NextResponse } from "next/server";

export const listaCamisas = [
    {
        id: 1,
        nome: "Camiseta Shadow Ghost",
        descricao: "Camiseta confortavel com arte na frente, estampa do querido Gengar de pokemón.",
        situacao: "Em estoque",
        preco: 59.99,
        cor: "Branca",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/gengar-d09117343983f55f8d17035628743888-1024-1024.webp"
    },

    {
        id: 2,
        nome: "Camiseta Gojo Mangá",
        descricao: "Camiseta confortavel com arte na frente, estampa do gojo com arte em preto e branco.",
        situacao: "Em estoque",
        preco: 69.99,
        cor: "Preta",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/gojo-manga-c935812603b6cd311d17035625764180-1024-1024.webp"
    },

]

export async function GET(){
    return NextResponse.json(listaCamisas)
}