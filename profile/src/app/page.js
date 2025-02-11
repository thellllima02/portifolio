import styles from "./styles.module.css";


export default function Page(){
    return (
        <div>
            <h1>Olá, me chamo Hércules</h1>
            <div >
                <p className={styles.p}>Sou um desenvolvedor de software que gosta de criar soluções para ajudar a comunidade. Sempre foi muito curioso para ver como as coisas funcionam e como elas podem ser melhoradas. Sempre em busca de aprendizado. 🚀</p>
                </div>
                <img className={styles.image} src="./img/capa.jpg" alt="Hercules" />
        </div>
    
    );
}