import styles from './page.module.css'
import Image from 'next/image'
import Header from '@/components/Header';

export default function Home() {
  const nome= 'João Pedro Bento de Andrade'
  return(
    <div>
      <Header/>
      <h1>
      Página Principal
      </h1>
      <p>Parágrafo da pagina principal</p>
      <p>Autor: {nome}</p>
      <Image className={styles.image}
       src={'/img/carro.jpg'}
        alt='Imagem'
        width={550} 
        height={400} />
    </div>
  );
}