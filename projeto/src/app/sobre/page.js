import styles from './sobre.module.css'
import Header from '@/components/Header'
export default function sobre(){
    return(
        <div>
        <Header/>
            <main>
                <h1>Sobre</h1>
                <p className={styles.paragrafo}>Minha segunda página</p>
                <p id={styles.unico}>Bento</p>
            </main>
        </div>
        
    )
}