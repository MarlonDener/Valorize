import "reflect-metadata";
import express from "express";
import "./database";

const app = express();

/**
 * GET    => Looking for information
 * POST   => Insert ( Create ) a information
 * PUT    => Update one information
 * DELETE => Remove a information
 * PATH   => Update a specific information 
 */

/**
 * Routes Params => http://localhost:3000/produtos/5484848484
 * Query Params => http://localhost:3000/produtos?numero=5484848484
 * Body Params => {
 * "name": "teclado"
 *  "quantidade: 2"}
 */

app.get("/", function(request, response) {
    return response.send("Hellow")
})
app.get("/test/{id}", (request, response) => {
    //REQUEST => INFORMATION THAT IS ENTERING
    //RESPONSE => INFORMATION THAT IS COMING OUT

    return response.send("Hello my friend usadsas")
})

app.post("/test-post", (request, response) => {
    return response.send("Running test-post")
})
//https://localhost:3000
app.listen(3000, () => {
    console.log("Server is running")
})