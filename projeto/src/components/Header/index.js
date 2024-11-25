'use client';
import Link from "next/link";
import {useState} from "react"
import styles from "./header.module.css"

export default function Header (){
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header className={styles.header}>
            <button className={styles.botao} onClick={()=>setShowMenu(!showMenu)}>=</button>
            {
                showMenu &&
                <nav className={styles.nav}>
                    <ul className={styles.lista}>
                        <li className={styles.sobre}><Link href="/sobre">Sobre</Link></li>
                        <li className={styles.contato}><Link href="/contato">Contato</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
}