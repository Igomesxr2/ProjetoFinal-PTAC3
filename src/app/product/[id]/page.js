import Image from "next/image";

export default async function Product({ params }) {
  const response = await fetch(
    "http://localhost:3000/api/" + params.id
  );
  const data = await response.json();
  return (
    <div>
        {<Image src={data.imagem} width={100} height={100} alt='Imagem de produto' />}
        <h1>{data.nome}</h1>
        <h2>{data.descricao}</h2>
        <p>{data.situacao}</p>
        <p>{data.preco}</p>
    </div>
  )
}