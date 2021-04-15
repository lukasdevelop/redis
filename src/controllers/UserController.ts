import Mail from '../config/mail'


const store = async (req: any, res: any) => {
    const { name, email, password } = req.body

    const user = {
        name,
        email,
        password
    }

    //Enviar email
    await Mail.sendMail({
        from: 'Fila teste <fila@teste.com.br>',
        to: `${name} <${email}>`,
        subject: 'Cadastro de usuario',
        html:`Ola ${name} bem vindo ao sistema de filas`
    })

    return res.json(user)
}

export default {
    store
}