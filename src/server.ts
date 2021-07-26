import "reflect-metadata";
import express from "express";
import "./database";

import { router } from "./routes";

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

app.use(express.json());
app.use(router);


app.listen(3000, () => {
    console.log("Server is running")
})