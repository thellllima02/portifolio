"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Button } from "../../components/button";

export default function Contato() {
    const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("enviando...");

        try {
            const res = await fetch("/api/sendemail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("Mensagem enviada com sucesso!");
                setFormData({ nome: "", email: "", mensagem: "" }); // Limpa os campos
            } else {
                setStatus("Erro ao enviar a mensagem. Tente novamente.");
            }
        } catch (error) {
            setStatus("Erro na conexão. Tente novamente.");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contato</h1>
            {status && <p className={styles.status}>{status}</p>}
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} className={styles.input} required />
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} required />
                </label>
                <label>
                    Mensagem:
                    <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} className={styles.textarea} required></textarea>
                </label>
                <Button label = "Enviar" />
            </form>
        </div>
    );
}
