class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) {}

  static fromJson(json: any): Product {
    return new Product(json.id, json.name, json.price);
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      price: this.price
    };
  }
}

export default Product;

