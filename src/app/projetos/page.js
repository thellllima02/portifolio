import styles from "../styles.module.css"
import { Iconns } from "../../components/iconns";
export default function Projetos() {
    return (
        <>
            <div className={styles.container}>
                <h1>Projetos</h1>
            </div>
            <div className={styles.grade2}>
                <div className={styles.title}>
                    <Iconns src="/img/cesa.png" alt="Projeto CESA"></Iconns>
                    <ul><h2>Projeto CESA</h2>
                        <li>Projeto criado para agilizar a locação de veiculos.</li>
                        <li>Utilizamos Java, pois era um requisito da disciplina.</li>
                        <li>Fui responsavel pelo layout e imprementação do front end.</li>
                        <li>Conseguimos criar uma interface simples e intuitiva.</li>
                    </ul>



                </div>
                <div className={styles.title}>
                    <Iconns src="/img/choco1.png" alt="Projeto Doçura Cacau"></Iconns>
                    <ul> <h2>Projeto Doçura Cacau</h2>
                        <li>
                            Projeto criado para um empresa de chocolate.
                        </li>
                        <li>
                            Utilizamos Next JS para criar uma interface simples e intuitiva.
                        </li>
                        <li>
                            Fiquei responsavel pelo Dashboard e criação de graficos.
                        </li>
                        <li>
                            Conseguimos criar uma interface simples e intuitiva.
                        </li>
                        <li>
                            Aprendizado de como criar uma tela modal em Next JS
                        </li>
                    </ul>


                </div>

            </div>
        </>
    );
}