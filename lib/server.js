"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var app_1 = __importDefault(require("./app"));
var server = http_1.default.createServer(app_1.default);
server.listen(process.env.PORT || 3333, function () { return console.log("Server running at port " + process.env.PORT); });
//# sourceMappingURL=server.js.map