import { Router } from "express";
import rootRouter from "./root/root";
import pingRouter from "./ping/ping";
import { rootFunctions } from "./root/rootFunction";
import {pingFunctions} from "./ping/pingFunction";

const MainRouter = Router();


// Main Router
MainRouter.use('/', rootRouter);
MainRouter.use('/ping', pingRouter);

export default MainRouter;


export const mainAllFunction = {
    ...rootFunctions,
    ...pingFunctions
}
