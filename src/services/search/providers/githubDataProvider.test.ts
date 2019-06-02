import request from "request-promise";
import * as Provider from "./githubDataProvider";

jest.mock("request-promise");

describe("githubDataProvider", () => {
    test("an empty query string", async () => {
        (request as any).mockImplementation(() => Promise.resolve('[]') );
        const result = await Provider.getUsers("hajshd ajhsdjasdhk", 'tempoasdp');
        expect(result).toEqual('[]');
    });

    test("an invalid non-json response", async () => {
        (request as any).mockImplementation(() => Promise.reject("Service Unavailable.") );
        await expect( Provider.getUsers("",'' ) ).rejects.toEqual("Service Unavailable.");
    });
});