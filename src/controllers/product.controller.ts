import { injectable, inject } from "tsyringe";
import { Request, Response } from "express";
import ProductService from "../service/product.service";

@injectable()
class ProductController {
  constructor(
    @inject("ProductService") private productService: ProductService
  ) {}

  getAllProducts = (req: Request, res: Response): void => {
    const products = this.productService.getAllProducts();
    res.json(products);
  }

  getProductById = (req: Request, res: Response): void => {
    const { id } = req.params;
    const product = this.productService.getProductById(parseInt(id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  }

  createProduct = (req: Request, res: Response): void => {
    const { name, price } = req.body;
    const newProduct = this.productService.createProduct(name, price);
    res.status(201).json({
      message: "Creado",
      data: newProduct
    });
  }

  updateProduct = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { name, price } = req.body;
    const updatedProduct = this.productService.updateProduct(parseInt(id), name, price);
    if (updatedProduct) {
      res.json({
        message: "Actualizado",
        data: updatedProduct
      });
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  }

  deleteProduct = (req: Request, res: Response): void => {
    const { id } = req.params;
    const deleted = this.productService.deleteProduct(parseInt(id));
    if (deleted) {
      res.json({ message: "Producto eliminado" });
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  }
}

export default ProductController;
