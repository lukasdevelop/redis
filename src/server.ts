import http from 'http'
import app from './app'

const server = http.createServer(app)

server.listen(process.env.PORT || 3333, () => console.log(`Server running at port ${process.env.PORT}`))