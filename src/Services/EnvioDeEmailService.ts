export class EnvioDeEmailService{

    constructor(message:any){
        this.sendEmail(message)
    }

    private async sendEmail(message:any){
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD,
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

        await transporter.sendMail({
            from:"Mensagem Meu Site <devictor002@gmail.com>",
            to: "victorqueiroz90@outlook.com",
            subject: "Olá, meu nome é: "+ message.nameOrEmail,
            text: "Mensagem: "+message.message
        });
    }

}