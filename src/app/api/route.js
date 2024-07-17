import { NextResponse } from "next/server";

export const listaCamisas = [
    {
        id: 1,
        nome: "Camiseta Shadow Ghost",
        descricao: "Camiseta confortavel com arte na frente, estampa do querido Gengar de pokemón.",
        situacao: "Em estoque",
        preco: 59.99,
        cor: "Preta",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/gengar-d09117343983f55f8d17035628743888-1024-1024.webp"
    },
    {
        id: 2,
        nome: "Camiseta Arcade Ghost",
        descricao: "Camiseta confortavel com arte na frente, estampa de arcade do Gengar.",
        situacao: "Em estoque",
        preco: 69.99,
        cor: "Branca",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/arcade-62679db44f65dbc5d217069989561609-1024-1024.webp"
    },
    {
        id: 3,
        nome: "Camiseta Gojo Mangá",
        descricao: "Camiseta confortavel com arte na frente, estampa do gojo com arte em preto e branco.",
        situacao: "Em estoque",
        preco: 81.99,
        cor: "Preta",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/gojo-manga-c935812603b6cd311d17035625764180-1024-1024.webp"
    },
    {
        id: 4,
        nome: "Camiseta Evangelion Rei",
        descricao: "Camiseta confortavel com arte na frente, estampa de evangelion com arte colorida e diversificada.",
        situacao: "Em estoque",
        preco: 49.99,
        cor: "Branca",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/rei-1c56bf8c9405e63c4e17035628141573-1024-1024.webp"
    },
    {
        id: 5,
        nome: "Camiseta Cowboy Bebop",
        descricao: "Camiseta confortavel com arte na frente, estampa de Cowboy Bebop com arte vintage.",
        situacao: "Em estoque",
        preco: 39.99,
        cor: "Preta",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/cowboy-1f7875d970f8c709a317035628943263-1024-1024.webp"
    },
    {
        id: 6,
        nome: "Camiseta Minimal Ying Yang Cats",
        descricao: "Camiseta confortavel com arte na frente, estampa minimalista de gatinhos.",
        situacao: "Em estoque",
        preco: 53.99,
        cor: "Branca",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/ying-cat-pb-c41b075e8236b2693917035614999336-1024-1024.webp"
    },
    {
        id: 7,
        nome: "Camiseta Berserk",
        descricao: "Camiseta confortavel com arte na frente, estampa do sofrido Guts.",
        situacao: "Em estoque",
        preco: 59.99,
        cor: "Preta",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/guts-4efeb1704b42c236b717035625929116-1024-1024.webp"
    },
    {
        id: 8,
        nome: "Camiseta Kimetsu no Yaiba",
        descricao: "Camiseta confortavel com arte na frente, estampa do tanjiro e sua turminha do balaco baco.",
        situacao: "Em estoque",
        preco: 75.99,
        cor: "Preta",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/surrender-f34c267638e7f6e7cc17035625216273-1024-1024.webp"
    },
    {
        id: 9,
        nome: "Camiseta Katana",
        descricao: "Camiseta confortavel com arte na frente, estampa minimalista de uma katana.",
        situacao: "Em estoque",
        preco: 39.99,
        cor: "Branca",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/katnaa-008ae531f2de32257617043393501378-1024-1024.webp"
    },
    {
        id: 10,
        nome: "Camiseta Toji",
        descricao: "Camiseta confortavel com arte na frente, estampa do Toji, cara que só perdeu pelo roteiro.",
        situacao: "Em estoque",
        preco: 99.99,
        cor: "Preta",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/toji-6c566251ce35dfa4b117101011499267-1024-1024.webp"
    },
    {
        id: 11,
        nome: "Camiseta Studio Ghibli",
        descricao: "Camiseta confortavel com arte na frente, estampa dos iconicos desenhos feitos pelo Studio Ghibli.",
        situacao: "Em estoque",
        preco: 45.99,
        cor: "Branca",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/adidas-fbc201b067224ffc0917035621412013-1024-1024.webp"
    },
    {
        id: 12,
        nome: "Camiseta Fuji",
        descricao: "Camiseta confortavel com arte na frente, sei lá da onde é essa estampa",
        situacao: "Em estoque",
        preco: 68.99,
        cor: "Branca",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/fuji-e862b91f7a566338ce17035610351644-1024-1024.webp"
    },
    {
        id: 13,
        nome: "Camiseta Yu Yu Hakusho",
        descricao: "Camiseta confortavel com arte na frente, estampa dos amigos do menino que solta tiro pelo dedo.",
        situacao: "Em estoque",
        preco: 78.99,
        cor: "Preta",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/yuyu-f68e4835e6db03daaf17035627090229-1024-1024.webp"
    },
    {
        id: 14,
        nome: "Camiseta Sukuna",
        descricao: "Camiseta confortavel com arte na frente, estampa do sukuna na era heian.",
        situacao: "Em estoque",
        preco: 29.99,
        cor: "Branca",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/sukuna-hand-5aa70d842a68d3803917035615332127-1024-1024.webp"
    },
    {
        id: 15,
        nome: "Camiseta Totoro",
        descricao: "Camiseta confortavel com arte na frente, estampa totoro",
        situacao: "Em estoque",
        preco: 93.99,
        cor: "Branca",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/totoro-off-3edff7ebf99e09492417035625537151-1024-1024.webp"
    },
    {
        id: 16,
        nome: "Camiseta Mob Psycho 100",
        descricao: "Camiseta confortavel com arte na frente, estampa do mob, para marombeiros, malhar para pegar mulher.",
        situacao: "Em estoque",
        preco: 45.99,
        cor: "Preta",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/914/products/mob-1-3ec38e5d393a578ca217035628668959-1024-1024.webp"
    },
]

export async function GET(){
    return NextResponse.json(listaCamisas)
}