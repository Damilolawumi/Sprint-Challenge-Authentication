const Users = require("./helpers");

const db = require("../database/dbConfig");

beforeEach(() => {
    return db("users").truncate();
});
describe("Register", () => {
    describe("when a user registers ", () => {
        it("should insert a user", async () => {
            await Users.add({
                username: "Damilola",
                password: "password",

            });
            await Users.add({
                username: "Adekanmbi",
                password: "richgang",

            });
            const users = await db("users");
            expect(users).toHaveLength(2);
        });
    })
});