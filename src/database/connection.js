const { Client } = require("pg");

const createConnection = async () => {
    const client = new Client({
        user: "postgres",
        host: "127.0.0.1",
        database: "postgres",
        password: "docker",
        port: 5432,
    });
    return client;
};

module.exports = createConnection;
