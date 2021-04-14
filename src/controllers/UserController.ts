const store = async (req: any, res: any) => {
    const { name, email, password } = req.body

    const user = {
        name,
        email,
        password
    }

    //Enviar email

    return res.json(user)
}

export default {
    store
}