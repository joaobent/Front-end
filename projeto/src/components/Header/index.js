import Link from "next/link"
import styles from './header.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.lista}>
                    <li>
                        <Link href={'/sobre'}>
                        sobre
                        </Link>
                        
                    </li>
                    <li>
                    <Link href={''}>
                        contato
                        </Link>
                    </li>
                    <li>
                        <Link href={'/states'}>state</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
    
}