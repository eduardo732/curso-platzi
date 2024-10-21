import express from "express";
import { container } from "tsyringe";
import { ProductsRouter } from "./products.routes";

const routesApi = (app: express.Express) => {
	const router = express.Router();
	app.use("/api/v1", router);
	
	const productsRouter = container.resolve(ProductsRouter);
	router.use("/products", productsRouter.getRouter());
}

export default routesApi;
