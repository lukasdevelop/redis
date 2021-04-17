import Queue from 'bull'
import redisConfig from '../config/redis'
import RegistrationMail from '../jobs/RegistrationMail'
import UserReport from '../jobs/UserReport'

const mailQueue = new Queue(RegistrationMail.key, String(redisConfig))
const UserReportQueue = new Queue(UserReport.key, String(redisConfig))

export default {
    mailQueue,
    UserReportQueue
}
/*import * as jobs from '../jobs'


const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, String(redisConfig)),
    name: job.key,
    handle: job.handle,
}))

export default { 
    queues, 
    add(name, data) {
        const queue = this.queues.find(queue => queue.name === name)

        return queue.bull.add(data)
    },
    process(){
        return this.queues.forEach(queue => {

            queue.bull.process(queue.handle)

            /*queue.bull.on('failed', (job, err) =>{
                console.log('Job Failed', queue.name, job.data)
                console.log(err)
            })
        });
    }
}*/
/*import RegistrationMail from '../jobs/RegistrationMail'
const mailQueue = new Queue(RegistrationMail.key, redisConfig)



export default mailQueue
*/