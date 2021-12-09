// s
const createConnection = require("../database/connection");

const createItems = async ({ name, quantity, user, createddate }) => {
    try {
        const connection = await createConnection();
        await connection.connect();
        console.log(`conectou`);
        await connection.query(
            `INSERT INTO registeritems (name, quantity,"user", createddate ) values
            ($1, $2, $3, $4) RETURNING *  `,
            [name, quantity, user, createddate]
        );
        //        await connection.end();
        return;
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao inserir Items");
    }
};

module.exports = createItems;
