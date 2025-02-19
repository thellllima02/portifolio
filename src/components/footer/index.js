import styles from "./styles.module.css";
export function Footer({label}) {
    return(
        <footer className={styles.footer}>
            {label}</footer>
    )
}