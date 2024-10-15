import express, { NextFunction, Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

// con npm install faker puedes usar faker para generar datos aleatorios
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello World" });
});

app.get("/products", (req: Request, res: Response) => {
  res.send([
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
  ]);
});

app.get("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
  ];
  const product = products.find((product) => product.id === parseInt(id));
  res.send(product);
});

//Manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send("Something went wrong");
});

//la aplicacion escucha en el puerto 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

