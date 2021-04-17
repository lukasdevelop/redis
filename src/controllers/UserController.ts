import Queue from '../config/queue'

const store = async (req: any, res: any) => {
    const { name, email, password } = req.body

    const user = {
        name,
        email,
        password
    }

    Queue.mailQueue.add( { user })//Enviar email
    Queue.UserReportQueue.add( { user })

    return res.json(user)
}

export default {
    store
}