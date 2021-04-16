import Mail from '../config/mail'

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data

        await Mail.sendMail({
            from: 'Fila teste <fila@teste.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuario',
            html:`Ola ${user.name} bem vindo ao sistema de filas`
        })
    }
}