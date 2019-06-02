import express, { Router } from "express";
import request from "supertest";
import { applyMiddlewares, applyRoutes } from "../../utils";
import promiseRequest from "request-promise";
import middleware from "../../middleware";
import errorHandlers from "../../middleware/errorHandlers";
import routes from "../../services/search/routes";

jest.mock("request-promise");
(promiseRequest as any).mockImplementation(() => JSON.parse('{ "total_count": 0, "incomplete_results": false, "items": [] }') );

describe("routes", () => {
    let router: Router;

    beforeEach(() => {
        router = express();
        applyMiddlewares(middleware, router);
        applyRoutes(routes, router);
        applyMiddlewares(errorHandlers, router);
    });

    test("a valid string query", async () => {
        const response = await request(router).get("/api/v1/search?username=hajshd ajhsdjasdhk&language=tempoasdp");
        expect(response.status).toEqual(200);
    });

    test("a non-existing api method", async () => {
        const response = await request(router).get("/api/v11/search");
        expect(response.status).toEqual(404);
    });

    test("an empty string", async () => {
        const response = await request(router).get("/api/v1/search?q=");
        expect(response.status).toEqual(500);
    });
});