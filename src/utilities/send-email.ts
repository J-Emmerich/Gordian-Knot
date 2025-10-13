import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import * as nodemailer from 'nodemailer';

const sendEmail = (options: { to: string; subject: string; text: string }) => {
  const transportOptions: SMTPTransport.Options = {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  };
  const transporter = nodemailer.createTransport(transportOptions);

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
