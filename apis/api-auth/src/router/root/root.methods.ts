
interface RootMethodsInterface {
    getRoot: () => Promise<Record<string, unknown>>
}

/**
 * @description Root Methods
 */
export default class RootMethods implements RootMethodsInterface {
    /**
     * @description Get Root
     */
    async getRoot(): Promise<Record<string, unknown>> {
        return { message: 'Hello World!' };
    }
}



