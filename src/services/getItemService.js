const createConnection = require("../database/connection");

const getItems = async (user) => {
    try {
        const connection = await createConnection();
        await connection.connect();
        console.log("conected..");
        const resposta = await connection.query(
            `SELECT name, quantity
        FROM registeritems
        WHERE user = $1`,
            [user]
        );
        await connection.end();
        return resposta;
    } catch (error) {
        console.log(error);
        throw new Error("Erro a listar itens");
    }
};
module.exports = getItems;
