import chai from "chai";
import { run, stop } from "../lib/browser";
import app from "../framework/pages/index";

const assert = chai.assert;

describe("Авторизация", () => {
    let page;

    beforeEach(async () => {
        await run("https://www.aviasales.ru");
    });

    afterEach(async () => {
        await stop();
    });

    it("Найти билеты", async () => {
        await app().Main().findTickets("Казань", "Венеция");
        assert.strictEqual(
            profileNameText,
            "",
            "Имя пользователя не равно demo"
        );
    });
});
