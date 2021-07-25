"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
/**
 * GET    => Looking for information
 * POST   => Insert ( Create ) a information
 * PUT    => Update one information
 * DELETE => Remove a information
 * PATH   => Update a specific information
 */
app.get("/", function (request, response) {
    return response.send("Hellow");
});
app.get("/test", function (request, response) {
    //REQUEST => INFORMATION THAT IS ENTERING
    //RESPONSE => INFORMATION THAT IS COMING OUT
    return response.send("Hello my friend");
});
//https://localhost:3000
app.listen(3000, function () {
    console.log("Server is running");
});
