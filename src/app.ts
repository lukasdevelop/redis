import 'dotenv/config'
import express from 'express'
import routes from './routes'
import {setQueues, router, BullAdapter} from 'bull-board';


import Queue from './config/queue'

const app = express()
app.use('/admin/queues', router);
app.use(express.json())

setQueues( [
    new BullAdapter(Queue.mailQueue),
    new BullAdapter(Queue.UserReportQueue)
]);


app.use(routes)



export default app