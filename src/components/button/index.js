import styles from "./styles.module.css";
export function Button({ label }){
    return(
        <button type="submit" className={styles.button}>
            {label}
        </button>
    )
}