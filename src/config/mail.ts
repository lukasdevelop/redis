import nodemailer from 'nodemailer'

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "53fdec45c234d6",
    pass: "a0f6e500a668e1"
  }
});

export default transport