const superTest = require("supertest");
const app = require("../app")

describe('Unit testing', () => {

    it("should return 0", async () => {
        await superTest(app)
            .get("/products")
            .expect(404);
    });
});
