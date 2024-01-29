import express, { Application } from "express";
import cors from "cors";
import * as OpenApiValidator from "express-openapi-validator";
import { mainAllFunction } from "./router/main.router";
import { ApolloServer, BaseContext } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./graphQL/typeDefs";
import { resolvers } from "./graphQL/resolvers";
const bodyParser = require("body-parser");
const morgan = require("morgan");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const { connector } = require("swagger-routes-express");

const app: Application = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  morgan("dev", {
    skip: (req: Request) => req.url === "/api/ping",
  }),
);
const swagger = YAML.load("./swagger/swagger.yaml");

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  const connect = connector({ ...mainAllFunction }, swagger);
  const validator: any = OpenApiValidator.middleware({
    apiSpec: "./swagger/swagger.yaml",
    validateRequests: true,
    validateResponses: false,
  });
  app.use(validator);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server),
  );
  connect(app);
});

// Main Router
// app.use("/api",mainRouter);

export default app;
