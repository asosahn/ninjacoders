import {Request, Response} from "express";
import RootMethods from "./root.methods";

interface RootInterface {
    getRootRoute: (req: Request, res: Response) => {}
}

/**
 * @description Root Routes
 */
export default class RootRoutes extends RootMethods implements RootInterface {
    constructor() {
        super();
    }
    /**
     * @description Get Root Route
     * @param req
     * @param res
     */
    async getRootRoute(req: Request, res: Response): Promise<Response> {
        const message = await super.getRoot();
        return res.json(message);
    }
}
