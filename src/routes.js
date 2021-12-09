const { Router } = require("express");
const createUser = require("./services/userService");
const checkUser = require("./services/userService");
const routes = Router();

routes.post("/", (req, res) => res.send("Fabrica"));
//Rota Usuarios
routes.post("/users", async (req, res) => {
    try {
        const { user: user, password_hash: password_hash } = req.body;
        const userExists = await checkUser({ user, password_hash });

        if (userExists) {
            return res
                .status(409)
                .send({ message: "This user name is already in use" });
        }

        const users = await createUser({ user, password_hash });
        console.log(users);

        return res.status(201).send({ message: "Created", user });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
});

// Rota de itens
routes.post("/registeritems", async (req, res) => {
    try {
        const { name, quantity, user } = req.body;
        const userExists = await checkUser({ user, password_hash });

        if (userExists) {
            return res
                .status(409)
                .send({ message: "This user name is already in use" });
        }

        const users = await createUser({ user, password_hash });
        console.log(users);

        return res.status(201).send({ message: "Created", user });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
});

module.exports = routes;
