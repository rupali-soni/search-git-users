import {userEntity} from "./userEntity";


describe("userEntity", () => {
    test("user Entity instance", async () => {
        const result = new userEntity (
            '', '','', 0
        );
        expect(result).toBeInstanceOf( userEntity );
    });
});