const routes = require("express").Router();

const routes = new Router();

routes.post("/sessions", SessionController.store);

export default routes;
