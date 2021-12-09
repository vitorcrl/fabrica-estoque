"use strict";
const createConnection = require("./../../database/connection");
const request = require("supertest");
const app = require("./../../app");

describe("Cadastro de itens", () => {
    beforeEach(async () => {
        await createConnection();
    });
    it("deve retornar os items pelo nome descrito", async () => {
        const getItems = {
            name: "farinha de trigo",
        };
        await request(app)
            .get("/registeritems")
            .send(getItems)
            .expect(200)
            .then((res) => {
                expect(res.body.message).toBe("this items");
            });
    });
});
