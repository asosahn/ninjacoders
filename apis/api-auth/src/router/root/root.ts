import { Router, Request, Response } from "express";
import RootMethods from "./root.Routes";

const router = Router();

/**
 * @description Root Router
 */
router.get('/', (req: Request, res: Response) => {
    return new RootMethods().getRootRoute(req, res);
});

export default router;
