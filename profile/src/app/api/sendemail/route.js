import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
});

export async function POST(req) {
    try {
        const { to, subject, text } = await req.json();

        if (!to || !subject || !text) {
            return new Response(JSON.stringify({ error: "Campos obrigatórios ausentes" }), { status: 400 });
        }

        const domain = process.env.MAILGUN_DOMAIN;

        const messageData = {
            from: `Seu Nome <no-reply@${domain}>`,
            to,
            subject,
            text,
        };

        const response = await mg.messages.create(domain, messageData);

        return new Response(JSON.stringify({ message: "Email enviado com sucesso!", response }), { status: 200 });
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return new Response(JSON.stringify({ error: "Erro ao enviar email", details: error.message }), { status: 500 });
    }
}
