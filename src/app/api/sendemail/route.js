// Importa o NextResponse do Next.js para criar respostas HTTP
import { NextResponse } from "next/server";

// Importa FormData para manipulação de dados de formulário
import FormData from "form-data";

// Importa Mailgun.js para enviar e-mails
import Mailgun from "mailgun.js";

// Carrega variáveis de ambiente a partir de um arquivo .env
require('dotenv').config();

// Exporta uma função assíncrona para lidar com requisições POST
export async function POST(req) {
    try {
        // Extrai os campos nome, email e mensagem do corpo da requisição
        const { nome, email, mensagem } = await req.json();

        // Verifica se todos os campos obrigatórios estão presentes
        if (!nome || !email || !mensagem) {
            // Retorna uma resposta de erro se algum campo estiver faltando
            return NextResponse.json({ error: "Todos os campos são obrigatórios!" }, { status: 400 });
        }

        // Loga as configurações do Mailgun no console para depuração
        console.log("Mailgun Config:", {
            apiKey: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN,
            receiver: process.env.RECEIVER_EMAIL,
        });

        // Cria uma instância do Mailgun com FormData
        const mailgun = new Mailgun(FormData);

        // Configura o cliente Mailgun com a chave da API
        const mg = mailgun.client({
            username: "api",
            key: process.env.MAILGUN_API_KEY,
        });

        // Define o título do e-mail
        const titulo = "Novo contato do site";

        // Envia o e-mail usando o cliente Mailgun configurado
        const data = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
            from: `No-Reply <no-reply@${process.env.MAILGUN_DOMAIN}>`,
            to: [process.env.RECEIVER_EMAIL],
            subject: titulo,
            text: `Email: ${email}\n\n${mensagem}`,
        });

        // Retorna uma resposta de sucesso se o e-mail for enviado com sucesso
        return NextResponse.json({ message: "E-mail enviado com sucesso!", response: data }, { status: 200 });
    } catch (error) {
        // Loga o erro no console para depuração
        console.error("Erro ao enviar o e-mail:", error);

        // Retorna uma resposta de erro se ocorrer um problema ao enviar o e-mail
        return NextResponse.json({ error: "Erro ao enviar o e-mail.", details: error.message }, { status: 500 });
    }
}