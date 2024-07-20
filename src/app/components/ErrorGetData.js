'use client'

import Image from "next/image"
import styles from './errorGetData.module.css'

export default function ErrorGetData() {
    return (
        <div className={styles.errorContainer}>
            <Image
                src="https://www.how2pc.com/wp-content/uploads/2019/08/HTTP-Error-500-Explained-And-How-To-Fix-500-Internal-Server-Error.png"
                width={800}
                height={350}
                alt="Error Image"
                className={styles.errorImage}
            />
            <h1 className={styles.errorMessage}>Lamentamos, o servidor foi de vasco.</h1>
        </div>
    )
}
