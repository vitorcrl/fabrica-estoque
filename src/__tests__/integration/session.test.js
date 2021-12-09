"use strict";
const truncate = require("../../utils/truncate");
const createConnection = require("./../../database/connection");
const request = require("supertest");
const app = require("./../../app");

describe("Authenticate", () => {
    beforeEach(async () => {
        await createConnection();
    });
    afterEach(async () => {
        await truncate();
    });

    it("entrada de info no banco de dados", async () => {
        const users = { user: "vitor", password_hash: "12345" };
        await request(app)
            .post("/users")
            .send(users)
            .expect(201)
            .then((res) => {
                expect(res.body.message).toBe("Created");
            });
    });
    it("Verificar se o usuario ja existe", async () => {
        const checkUser = { user: "vitor", password_hash: "12345" };

        await request(app)
            .post("/users")
            .send(checkUser)
            .expect(409)
            .then((res) => {
                expect(res.body.message).toBe(
                    "This user name is already in use"
                );
            });
    });
});
