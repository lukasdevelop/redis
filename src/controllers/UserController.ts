import Queue from '../config/queue'

const store = async (req: any, res: any) => {
    const { name, email, password } = req.body

    const user = {
        name,
        email,
        password
    }

    //Enviar email

    await Queue.add('RegistrationMail', { user })

    await Queue.add('UserReport', { user })

    return res.json(user)
}

export default {
    store
}