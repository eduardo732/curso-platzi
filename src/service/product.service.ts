import { injectable } from "tsyringe";
import Product from "../model/product.model";
@injectable()
class ProductService {
  private products: Product[] = [];

  constructor() {
    // Inicializar con algunos productos de ejemplo
    this.products = [
      new Product(1, "Product 1", 100),
      new Product(2, "Product 2", 200)
    ];
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  createProduct(name: string, price: number): Product {
    const newProduct = new Product(this.products.length + 1, name, price);
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: number, name: string, price: number): Product | undefined {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
      this.products[productIndex] = new Product(id, name, price);
      return this.products[productIndex];
    }
    return undefined;
  }

  deleteProduct(id: number): boolean {
    const initialLength = this.products.length;
    this.products = this.products.filter(product => product.id !== id);
    return this.products.length !== initialLength;
  }
}

export default ProductService;
