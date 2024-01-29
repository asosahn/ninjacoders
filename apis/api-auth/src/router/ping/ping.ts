import { Router, Request, Response } from "express";
import PingRoutes from "./ping.Routes";

const router = Router();

/**
 * @description Root Router
 */
router.get('/ping', (req: Request, res: Response) => {
    return new PingRoutes().getPing()
});

export default router;
