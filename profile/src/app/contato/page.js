import styles from "./page.module.css";
export default function Contato(){
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Contato</h1>
        <form className={styles.form}>
          <label>
            Nome:
            <input type="text" name="nome" className={styles.input} required />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" className={styles.input} required />
          </label>
          <label>
            Mensagem:
            <textarea name="mensagem" className={styles.textarea} required></textarea>
          </label>
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
      </div>
    );
}