const { RowDescriptionMessage } = require("pg-protocol/dist/messages");
const createConnection = require("../database/connection");

const createUser = async ({ user, password_hash }) => {
    try {
        const connection = await createConnection();
        await connection.connect();
        console.log(`conectou`);
        await connection.query(
            `INSERT INTO users ("user", password_hash) values
            ($1, $2) RETURNING *  `,
            [user, password_hash]
        );
        //        await connection.end();
        return;
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao inserir usuarios");
    }
};
const checkUser = async (user) => {
    try {
        const connection = await createConnection();
        await connection.connect();
        console.log("foi conectado");
        await connection.query(
            `SELECT 
				* 
			FROM 
				users tu
			WHERE 
				user = ?`,
            [user]
        );
        await connection.end();
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Erro ao pesquisar usuario");
    }
};
module.exports = checkUser;
module.exports = createUser;
