import Image from "next/image";
import styles from './page.module.css';
import Header from "/src/app/components/Header"
import Footer from "/src/app/components/Footer"
import Link from "next/link";

export default async function Product({ params }) {
  const response = await fetch(
    "http://localhost:3000/api/" + params.id
  );
  const data = await response.json();
  return (
    <div>
      <Header />
      <div className={styles.productContainer}>
          <Image 
              src={data.imagem} 
              width={300} 
              height={300} 
              alt='Imagem de produto' 
              className={styles.productImage}
          />
          <h1 className={styles.productName}>{data.nome}</h1>
          <h2 className={styles.productDescription}>{data.descricao}</h2>
          <p className={styles.productStatus}>{data.situacao}</p>
          <p className={styles.productStatus}>{data.cor}</p>
          <p className={styles.productStatus}>{data.id}</p>
          <p className={styles.productPrice}>{data.preco}</p>
          
          <button className={styles.buyButton}>Comprar</button>
      </div>
      <div className={styles.buttonContainer}>
        <Link href={`http://localhost:3000`}>
          <button className={styles.linkButton}>Voltar</button>
        </Link>  
      </div>
      <Footer/>
    </div>
  );
}