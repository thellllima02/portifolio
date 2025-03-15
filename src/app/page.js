import styles from "./styles.module.css";
import { Iconns } from "../components/iconns"


export default function Page() {
    return (
        <>
            <div className={styles.container}>
                <h1>Olá, me chamo Hércules</h1>
            </div>
            <div className={styles.grade} >
                
                <div>
                    <p className={styles.p}></p>
                    <p className={styles.p}>Sou um desenvolvedor de software que gosta de criar soluções para ajudar a comunidade. Sempre fui muito curioso para ver como as coisas funcionam e como elas podem ser melhoradas. Sempre em busca de aprendizado. 🚀</p>
                   
                </div>
                <div><Iconns src="/img/capa.png" alt=" Foto de Hércules Silva" /></div>    
            </div >
            <div><a className={styles.a} href="/sobre">Saiba mais →</a></div>
        </>
    );
}