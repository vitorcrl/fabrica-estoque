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
const getItems = async ({ name }) => {
    try {
        const connection = await createConnection();
        await connection.connect();
        console.log("foi conectado");
        await connection.query(
            `SELECT * 
            FROM public.registeritems 
            WHERE name = $1`,
            [name]
        );
        await connection.end();
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Erro a listar itens");
    }
};

const userExist = async (user) => {
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
				tu.user = ?`,
            [user]
        );
        await connection.end();
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Erro ao pesquisar usuario");
    }
};
const itemUpdate = async ({ id }) => {
    try {
        const connection = await createConnection();
        await connection.connect();
        console.log("foi conectado");
        await connection.query(
            `SELECT * 
            FROM public.registeritems 
            WHERE name = $1`,
            [id]
        );
        //    console.log(error);
        await connection.end();
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Erro a listar itens");
    }
};

module.exports = createItems;
module.exports = userExist;
module.exports = getItems;
module.exports = itemUpdate;
