"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var bull_board_1 = require("bull-board");
var queue_1 = __importDefault(require("./config/queue"));
var app = express_1.default();
app.use('/admin/queues', bull_board_1.router);
app.use(express_1.default.json());
bull_board_1.setQueues([
    new bull_board_1.BullAdapter(queue_1.default.mailQueue),
    new bull_board_1.BullAdapter(queue_1.default.UserReportQueue)
]);
app.use(routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map