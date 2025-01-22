import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

const transportGmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "turtleredesocial@gmail.com",
    pass: process.env.MAIL_PASS,
  },
});

export function sendMail(toEmail: string, username: string) {
  transportGmail.sendMail({
    from: "Turtle <turtleredesocial@gmail.com>",
    to: `${toEmail}`,
    subject: `Bem Vindo à Turtle`,
    html: `<h1>Olá ${username}, seja muito Bem Vindo à nossa plataforma Turtle.
        Esperamos que você aproveite de forma descontraida e divertida nossa rede social.
        Qualquer dúvida que tiver entre em contato pelo nosso email turtleredesocial@gmail.com</h1>`,
    text: `Olá ${username}, seja muito Bem Vindo à nossa plataforma Turtle.
        Esperamos que você aproveite de forma descontraida e divertida nossa rede social.
        Qualquer dúvida que tiver entre em contato pelo nosso email turtleredesocial@gmail.com`,
  })
  .then((response) => console.log("Email Enviado"))
  .catch((err) => console.log("Erro ao enviar email"));
}
