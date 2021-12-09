"use strict";
const truncate = require("../../utils/truncate");
const createConnection = require("./../../database/connection");
const request = require("supertest");
const app = require("./../../app");

describe("Cadastro de itens", () => {
    beforeEach(async () => {
        await createConnection();
    });
    // afterEach(async () => {
    //     await truncate();
    // });

    it("Cadastrar itens", async () => {
        const createItems = {
            name: "farinha de trigo",
            quantity: "10",
            user: "vitor",
            createddate: "2003-01-01",
        };
        await request(app)
            .post("/registeritems")
            .send(createItems)
            .expect(201)
            .then((res) => {
                expect(res.body.message).toBe("Created");
            });
    });
    // it("Verificar se o usuario ja existe, para pesquisa", async () => {
    //     const checkUser = { user: "vitor", password_hash: "12345" };

    //     await request(app)
    //         .post("/users")
    //         .send(checkUser)
    //         .expect(409)
    //         .then((res) => {
    //             expect(res.body.message).toBe(
    //                 "This user name is already in use"
    //             );
    // //         });
    // });
});
