const { Router } = require("express");
const createUser = require("./services/userService");
const checkUser = require("./services/userService");
const createItems = require("./services/itemsService");
// const { loginService } = require("./services/loginService");
const routes = Router();

//Rota Usuarios
routes.post("/users", async (req, res) => {
    try {
        const { user: user, password_hash: password_hash } = req.body;
        const userExists = await checkUser({ user, password_hash });

        if (userExists) {
            //         console.log(userExists);
            return res
                .status(409)
                .send({ message: "This user name is already in use" });
        }

        const users = await createUser({ user, password_hash });

        return res.status(201).send({ message: "Created", user });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
});
// Rota de login

// Rota de itens
routes.post("/registeritems", async (req, res) => {
    try {
        const { name, quantity, user, createddate } = req.body;

        const registerItems = await createItems({
            name,
            quantity,
            user,
            createddate,
        });
        console.log(registerItems);

        return res.status(201).send({ message: "Created", name });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});
routes.get("/registeritems", async (req, res) => {
    try {
        const { name } = req.body;
        const showItems = await getItems({
            name,
        });
        console.log(showItems);
        return res.status(200).send({ message: "items" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});
//routes.put("/registeritems:id", itemUpdate.update);

module.exports = routes;
