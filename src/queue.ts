import 'dotenv/config'
import Queue from './config/queue' 
import { UserReport, RegistrationMail } from './jobs'

Queue.mailQueue.process(RegistrationMail.handle)
Queue.UserReportQueue.process(UserReport.handle)

console.log('Filas em processo...')