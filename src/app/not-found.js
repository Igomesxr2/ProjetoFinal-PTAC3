import Image from "next/image";
import Header from "./components/Header";
import Styles from "./not-found.module.css"
import Link from "next/link";
export default function NotFound() {
    return (
        <div>
            <Header />
            <div className={Styles.image}>
                <Image className={Styles.image}
                    src={"https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg"}
                    width={1000} height={350} alt='Imagem de produto'
                />
            </div>

            <div className={Styles.content}>

                <h1>Página de Erro</h1>

                <p>A página acessada não foi encontrada.</p>

                <Link href={"/"}>
                    <button className={Styles.button}>Voltar</button>
                </Link>

            </div>
        </div>
    );
}