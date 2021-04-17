"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bull_1 = __importDefault(require("bull"));
var redis_1 = __importDefault(require("../config/redis"));
var RegistrationMail_1 = __importDefault(require("../jobs/RegistrationMail"));
var UserReport_1 = __importDefault(require("../jobs/UserReport"));
var mailQueue = new bull_1.default(RegistrationMail_1.default.key, String(redis_1.default));
var UserReportQueue = new bull_1.default(UserReport_1.default.key, String(redis_1.default));
exports.default = {
    mailQueue: mailQueue,
    UserReportQueue: UserReportQueue
};
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
//# sourceMappingURL=queue.js.map