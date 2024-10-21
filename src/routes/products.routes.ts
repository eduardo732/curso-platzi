import express, { Router } from "express";
import { injectable, inject } from "tsyringe";
import ProductController from "../controllers/product.controller";

@injectable()
export class ProductsRouter {
  private router: Router;

  constructor(
    @inject(ProductController) private productController: ProductController
  ) {
    this.router = express.Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/", this.productController.getAllProducts);
    this.router.get("/:id", this.productController.getProductById);
    this.router.post("/", this.productController.createProduct);
    this.router.put("/:id", this.productController.updateProduct);
    this.router.delete("/:id", this.productController.deleteProduct);
  }

  public getRouter(): Router {
    return this.router;
  }
}
