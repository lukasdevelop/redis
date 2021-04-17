"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var queue_1 = __importDefault(require("./config/queue"));
var jobs_1 = require("./jobs");
queue_1.default.mailQueue.process(jobs_1.RegistrationMail.handle);
queue_1.default.UserReportQueue.process(jobs_1.UserReport.handle);
console.log('Filas em processo...');
//# sourceMappingURL=queue.js.map