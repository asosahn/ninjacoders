import {Request, Response} from "express";
import PingMethods from "./ping.methods";

interface PingInterface {
    getPingRoute: (req: Request, res: Response) => {}
}

/**
 * @description Ping Routes
 */
export default class PingRoutes extends PingMethods implements PingInterface {
    constructor() {
        super();
    }

    /**
     * @description getPingRoute
     * @param req
     * @param res
     */
    async getPingRoute(req: Request, res: Response): Promise<Response> {
        const message = await super.getPing();
        return res.json(message);
    }
}
