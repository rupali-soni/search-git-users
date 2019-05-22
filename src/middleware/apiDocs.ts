import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../config/swagger.json";
//Modify host in swagger config
const { PORT = 4600 } = process.env;
swaggerDocument.host="localhost:" + PORT;

export const handleAPIDocs = (router: Router) =>
    router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
