/* eslint-disable consistent-return */
const express = require("express");
const http = require("http");
const routes = require("./routes");

const app = express();
const httpServer = http.Server(app);

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

if (process.env.NODE_ENV !== "test") {
    httpServer.listen(port, () => {
        console.log(`Porta ${port}`);
    });
}
module.exports = app;
