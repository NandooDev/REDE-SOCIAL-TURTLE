import nodemailer from "nodemailer";
import { config } from "dotenv";
import { readFileSync } from 'fs';
import { resolve } from 'path';

config();

const transportGmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export function sendMail(toEmail: string, username: string) {
  const filePath = resolve(__dirname, '../html/sendEmailTemplate.html');

  const htmlContent = readFileSync(filePath, 'utf-8');

  transportGmail.sendMail({
    from: "Turtle <turtleredesocial@gmail.com>",
    to: `${toEmail}`,
    subject: `Bem Vindo à Turtle`,
    html: htmlContent,
    text: `Olá ${username}, seja muito Bem Vindo à nossa plataforma Turtle.
        Esperamos que você aproveite de forma descontraida e divertida nossa rede social.
        Qualquer dúvida que tiver entre em contato pelo nosso email turtleredesocial@gmail.com`,
  })
  .then((response) => console.log("Email Enviado"))
  .catch((err) => console.log("Erro ao enviar email"));
}
