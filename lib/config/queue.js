"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bull_1 = __importDefault(require("bull"));
var redis_1 = __importDefault(require("../config/redis"));
var jobs = __importStar(require("../jobs"));
var queues = Object.values(jobs).map(function (job) { return ({
    bull: bull_1.default(job.key, redis_1.default),
    name: job.key,
    handle: job.handle,
}); });
exports.default = {
    queues: queues,
    add: function (name, data) {
        var queue = this.queues.find(function (queue) { return queue.name === name; });
        return queue.bull.add(data);
    },
    process: function () {
        return this.queues.forEach(function (queue) {
            queue.bull.process(queue.handle);
            queue.bull.on('failed', function (job, err) {
                console.log('Job Failed', queue.name, job.data);
                console.log(err);
            });
        });
    }
};
/*import RegistrationMail from '../jobs/RegistrationMail'
const mailQueue = new Queue(RegistrationMail.key, redisConfig)



export default mailQueue
*/ 
//# sourceMappingURL=queue.js.map