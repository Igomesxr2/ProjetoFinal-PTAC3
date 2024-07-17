import Image from "next/image";
import styles from './page.module.css';

export default async function Product({ params }) {
  const response = await fetch(
    "http://localhost:3000/api/" + params.id
  );
  const data = await response.json();
  return (
    <div className={styles.productContainer}>
        <Image 
            src={data.imagem} 
            width={350} 
            height={350} 
            alt='Imagem de produto' 
            className={styles.productImage}
        />
        <h1 className={styles.productName}>{data.nome}</h1>
        <h2 className={styles.productDescription}>{data.descricao}</h2>
        <p className={styles.productStatus}>{data.situacao}</p>
        <p className={styles.productPrice}>{data.preco}</p>
        <button className={styles.buyButton}>Comprar</button>
    </div>
  );
}
