import RootMethods from "../../src/router/root/root.methods";

describe('RootMethods', () => {
    test('getRoot', async () => {
        const rootMethods = new RootMethods();
        const response = await rootMethods.getRoot();
        expect(response).toEqual({ message: 'Hello World!' });
    });
});
