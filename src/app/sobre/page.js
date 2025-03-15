import styles from "../styles.module.css"
export default function Sobre() {
    return (
        <>
            <div className={styles.container}>
                <h1>Sobre</h1>
            </div>
            <div className={styles.grade2}>
                <div>
                    <ul> <h2>Soft Skills</h2>
                        <li>Liderança</li>
                        <li>Gestão de Tempo e Tarefas</li>
                        <li>Comunicação Interpessoal</li>
                        <li>Flexibilidade</li>
                        <li>Trabalho em Equipe</li>
                        <li>Criativadade</li>
                        <li>Proatividade</li>
                        <li>Empatia</li>
                        <li>Ética no Trabalho</li>
                    </ul>

                </div>
                <div>
                <ul> <h2>Hard Skills</h2>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Next JS</li>
                        <li>React Native</li>
                    </ul>
                    
                
                </div>
            </div>

        </>
    );
}