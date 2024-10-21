import "reflect-metadata";
import { container } from "tsyringe";
import ProductService from "../service/product.service";
import ProductController from "../controllers/product.controller";

container.registerSingleton("ProductService", ProductService);
container.registerSingleton("ProductController", ProductController);

export { container };
