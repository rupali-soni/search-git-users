import request from "request-promise";
import * as userDetailsDataProvider from "./githubUserDetailsDataProvider";

jest.mock("request-promise");

describe("githubUserDetailsDataProvider", () => {
    test("user data", async () => {
        (request as any).mockImplementation(() => Promise.resolve('[]') );
        const result = await userDetailsDataProvider.getUserDetails(20706610 );
        expect(result).toEqual('[]');
    });
});