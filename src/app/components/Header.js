import Image from "next/image";
import styles from './header.module.css';

export default function Header() {
    return (
        <div className={styles.headerContainer}>
                <Image
                    src="/logotipo.png"
                    width={100}
                    height={100}
                    alt="Logotipo"
                />
            <h1 className={styles.title}>GEEK HOUSE</h1>
        </div>
    );  
}
