const createConnection = require("../database/connection");

const itemUpdate = async ({ name, quantity, user, id }) => {
    try {
        const connection = await createConnection();
        await connection.connect();
        console.log("foi conectado");
        await connection.query(
            `UPDATE registeritems SET
		      		name = $1,
	 	      		quantity = $2,
		      		user = $3
	  	    	WHERE id = $4;`,
            [name, quantity, user, id]
        );
        console.log(error);
        await connection.end();
        return;
    } catch (error) {
        throw new Error("Erro nao foi possivel atualizar os itens");
    }
};
module.exports = itemUpdate;
